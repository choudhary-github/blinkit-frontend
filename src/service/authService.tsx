import axios from 'axios';
import { BASE_URL } from './config';
import { tokenStorage } from '@state/storage';
import { useAuthStore } from '@state/authStore';
import { Alert } from 'react-native';
import { resetAndNavigate } from '@utils/navigationUtils';
import { axiosApp } from './apiInterceptor';

const customerLogin = async (phone: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/customer/login`, {
      phoneNumber: phone,
    });
    const { accessToken, refreshToken, customer } = response.data;
    tokenStorage.set('accessToken', accessToken);
    tokenStorage.set('refreshToken', refreshToken);
    const { setUser } = useAuthStore.getState();
    setUser(customer);
  } catch (error) {
    console.log(error);
  }
};

const deliveryLogin = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/delivery/login`, {
      email,
      password,
    });

    const { accessToken, refreshToken, deliveryPartner } = response.data;

    tokenStorage.set('accessToken', accessToken);
    tokenStorage.set('refreshToken', refreshToken);

    const { setUser } = useAuthStore.getState();

    setUser(deliveryPartner);
    return true;
  } catch (error) {
    Alert.alert('Login Failed');
    console.log(error);
  }
};

const refresh_token = async () => {
  try {
    const refreshToken = tokenStorage.getString('refreshToken');

    const response = await axios.post(`${BASE_URL}/refresh-token`, {
      refreshToken,
    });

    const new_access_token = response.data.accessToken;
    const new_refresh_token = response.data.refreshToken;

    tokenStorage.set('accessToken', new_access_token);
    tokenStorage.set('refreshToken', new_refresh_token);

    return new_access_token;
  } catch (error: any) {
    console.log(error);
    Alert.alert('Refresh Token error', error.message);
    tokenStorage.clearAll();
    resetAndNavigate('CustomerLogin');
  }
};

const refetchUser = async (setUser: any) => {
  try {
    const response = await axiosApp.get('/user');
    setUser(response.data.user);
  } catch (error) {
    console.log('Login Error', error);
  }
};

export { customerLogin, refresh_token, refetchUser, deliveryLogin };
