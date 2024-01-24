import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Waston from '@/public/Images/Waston.png'
import Miles from '@/public/Images/Miles.png'
import Marvin from '@/public/Images/Marvin.png'
import Henry from '@/public/Images/Henry.png'
import Bell from '@/public/Images/Bell.png'

const organizer = [
  {
    name: 'Kristin Watson',
    img: Waston,
    followers: 27.3,
  },
  {
    name: 'Floyd Miles',
    img: Miles,
    followers: 67.7,
  },
  {
    name: 'Mar McKinney',
    img: Marvin,
    followers: 21,
  },
  {
    name: 'Courtney Henry',
    img: Henry,
    followers: 156,
  },
  {
    name: 'Jerome Bell',
    img: Bell,
    followers: 36.6,
  },
  {
    name: 'Floyd Miles',
    img: Miles,
    followers: 67.7,
  },
  {
    name: 'Mar McKinney',
    img: Marvin,
    followers: 21,
  },
  {
    name: 'Courtney Henry',
    img: Henry,
    followers: 156,
  },
  {
    name: 'Jerome Bell',
    img: Bell,
    followers: 36.6,
  },
]

const Organizer = () => {
  return (
    <div className="px-36 py-5 mt-20">
      <div className="container ">
        <h1 className="text-[#B1761F] font-bold text-3xl font-[]">
          Organizers to follow
        </h1>
        <hr className="w-[5.5rem] border-4 border-[#F5A42C] rounded-xl mt-1" />
      </div>

      <div className="mt-4">
        <div className=" grid grid-flow-col overflow-x-scroll gap-4 pb-6">
          {organizer.map((items) => (
            <div className="bg-white rounded-lg shadow-xl flex flex-col items-center px-10 py-10 gap-3">
              <Image
                src={items.img.src}
                alt={items.name}
                width={100}
                height={100}
              />

              <div className="text-[#252C2B] text-lg font-medium">
                {items.name}
              </div>

              <p className="text-lg">{items.followers}k followers</p>

              <Button className="bg-[#2A6562] text-white px-10 hover:bg-[#252C2B] mt-3 rounded-lg">
                See more
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Organizer
