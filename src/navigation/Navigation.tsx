import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '@features/auth/SplashScreen';
import CustomerLogin from '@features/auth/CustomerLogin';
import DeliveryLogin from '@features/auth/DeliveryLogin';
import { navigationRef } from '@utils/navigationUtils';

const Stack = createNativeStackNavigator();

const Navigation: FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen
          name="CustomerLogin"
          options={{ animation: 'fade' }}
          component={CustomerLogin}
        />
        <Stack.Screen
          name="DeliveryLogin"
          options={{ animation: 'fade' }}
          component={DeliveryLogin}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
