import Gift from '@/public/Images/gift.png'
import Image from 'next/image'
const EventCard = () => {
    return (
        <div className="mt-6 container px-36 py-8">
            <div className="relative">
                <Image src={Gift.src} width={1400} height={500} alt="gift" className="object-cover"/>

                <div className="absolute top-96 px-16">
                    hello
                </div>
            </div>
            <div className="relative mt-10">
                <Image src={Gift.src} width={1400} height={10} alt="gift" className="object-cover"/>

                <div className="absolute top-96 px-16">
                    hello
                </div>
            </div>
        </div>
    )
}

export default EventCard