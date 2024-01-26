import LandingPage from './LandingPage'
import Signup from './(auth)/signup'


export default function Home() {
  return (
    <>
      <div className="hidden lg:block">
        <LandingPage />
      </div>
      <div className="block lg:hidden">
        mobile & tab design is not ready yet
      </div>
    </>
  )
}
