import CreateEvent from '@/components/CreateEvent'
import LandingPage from './LandingPage'

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
