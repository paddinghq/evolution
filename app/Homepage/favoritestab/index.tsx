import React from 'react'
import { IoOptionsOutline } from 'react-icons/io5'
import { CiHeart, CiSaveUp2 } from 'react-icons/ci'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { BsThreeDotsVertical } from 'react-icons/bs'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const cards = [
  {
    id: 1,
    src: '',
    heading1: 'Event Name/Title/...',
    date: 'Day. Date. Time',
    location: 'Location',
    organizer: 'Organizer name',
    followers: '21.5k followers',
    info: '200 people are attending this event.',
    note: 'Lorem ipsum dolor sit amet consectetur. Sit massa et faucibus cursus integer aenean sed sed. Aliquet mi magna vive... ',
  },
  {
    id: 2,
    src: '',
    heading1: 'Event Name/Title/...',
    date: 'Day. Date. Time',
    location: 'Location',
    organizer: 'Organizer name',
    followers: '21.5k followers',
    info: '200 people are attending this event.',
    note: 'Lorem ipsum dolor sit amet consectetur. Sit massa et faucibus cursus integer aenean sed sed. Aliquet mi magna vive... ',
  },
  {
    id: 3,
    src: '',
    heading1: 'Event Name/Title/...',
    date: 'Day. Date. Time',
    location: 'Location',
    organizer: 'Organizer name',
    followers: '21.5k followers',
    info: '200 people are attending this event.',
    note: 'Lorem ipsum dolor sit amet consectetur. Sit massa et faucibus cursus integer aenean sed sed. Aliquet mi magna vive... ',
  },
  {
    id: 4,
    src: '',
    heading1: 'Event Name/Title/...',
    date: 'Day. Date. Time',
    location: 'Location',
    organizer: 'Organizer name',
    followers: '21.5k followers',
    info: '200 people are attending this event.',
    note: 'Lorem ipsum dolor sit amet consectetur. Sit massa et faucibus cursus integer aenean sed sed. Aliquet mi magna vive... ',
  },
  {
    id: 5,
    src: '',
    heading1: 'Event Name/Title/...',
    date: 'Day. Date. Time',
    location: 'Location',
    organizer: 'Organizer name',
    followers: '21.5k followers',
    info: '200 people are attending this event.',
    note: 'Lorem ipsum dolor sit amet consectetur. Sit massa et faucibus cursus integer aenean sed sed. Aliquet mi magna vive... ',
  },
  {
    id: 6,
    src: '',
    heading1: 'Event Name/Title/...',
    date: 'Day. Date. Time',
    location: 'Location',
    organizer: 'Organizer name',
    followers: '21.5k followers',
    info: '200 people are attending this event.',
    note: 'Lorem ipsum dolor sit amet consectetur. Sit massa et faucibus cursus integer aenean sed sed. Aliquet mi magna vive... ',
  },
  {
    id: 7,
    src: '',
    heading1: 'Event Name/Title/...',
    date: 'Day. Date. Time',
    location: 'Location',
    organizer: 'Organizer name',
    followers: '21.5k followers',
    info: '200 people are attending this event.',
    note: 'Lorem ipsum dolor sit amet consectetur. Sit massa et faucibus cursus integer aenean sed sed. Aliquet mi magna vive... ',
  },
  {
    id: 8,
    src: '',
    heading1: 'Event Name/Title/...',
    date: 'Day. Date. Time',
    location: 'Location',
    organizer: 'Organizer name',
    followers: '21.5k followers',
    info: '200 people are attending this event.',
    note: 'Lorem ipsum dolor sit amet consectetur. Sit massa et faucibus cursus integer aenean sed sed. Aliquet mi magna vive... ',
  },
  {
    id: 9,
    src: '',
    heading1: 'Event Name/Title/...',
    date: 'Day. Date. Time',
    location: 'Location',
    organizer: 'Organizer name',
    followers: '21.5k followers',
    info: '200 people are attending this event.',
    note: 'Lorem ipsum dolor sit amet consectetur. Sit massa et faucibus cursus integer aenean sed sed. Aliquet mi magna vive... ',
  },
  {
    id: 10,
    src: '',
    heading1: 'Event Name/Title/...',
    date: 'Day. Date. Time',
    location: 'Location',
    organizer: 'Organizer name',
    followers: '21.5k followers',
    info: '200 people are attending this event.',
    note: 'Lorem ipsum dolor sit amet consectetur. Sit massa et faucibus cursus integer aenean sed sed. Aliquet mi magna vive... ',
  },
  {
    id: 11,
    src: '',
    heading1: 'Event Name/Title/...',
    date: 'Day. Date. Time',
    location: 'Location',
    organizer: 'Organizer name',
    followers: '21.5k followers',
    info: '200 people are attending this event.',
    note: 'Lorem ipsum dolor sit amet consectetur. Sit massa et faucibus cursus integer aenean sed sed. Aliquet mi magna vive... ',
  },
  {
    id: 12,
    src: '',
    heading1: 'Event Name/Title/...',
    date: 'Day. Date. Time',
    location: 'Location',
    organizer: 'Organizer name',
    followers: '21.5k followers',
    info: '200 people are attending this event.',
    note: 'Lorem ipsum dolor sit amet consectetur. Sit massa et faucibus cursus integer aenean sed sed. Aliquet mi magna vive... ',
  },
]

const FavoriteTab = () => {
  return (
    <div className="p-28">
      <div className="bg-[#21787333] p-8 rounded-2xl flex flex-col gap-10">
        <div className="filter flex justify-between items-center">
          <div className="flex items-center gap-6">
            <h3>Filter: </h3>
            <Input className="focus-visible:ring-0 focus-visible:ring-offset-0  rounded-3xl" type="text" placeholder="Category" />
            <Input
              className="focus-visible:ring-0 focus-visible:ring-offset-0  rounded-3xl"
              type="text"
              placeholder="Organizer name"
            />
          </div>
          <Button className="h-[1.76rem] px-[0.56rem] hover:text-white hover:bg-[#B1761F] options flex justify-center rounded-lg bg-[#B1761F] text-white">
            <IoOptionsOutline size={24} className="" />
          </Button>
        </div>
        <div className="cards grid grid-cols-4 gap-10">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white p-4 rounded-xl flex flex-col gap-5"
            >
              <div className="relative ">
                <Image
                  src="/eventstab/favorite.png"
                  alt="upcoming"
                  width={500}
                  height={500}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  priority
                  className="block"
                />
                <Button className="p-2 options absolute top-3 hover:bg-white right-14 flex justify-center rounded-full bg-white text-black">
                  <CiSaveUp2 size={22} className="" />
                </Button>
                <Button className="p-2 options absolute top-3  right-3 flex justify-center rounded-full hover:bg-[#D41212] bg-[#D41212] text-white">
                  <CiHeart size={22} className="" />
                </Button>
              </div>
              <div className="flex flex-col gap-3 ">
                <div className="relative ">
                  <h1 className="text-2xl font-bold">{card.heading1}</h1>
                  <Button className="absolute top-[-0.26rem] right-[-26px] hover:bg-transparent bg-transparent text-black">
                    <BsThreeDotsVertical size={24} />
                  </Button>
                </div>
                <h3 className="text-sm">{card.date}</h3>
                <h3 className="text-sm">{card.location}</h3>
                <div className="flex justify-between">
                  <h3 className="text-sm">
                    <Link href="" className=" underline text-decoration-solid">
                      {card.organizer}
                    </Link>
                  </h3>
                  <h3 className="text-sm">{card.followers}</h3>
                </div>
                <p className="text-xs  text-[#2A6562]">{card.info}</p>
                <p className="text-lg font-semibold">{card.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FavoriteTab
