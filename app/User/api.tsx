export const updateProfileApi = async (
  userId: any,
  updatedProfileData: any,
) => {
  try {
    const response = await fetch(`/api/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProfileData),
    })

    if (!response.ok) {
      throw new Error('Failed to update profile')
    }

    return await response.json()
  } catch (error) {
    throw new Error(error.message)
  }
}
