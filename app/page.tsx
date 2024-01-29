import LandingPage from './LandingPage'
// import LandingPage from './HomePage/page'

export default function Home() {
  return (
    <>
      <div className="hidden lg:block">
        <LandingPage />
        {/* <CreateEvent /> */}
      </div>
      <div className="block lg:hidden">
        mobile & tab design is not ready yet
      </div>
    </>
  )
}
