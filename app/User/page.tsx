import Navbar from '@/components/Navbar'
import UserProfile from '.'
import ProfileTabs from '@/app/User/components/ProfileTabs'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <UserProfile />
      <ProfileTabs />
      <Footer />
    </div>
  )
}

export default page
