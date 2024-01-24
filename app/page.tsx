import LandingPage from './LandingPage'
import StepFour from './(auth)/signup/(SignupSteps)/step4'

export default function Home() {
  return (
    <>
      <div className="hidden lg:block">
        {/* <LandingPage /> */}
        <StepFour />
      </div>
      <div className="block lg:hidden">
        mobile & tab design is not ready yet
      </div>
    </>
  )
}
