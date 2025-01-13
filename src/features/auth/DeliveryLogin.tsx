import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { FC, useState } from 'react';
import { resetAndNavigate } from '@utils/navigationUtils';
import { deliveryLogin } from '@service/authService';
import CustomSafeAreaView from '@components/global/CustomSafeAreaView';
import { screenHeight } from '@utils/Scaling';
import LottieView from 'lottie-react-native';
import CustomText from '@components/ui/CustomText';
import { Fonts } from '@utils/Constants';
import CustomInput from '@components/ui/CustomInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
import CustomButton from '@components/ui/CustomButton';

const DeliveryLogin: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await deliveryLogin(email, password);
      response && resetAndNavigate('DeliveryDashboard');
    } catch (error) {
      Alert.alert('Login Failed');
    } finally {
      setLoading(false);
    }
  };
  return (
    <CustomSafeAreaView>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag">
        <View style={styles.container}>
          <View style={styles.lottieContainer}>
            <LottieView
              loop
              autoPlay
              style={styles.lottie}
              source={require('@assets/animations/delivery_man.json')}
            />
          </View>
          <CustomText variant="h3" fontFamily={Fonts.Bold}>
            Delivery Partner Portal
          </CustomText>
          <CustomText
            variant="h6"
            fontFamily={Fonts.SemiBold}
            style={styles.text}>
            Faster than Flash⚡
          </CustomText>

          <CustomInput
            onChangeText={setEmail}
            value={email}
            left={
              <Ionicons
                name="mail-outline"
                size={RFValue(18)}
                color={'#F8890E'}
                style={{ marginLeft: 10 }}
              />
            }
            placeholder="Email"
            inputMode="email"
            right={false}
          />
          <CustomInput
            onChangeText={setPassword}
            value={password}
            left={
              <Ionicons
                name="key-sharp"
                size={RFValue(18)}
                color={'#F8890E'}
                style={{ marginLeft: 10 }}
              />
            }
            placeholder="Password"
            secureTextEntry
            right={false}
          />
          <CustomButton
            onPress={handleLogin}
            title="Login"
            disabled={
              email.length === 0 || !email.includes('@') || password.length < 8
            }
            loading={loading}
          />
        </View>
      </ScrollView>
    </CustomSafeAreaView>
  );
};

export default DeliveryLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  lottie: {
    height: '100%',
    width: '100%',
  },
  lottieContainer: {
    height: screenHeight * 0.12,
    width: '100%',
  },
  text: {
    marginTop: 2,
    marginBottom: 25,
    opacity: 0.8,
  },
});
