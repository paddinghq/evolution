import axios from 'axios'

const allUsersUrl = `http://localhost:8432/api/v1/users`
const getUserUrl = `http://localhost:8432/api/v1/users/:id`
const forgotPasswordUrl = `http://localhost:8432/api/v1/auth/forgot-password`;
const resetPasswordUrl = `http://localhost:8432/api/v1/auth/reset-password`

interface EmailAddress {
  email: string
}

interface ResetPasswordData {
  email: string,
  otp: string,
  password: string,
  confirmPassword: string
}

const getAllUsers = () => {
  const request = axios.get(allUsersUrl)
  return request.then(response => response.data)
}

const getUser = () => {
  const request = axios.get(getUserUrl)
  return request.then(response => response.data)
}

const sendEmail = (newObject: EmailAddress) => {
  const request = axios.post(forgotPasswordUrl, newObject)
  return request.then(response => response.data)
}

const updatePassword = (newObject: ResetPasswordData) => {
  const request = axios.put(resetPasswordUrl, newObject)
  return request.then(response => response.data)
}

export default { getAllUsers, getUser, sendEmail, updatePassword }
