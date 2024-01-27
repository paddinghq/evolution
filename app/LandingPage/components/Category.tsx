import Image from 'next/image'
import Music from '@/public/Images/music.png'
import Sport from '@/public/Images/sport.png'
import Food from '@/public/Images/food.png'
import Health from '@/public/Images/health.png'
import Travel from '@/public/Images/travel.png'
import Arts from '@/public/Images/arts.png'
import Education from '@/public/Images/education.png'
import Politics from '@/public/Images/politics.png'
import Community from '@/public/Images/community.png'
import { IoCalendarClearOutline } from 'react-icons/io5'
import Link from 'next/link'
const days = [
  {
    id: 1,
    title: 'Today',
    href: 'today',
  },
  {
    id: 2,
    title: 'Tomorrow',
    href: 'tomorrow',
  },
  {
    id: 3,
    title: 'This Weekend',
    href: 'weekend',
  },
  {
    id: 4,
    title: 'calender',
    href: 'calender',
    icon: IoCalendarClearOutline,
  },
]
const Category = () => {
  return (
    <div className="">
      <div className="container px-28 py-8">
        <h3 className="capitalize text-[#B1761F] text-4xl font-bold">
          categories
        </h3>
        <hr className="w-[70px] border-4 border-[#B1761F] rounded-xl" />

        <div className="flex flex-wrap items-center content-start mt-9 justify-between">
          <div className="flex items-center flex-col gap-2">
            <Image src={Music.src} alt={'music'} width={70} height={70} />
            <h6 className="text-[#252C2B] text-lg font-medium ">Music</h6>
          </div>
          <div className="flex items-center flex-col gap-2">
            <Image src={Sport.src} alt={'sport'} width={70} height={70} />
            <h6 className="text-[#252C2B] text-lg font-medium ">
              Sport & Games
            </h6>
          </div>
          <div className="flex items-center flex-col gap-2">
            <Image src={Food.src} alt={'food'} width={70} height={70} />
            <h6 className="text-[#252C2B] text-lg font-medium ">
              Food & Drinks
            </h6>
          </div>
          <div className="flex items-center flex-col gap-2">
            <Image src={Travel.src} alt={'music'} width={70} height={70} />
            <h6 className="text-[#252C2B] text-lg font-medium ">
              Trave & tourism
            </h6>
          </div>
          <div className="flex items-center flex-col gap-2">
            <Image src={Health.src} alt={'health'} width={70} height={70} />
            <h6 className="text-[#252C2B] text-lg font-medium ">
              Health & Hygiene
            </h6>
          </div>
        </div>
        <div className="flex justify-around mt-7">
          <div className="flex items-center flex-col gap-2">
            <Image src={Arts.src} alt={'arts'} width={70} height={70} />
            <h6 className="text-[#252C2B] text-lg font-medium ">
              Performing & visual Arts
            </h6>
          </div>
          <div className="flex items-center flex-col gap-2">
            <Image
              src={Education.src}
              alt={'education'}
              width={70}
              height={70}
            />
            <h6 className="text-[#252C2B] text-lg font-medium ">Education</h6>
          </div>
          <div className="flex items-center flex-col gap-2">
            <Image src={Politics.src} alt={'politics'} width={70} height={70} />
            <h6 className="text-[#252C2B] text-lg font-medium ">Politics</h6>
          </div>
          <div className="flex items-center flex-col gap-2">
            <Image
              src={Community.src}
              alt={'community'}
              width={70}
              height={70}
            />
            <h6 className="text-[#252C2B] text-lg font-medium ">community</h6>
          </div>
        </div>
      </div>

      <div className="px-28 py-5 bg-[#F2F2F2]  ">
        <div className="container flex justify-center gap-10">
          {days.map((day) => (
            <Link
              href={day.href}
              key={day.id}
              className="border-2 border-[#7a7a7a] rounded-full px-10 py-1 active:bg-[#217873] active:text-white hover:bg-[#217873] text-lg hover:text-white"
            >
              {day.icon && <day.icon className="inline-block w-6 h-6" />}{' '}
              <span className="">{day.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Category
