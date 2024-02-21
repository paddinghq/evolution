import axios from 'axios'

const API_BASE = 'https://evolution-stagin.onrender.com/api/v1/auth/verify-otp'
const OTP_BASE = 'https://evolution-stagin.onrender.com/api/v1/auth/request-otp'

export const OTPLogic = async (userData: any) => {
  try {
    const response = await axios.post(`${API_BASE}`, userData)
    return response
  } catch (error) {
    throw error
  }
}
export const OTPGet = async (userData: any) => {
  try {
    const response = await axios.post(`${OTP_BASE}`, userData)
    return response
  } catch (error) {
    throw error
  }
}
