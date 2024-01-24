import Category from '@/app/LandingPage/components/Category'
import Navbar from '@/components/Navbar'
import Slider from '@/app/LandingPage/components/Slider'

import Section from '@/components/Event-card/Section'
import EventCard from '@/app/LandingPage/components/Event'

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Category />

      <Section />
      <EventCard />
    </div>
  )
}

export default LandingPage
