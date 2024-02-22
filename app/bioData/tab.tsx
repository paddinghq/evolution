'use client'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import PropTypes from 'prop-types'

import {
  decrementSteps,
  setBioData,
  setSteps,
} from '@/app/Redux/slice/updateProfileSlice'
import { BioData } from './SubmitPostLogic'
import { setLoading, setSubmitting } from '../Redux/slice/signupSlice'
import { toast } from '@/components/ui/use-toast'
import BasicInfo from './biodataComponent/basicInfo'
import Health from './biodataComponent/health'
import Hobbies from './biodataComponent/hobbies'


BasicInfo.propTypes = {
  handleNextStep: PropTypes.func.isRequired,
}
Health.propTypes = {
  handleNextStep: PropTypes.func.isRequired,
  handlePreviousStep: PropTypes.func.isRequired,
}
Hobbies.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handlePreviousStep: PropTypes.func.isRequired,
}

const Tab = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const step = useSelector((state: any) => state.updateProfile.steps)
  // const token =  localStorage.getItem("token")

  const handleNextStep = (stepValues: any) => {
    // console.log({ stepValues })

    dispatch(setBioData(stepValues))
    dispatch(setSteps())
  }

  const handlePreviousStep = () => {
    dispatch(decrementSteps())
  }

  
  const handleSubmit = async (values: any) => {
    dispatch(setLoading(true))
    try {
      const response = await BioData({
        values,
      })

      if (response.status === 200) {
        dispatch(setSubmitting(false))
        toast({
          description: response.data.message,
        })

        setTimeout(() => {
          router.push('/HomePage')
        }, 2000)
      } else {
        dispatch(setSubmitting(false))
        toast({
          variant: 'destructive',
          description: response.data.message,
        })
        setTimeout(() => {
          // window.location.reload()
        }, 2000)
      }
    } catch (err) {
      toast({
        variant: 'destructive',
        description: 'Error occured try again',
      })
      setTimeout(() => {
        // window.location.reload()
      }, 2000)
    }
  }

  let bioData

  switch (step) {
    case 1:
      bioData = <BasicInfo handleNextStep={handleNextStep} />
      break
    case 2:
      bioData = (
        <Health
          handlePreviousStep={handlePreviousStep}
          handleNextStep={handleNextStep}
        />
      )
      break
    case 3:
      bioData = (
        <Hobbies
          handlePreviousStep={handlePreviousStep}
          handleSubmit={handleSubmit}
        />
      )
      break
    default:
      bioData = null
      break
  }

  return <div>{bioData}</div>
}
export default Tab
