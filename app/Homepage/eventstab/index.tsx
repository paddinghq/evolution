import React from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import { CiCalendar, CiDollar, CiSaveUp2 } from 'react-icons/ci'
import { IoOptionsOutline } from 'react-icons/io5'
import Image from 'next/image'
import Link from 'next/link'
import { LuMerge } from 'react-icons/lu'
import { BsThreeDotsVertical } from 'react-icons/bs'

const upcomings = [
  {
    id: 1,
    src: <LuMerge size={24} />,
    text: 'Open',
  },
  {
    id: 2,
    src: <CiCalendar size={24} />,
    text: 'Friday.25th January 2024.19:00',
  },
  {
    id: 3,
    src: <IoLocationOutline size={24} />,
    text: '2118 Thornrid...',
  },
  {
    id: 4,
    src: <CiDollar size={24} />,
    text: '$20',
  },
]

const EventsTab = () => {
  return (
    <div className=" p-28 ">
      <div className="bg-[#21787333] p-8 rounded-2xl">
        <div className="upcoming mt-3">
          <div className="flex justify-between items-center">
            <button className="">
              <h3 className="capitalize text-[#B1761F] text-lg font-medium">
                Upcoming
              </h3>
              <hr className="w-[35px] mt-1 border-[2.5px] border-[#F5A42C] rounded-xl" />
            </button>
            <button className="w-10 px-[0.56rem]  options flex justify-center rounded-lg bg-[#B1761F] text-white">
              <IoOptionsOutline size={28} className="" />
            </button>
          </div>
          <div className="p-4 grid grid-cols-2 gap-4 mt-8 bg-white rounded-xl">
            <div className="relative">
              <Image
                src="/eventstab/image1.png"
                alt="upcoming"
                width={500}
                height={500}
                style={{
                  width: '100%',
                  height: '100%',
                }}
                priority
                className="block"
              ></Image>
              <button className="p-2 options absolute top-4  right-4 flex justify-center rounded-full bg-white">
                <CiSaveUp2 size={28} className="" />
              </button>
            </div>
            <div className="relative">
              <h3 className="text-2xl font-black">Welcome To The Party</h3>
              <BsThreeDotsVertical
                size={28}
                className="absolute right-[-4px] top-1"
              />
              <h6 className="text-lg font-black  ">
                <Link
                  href=""
                  className=" underline text-decoration-solid font-medium"
                >
                  Music
                </Link>
              </h6>
              <div className="mt-4 grid grid-rows-4 gap-2">
                {upcomings.map((upcoming) => (
                  <div key={upcoming.id} className="flex gap-3">
                    <div className="">{upcoming.src}</div>
                    <h3 className="text-lg font-normal">{upcoming.text}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="p-4 grid grid-cols-2 gap-4 mt-8 bg-white rounded-xl">
            <div className="relative">
              <Image
                src="/eventstab/image1.png"
                alt="upcoming"
                width={500}
                height={500}
                style={{
                  width: '100%',
                  height: '100%',
                }}
                priority
                className="block"
              ></Image>
              <button className="p-2 options absolute top-4  right-4 flex justify-center rounded-full bg-white">
                <CiSaveUp2 size={28} className="" />
              </button>
            </div>
            <div className="relative">
              <h3 className="text-2xl font-black">Welcome To The Party</h3>
              <BsThreeDotsVertical
                size={28}
                className="absolute right-[-4px] top-1"
              />
              <h6 className="text-lg font-black  ">
                <Link
                  href=""
                  className=" underline text-decoration-solid font-medium"
                >
                  Music
                </Link>
              </h6>
              <div className="mt-4 grid grid-rows-4 gap-2">
                {upcomings.map((upcoming) => (
                  <div key={upcoming.id} className="flex gap-3">
                    <div className="">{upcoming.src}</div>
                    <h3 className="text-lg font-normal">{upcoming.text}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="p-4 grid grid-cols-2 gap-4 mt-8 bg-white rounded-xl">
            <div className="relative">
              <Image
                src="/eventstab/image1.png"
                alt="upcoming"
                width={500}
                height={500}
                style={{
                  width: '100%',
                  height: '100%',
                }}
                priority
                className="block"
              ></Image>
              <button className="p-2 options absolute top-4  right-4 flex justify-center rounded-full bg-white">
                <CiSaveUp2 size={28} className="" />
              </button>
            </div>
            <div className="relative">
              <h3 className="text-2xl font-black">Welcome To The Party</h3>
              <BsThreeDotsVertical
                size={28}
                className="absolute right-[-4px] top-1"
              />
              <h6 className="text-lg font-black  ">
                <Link
                  href=""
                  className=" underline text-decoration-solid font-medium"
                >
                  Music
                </Link>
              </h6>
              <div className="mt-4 grid grid-rows-4 gap-2">
                {upcomings.map((upcoming) => (
                  <div key={upcoming.id} className="flex gap-3">
                    <div className="">{upcoming.src}</div>
                    <h3 className="text-lg font-normal">{upcoming.text}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="p-4 grid grid-cols-2 gap-4 mt-8 bg-white rounded-xl">
            <div className="relative">
              <Image
                src="/eventstab/image1.png"
                alt="upcoming"
                width={500}
                height={500}
                style={{
                  width: '100%',
                  height: '100%',
                }}
                priority
                className="block"
              ></Image>
              <button className="p-2 options absolute top-4  right-4 flex justify-center rounded-full bg-white">
                <CiSaveUp2 size={28} className="" />
              </button>
            </div>
            <div className="relative">
              <h3 className="text-2xl font-black">Welcome To The Party</h3>
              <BsThreeDotsVertical
                size={28}
                className="absolute right-[-4px] top-1"
              />
              <h6 className="text-lg font-black  ">
                <Link
                  href=""
                  className=" underline text-decoration-solid font-medium"
                >
                  Music
                </Link>
              </h6>
              <div className="mt-4 grid grid-rows-4 gap-2">
                {upcomings.map((upcoming) => (
                  <div key={upcoming.id} className="flex gap-3">
                    <div className="">{upcoming.src}</div>
                    <h3 className="text-lg font-normal">{upcoming.text}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="old mt-10">
          <div className="flex justify-between items-center">
            <button className="">
              <h3 className="capitalize text-[#B1761F] text-lg font-medium">
                Older
              </h3>
              <hr className="w-[30px] mt-1 border-[2.5px] border-[#F5A42C] rounded-xl" />
            </button>
            <button className="w-10 px-[0.56rem] options flex justify-center rounded-lg bg-[#B1761F] text-white">
              <IoOptionsOutline size={28} className="" />
            </button>
          </div>
          <div className="p-4 grid grid-cols-2 gap-4 mt-8 bg-white rounded-xl">
            <div className="relative">
              <Image
                src="/eventstab/image1.png"
                alt="upcoming"
                width={500}
                height={500}
                style={{
                  width: '100%',
                  height: '100%',
                }}
                priority
                className="block"
              ></Image>
              <button className="p-2 options absolute top-4  right-4 flex justify-center rounded-full bg-white">
                <CiSaveUp2 size={28} className="" />
              </button>
            </div>
            <div className="relative">
              <h3 className="text-2xl font-black">Welcome To The Party</h3>
              <BsThreeDotsVertical
                size={28}
                className="absolute right-[-4px] top-1"
              />
              <h6 className="text-lg font-black  ">
                <Link
                  href=""
                  className=" underline text-decoration-solid font-medium"
                >
                  Music
                </Link>
              </h6>

              <div className="mt-4 grid grid-rows-4 gap-2">
                {upcomings.map((upcoming) => (
                  <div key={upcoming.id} className="flex gap-3">
                    <div className="">{upcoming.src}</div>
                    <h3 className="text-lg font-normal">{upcoming.text}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 grid grid-cols-2 gap-4 mt-8 bg-white rounded-xl">
          <div className="relative">
            <Image
              src="/eventstab/image1.png"
              alt="upcoming"
              width={500}
              height={500}
              style={{
                width: '100%',
                height: '100%',
              }}
              priority
              className="block"
            ></Image>
            <button className="p-2 options absolute top-4  right-4 flex justify-center rounded-full bg-white">
              <CiSaveUp2 size={28} className="" />
            </button>
          </div>
          <div className="relative">
            <h3 className="text-2xl font-black">Welcome To The Party</h3>
            <BsThreeDotsVertical
              size={28}
              className="absolute right-[-4px] top-1"
            />
            <h6 className="text-lg font-black  ">
              <Link
                href=""
                className=" underline text-decoration-solid font-medium"
              >
                Music
              </Link>
            </h6>
            <div className="mt-4 grid grid-rows-4 gap-2">
              {upcomings.map((upcoming) => (
                <div key={upcoming.id} className="flex gap-3">
                  <div className="">{upcoming.src}</div>
                  <h3 className="text-lg font-normal">{upcoming.text}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-4 grid grid-cols-2 gap-4 mt-8 bg-white rounded-xl">
          <div className="relative">
            <Image
              src="/eventstab/image1.png"
              alt="upcoming"
              width={500}
              height={500}
              style={{
                width: '100%',
                height: '100%',
              }}
              priority
              className="block"
            ></Image>
            <button className="p-2 options absolute top-4  right-4 flex justify-center rounded-full bg-white">
              <CiSaveUp2 size={28} className="" />
            </button>
          </div>
          <div className="relative">
            <h3 className="text-2xl font-black">Welcome To The Party</h3>
            <BsThreeDotsVertical
              size={28}
              className="absolute right-[-4px] top-1"
            />
            <h6 className="text-lg font-black  ">
              <Link
                href=""
                className=" underline text-decoration-solid font-medium"
              >
                Music
              </Link>
            </h6>
            <div className="mt-4 grid grid-rows-4 gap-2">
              {upcomings.map((upcoming) => (
                <div key={upcoming.id} className="flex gap-3">
                  <div className="">{upcoming.src}</div>
                  <h3 className="text-lg font-normal">{upcoming.text}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-4 grid grid-cols-2 gap-4 mt-8 bg-white rounded-xl">
          <div className="relative">
            <Image
              src="/eventstab/image1.png"
              alt="upcoming"
              width={500}
              height={500}
              style={{
                width: '100%',
                height: '100%',
              }}
              priority
              className="block"
            ></Image>
            <button className="p-2 options absolute top-4  right-4 flex justify-center rounded-full bg-white">
              <CiSaveUp2 size={28} className="" />
            </button>
          </div>
          <div className="relative">
            <h3 className="text-2xl font-black">Welcome To The Party</h3>
            <BsThreeDotsVertical
              size={28}
              className="absolute right-[-4px] top-1"
            />
            <h6 className="text-lg font-black  ">
              <Link
                href=""
                className=" underline text-decoration-solid font-medium"
              >
                Music
              </Link>
            </h6>
            <div className="mt-4 grid grid-rows-4 gap-2">
              {upcomings.map((upcoming) => (
                <div key={upcoming.id} className="flex gap-3">
                  <div className="">{upcoming.src}</div>
                  <h3 className="text-lg font-normal">{upcoming.text}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventsTab
