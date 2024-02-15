import axios from 'axios'

const getUserUrl = `https://evolution-stagin.onrender.com/api/v1/users/me`
const forgotPasswordUrl = `https://evolution-stagin.onrender.com/api/v1/auth/forgot-password`
const resetPasswordUrl = `https://evolution-stagin.onrender.com/api/v1/auth/reset-password`

interface EmailAddress {
  email: string
}

interface ResetPasswordData {
  email: string
  otp: string
  password: string
  confirmPassword: string
}

const getUser = () => {
  const request = axios.get(getUserUrl)
  return request.then((response) => response.data)
}

const sendEmail = async (newObject: EmailAddress) => {
  try {
    const response = await axios.post(forgotPasswordUrl, newObject)
    return response
  } catch (error) {
    throw error
  }
}

const updatePassword = async (newObject: ResetPasswordData) => {
  try {
    const response = await axios.put(resetPasswordUrl, newObject)
    return response
  } catch (error) {
    throw error
  }
}

export default { getUser, sendEmail, updatePassword }
