import Navbar from "@/components/Navbar"
import Slider from "../LandingPage/components/Slider"
import Category from "../LandingPage/components/Category"
import Section from "@/components/Event-card/Section"
import Trend from "./Component/trend"
import Organizer from "./Component/organizer"


const LandingPage = () => {
    return (
        <div>
            <Navbar/>
            <Slider />
            <Category />
            <Section />
            <Trend />
            <Organizer />
        </div>
    )
}

export default LandingPage