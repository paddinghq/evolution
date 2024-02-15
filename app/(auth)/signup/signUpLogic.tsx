import axios from 'axios'

const API_BASE = 'https://evolution-stagin.onrender.com/api/v1/auth/signup'

export const signUp = async (userData: any) => {
  try {
    const response = await axios.post(`${API_BASE}`, userData)
    return response
  } catch (error) {
    throw error
  }
}
