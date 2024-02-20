import axios from 'axios'

const API_BASE =
  'https://evolution-stagin.onrender.com/api/v1/auth/complete-signup'

export const BioData = async (userData: any) => {
  try {
    const response = await axios.post(`${API_BASE}`, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response
  } catch (error) {
    throw error
  }
}
