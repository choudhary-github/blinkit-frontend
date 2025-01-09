import axios from 'axios';
import { BASE_URL } from './config';

const customerLogin = async (phone: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/customer/login`, {
      phoneNumber: phone,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export { customerLogin };
