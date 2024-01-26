'use client'

import { useState } from 'react'
import James from '@/public/Images/Henry.png'
import Image from 'next/image'
import { Button } from '../../../components/ui/button'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
const review = [
  {
    test: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: James,
    name: 'Brooklyn Simmons',
    country: '(VP, Xiaomi Cameroon)',
  },
  {
    test: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: James,
    name: 'Brooklyn',
    country: '(VP, Xiaomi Cameroon)',
  },
  {
    test: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: James,
    name: 'Brooklyn Simmons',
    country: '(VP, Xiaomi Cameroon)',
  },
  {
    test: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: James,
    name: 'Brooklyn Simmons',
    country: '(VP, Xiaomi Cameroon)',
  },
  {
    test: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: James,
    name: 'Brooklyn',
    country: '(VP, Xiaomi Cameroon)',
  },
  {
    test: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: James,
    name: 'Brooklyn',
    country: '(VP, Xiaomi Cameroon)',
  },
]

const Testimonial = () => {
  const [current, setCurrent] = useState(2)

  let nextSlide = () => {
    if (current === review.length - 1) setCurrent(0)
    else setCurrent(current + 1)
  }

  return (
    <div className="px-36 py-5">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-[#B1761F] font-bold text-3xl">
              Notable Mentions
            </h1>
            <hr className="w-[6rem] border-4 border-[#F5A42C] rounded-xl mt-1" />
          </div>

          <div>
            <Button className="rounded-full p-3" onClick={nextSlide}>
              <MdOutlineKeyboardArrowRight size={24} />
            </Button>
          </div>
        </div>

        <div className="mt-4">
          <div className="grid grid-flow-col gap-3 pb-5 overflow-hidden">
            {review.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center gap-3 ${
                  index < current - 2 || index > current ? 'hidden' : ''
                }`}
              >
                <div className="bg-[#F2F2F2] rounded-lg w-[25rem] px-7 py-4 text-justify text-[#252C2B]">
                  <p className="">
                    {item.test.split(' ').slice(0, 30).join(' ')}..
                  </p>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <Image
                    src={item.img.src}
                    alt={item.name}
                    width={100}
                    height={100}
                  />
                  <h5 className="text-black capitalize font-semibold">
                    {item.name}
                  </h5>
                  <h5 className="text-black font-light text-sm">
                    {item.country}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
