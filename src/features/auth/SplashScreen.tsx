import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import React, { FC, useEffect } from 'react';
import { Colors } from '@utils/Constants';
import { screenHeight, screenWidth } from '@utils/Scaling';
import Logo from '@assets/images/splash_logo.jpeg';
import GeoLocation from '@react-native-community/geolocation';
import { useAuthStore } from '@state/authStore';
import { tokenStorage } from '@state/storage';
import { resetAndNavigate } from '@utils/navigationUtils';
import { jwtDecode } from 'jwt-decode';
import { refetchUser, refresh_token } from '@service/authService';

GeoLocation.setRNConfiguration({
  skipPermissionRequests: false,
  authorizationLevel: 'always',
  enableBackgroundLocationUpdates: true,
  locationProvider: 'auto',
});

interface DecodeToken {
  exp: number;
}

const SplashScreen: FC = () => {
  const { user, setUser } = useAuthStore();

  const checkToken = async () => {
    const accessToken = tokenStorage.getString('accessToken') as string;
    const refreshToken = tokenStorage.getString('refreshToken') as string;

    if (accessToken) {
      const decodedAccessToken = jwtDecode<DecodeToken>(accessToken);
      const decodedRefreshToken = jwtDecode<DecodeToken>(refreshToken);

      const currentTime = Date.now() / 1000;

      if (decodedRefreshToken.exp < currentTime) {
        resetAndNavigate('CustomerLogin');
        Alert.alert('Session Expired');
        return false;
      }

      if (decodedAccessToken.exp < currentTime) {
        try {
          await refresh_token();
          await refetchUser(setUser);
        } catch (error) {
          console.log(error);
          Alert.alert('Refresh Token Expired');
          return false;
        }
      }

      if (user?.role === 'CUSTOMER') {
        resetAndNavigate('ProductDashboard');
      } else {
        resetAndNavigate('DeliveryDashboard');
      }

      return true;
    }
    resetAndNavigate('CustomerLogin');
    return false;
  };

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        GeoLocation.requestAuthorization();
        checkToken();
      } catch (error) {
        Alert.alert(
          'Sorry we need your location to give you better shopping experience',
        );
      }
    };
    const timeoutId = setTimeout(fetchUserLocation, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logoImage} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    height: screenHeight * 0.7,
    width: screenWidth * 0.7,
    resizeMode: 'contain',
  },
});
