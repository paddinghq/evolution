import Navbar from "@/components/Navbar"
import UserProfile from "."
import ProfileTabs from "@/components/ProfileTabs"


const page = () => {
    return <div>
      <Navbar/>
      <UserProfile/>
      <ProfileTabs/>
    </div>
  }
  
  export default page