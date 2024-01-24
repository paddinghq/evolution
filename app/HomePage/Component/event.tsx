import Foodie from '@/public/Images/foodie_woodie.png'
import Image from 'next/image'
const events = [
  {
    img: Foodie,
    state: 'Mishigan',
    miles: 128,
  },
  {
    img: Foodie,
    state: 'Mishigan',
    miles: 128,
  },
  {
    img: Foodie,
    state: 'Mishigan',
    miles: 128,
  },
  {
    img: Foodie,
    state: 'Mishigan',
    miles: 128,
  },
  {
    img: Foodie,
    state: 'Mishigan',
    miles: 128,
  },
]

const Event = () => {
  return (
    <div className="px-36 py-5">
      <div className="container">
        <h1 className="text-[#B1761F] font-bold text-3xl">
          Popular events near Pennsylvania
        </h1>
        <hr className="w-[10rem] border-4 border-[#F5A42C] rounded-xl mt-1" />
      </div>

      <div className="mt-4">
        <div className=" grid grid-flow-col gap-10">
          {events.map((items) => (
            <div className="flex flex-col gap-3 items-center bg-white rounded-lg shadow-lg p-5">
              <Image
                src={items.img.src}
                alt={items.state}
                width={250}
                height={150}
              />

              <div className="text-[#252C2B] text-lg font-medium">
                {items.state}
              </div>

              <p className="text-lg">{items.miles} miles away</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Event
