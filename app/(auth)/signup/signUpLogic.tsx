import axios from 'axios'



export const signUp = async (userData: any) => {
  try {
    const response = await axios.post(`${process.env.SIGNUP_ROUTE}`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};