import Category from '@/app/LandingPage/components/Category'
import Navbar from '@/components/Navbar'
import Slider from '@/app/LandingPage/components/Slider'

import Section from '@/components/Event-card/Section'
import Footer from '@/components/footer/index'

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Category />

      <Section />
      <Footer />
    </div>
  )
}

export default LandingPage
