import Navbar from '@/components/Navbar'
import UserProfile from '.'
import ProfileTabs from '@/app/User/components/ProfileTabs'

const page = () => {
  return (
    <div>
      <Navbar />
      <UserProfile />
      <ProfileTabs />
    </div>
  )
}

export default page
