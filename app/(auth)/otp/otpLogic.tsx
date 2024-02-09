import axios from 'axios'



export const OTPLogic = async (userData: any) => {
  try {
    const response = await axios.post(`${process.env.VERIFY_OTP_ROUTE}`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};