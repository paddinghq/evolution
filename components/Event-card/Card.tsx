import Image from '@/node_modules/next/image'
import React from 'react'

interface CardProps {
  title: string
  day: string
  image: string
  date: string
  time: number
  address: string
  author: string
  followers: number
  attendee: number
  details: string
}

const Card = (prop: CardProps) => {
  return (
    <div>
      <div className="w-[300px] bg-[#FFF] p-3 rounded-xl">
        <Image
          src={prop.image}
          width={300}
          height={150}
          alt=""
          className="rounded-xl"
        />
        <div className="flex flex-col gap-2">
          <p className="text-[#252C2B] text-xl font-semibold">{prop.title}</p>
          <div className="flex flex-row gap-5">
            <p className="text-[#252C2B] text-sm">{prop.day}</p>
            <p className="text-[#252C2B] text-sm">{prop.date}</p>
            <p className="text-[#252C2B] text-sm">{prop.time}</p>
          </div>
          <p className="text-[#252C2B] text-sm">{prop.address}</p>
          <div className="flex justify-between">
            <p className="text-[#252C2B] underline">{prop.author}</p>
            <p className="text-[#252C2B]">{prop.followers} followers</p>
          </div>
          <p className="text-[#2A6562] ">
            {prop.attendee} people are attending this event
          </p>
          <p className="text-[#252C2B] text-lg">
            {prop.details.slice(0, 115)}...
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
