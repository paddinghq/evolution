import { Button } from '@/components/ui/button'
import Gift from '@/public/Images/gift.png'
import Plan from '@/public/Images/planning.png'
import Image from 'next/image'
const EventCard = () => {
  return (
    <div className="mt-6 container px-24">
      <div className="relative">
        <Image
          src={Gift.src}
          width={1400}
          height={10}
          alt="gift"
          className="rounded-lg "
        />

        <div className="absolute top-96 px-16 flex flex-col gap-4 text-white">
          <div className="  text-3xl text-wrap">
            <h3>
              You can now gift tickets to <br /> an event to your friends
            </h3>
          </div>

          <p className="text-lg">Last minute gifting needs, from ₦1000</p>

          <Button className="bg-[#2A6562] text-white hover:bg-[#252C2B] w-36  rounded-lg">
            Send a gift
          </Button>
        </div>
      </div>
      <div className="relative mt-10">
        <Image
          src={Plan.src}
          width={1400}
          height={10}
          alt="gift"
          className="object-cover"
        />

        <div className="absolute top-96 bg-[#252C2B] text-[#F5FFFE] px-11 py-12 flex flex-col gap-5 rounded-br-3xl rounded-tr-3xl ">
          <div className="  text-3xl text-wrap">
            <h3>Plan your own event</h3>
          </div>

          <p className="text-lg">
            Organize exiting events and contribute in all the fun!
          </p>

          <Button className="bg-[#2A6562] hover:bg-[#F5FFFE] w-36  rounded-lg hover:text-[#252C2B]">
            Organize an event
          </Button>
        </div>
      </div>
    </div>
  )
}

export default EventCard
