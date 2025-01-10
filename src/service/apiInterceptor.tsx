import axios from 'axios';
import { BASE_URL } from './config';
import { tokenStorage } from '@state/storage';
import { refresh_token } from './authService';
import { Alert } from 'react-native';

export const axiosApp = axios.create({
  baseURL: BASE_URL,
});

axiosApp.interceptors.request.use(config => {
  const accessToken = tokenStorage.getString('accessToken');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

axios.interceptors.response.use(
  response => response,
  async error => {
    if (error.response && error.response.status === 401) {
      try {
        const newAccessToken = await refresh_token();
        if (newAccessToken) {
          error.config.headers.Authorization = `Bearer ${newAccessToken}`;
          return axios.request(error.config);
        }
      } catch (error) {
        console.log('Error refreshing token:', error);
      }
    }
    if (error.response && error.response.status !== 401) {
      const errorMessage =
        error.response.data.message ||
        'Something went wrong. Please try again later.';
      Alert.alert(errorMessage);
    }
    return Promise.resolve(error);
  },
);
