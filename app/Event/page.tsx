import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import EventList from "."

const page = () => {
  return (
    <div>
      <Navbar />
      <EventList />
      <Footer />
    </div>
  )
}

export default page
