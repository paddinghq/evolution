import {
  updateProfileRequest,
  updateProfileSuccess,
  updateProfileFailure,
} from '../Redux/slice/updateProfileSlice'

const updateProfile =
  (userId: any, updatedProfileData: any) => async (dispatch: any) => {
    try {
      dispatch(updateProfileRequest())
      const updatedProfile = await updateProfileApi(userId, updatedProfileData)
      dispatch(updateProfileSuccess(updatedProfile))
    } catch (error) {
      dispatch(updateProfileFailure(error.message))
    }
  }

export default updateProfile
