
import Category from '@/app/LandingPage/components/Category'
import Navbar from '@/components/Navbar'
import Slider from '@/app/LandingPage/components/Slider'

import Section from '@/components/Event-card/Section'


const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Category /> 

      <h1>This Event Section </h1>
      <Section />

    </div>
  )
}

export default LandingPage
