import axios from 'axios'

const API_BASE_URL = 'https://evolution-stagin.onrender.com/api/v1/auth/signup';

export const signUp = async (userData: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};