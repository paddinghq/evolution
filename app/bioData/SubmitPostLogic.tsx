import axios from 'axios'

const API_BASE =
  'https://evolution-stagin.onrender.com/api/v1/users/me'

// const token = localstorage.getItem("token") 

export const BioData = async (userData: any) => {
  try {
    const response = await axios.patch(`${API_BASE}`, userData, {
      headers: {
        'Content-Type': 'application/json',
        // 'bearer': `${token}`
      },
    })
    return response
  } catch (error) {
    throw error
  }
}
