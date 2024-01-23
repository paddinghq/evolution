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
      <div className="w-full bg-[#FFF] p-3 rounded-xl">
        <Image
          src={prop.image}
          width={250}
          height={150}
          alt=""
          className="rounded-xl"
        />
        <div className="flex flex-col gap-2">
          <p className="text-[#252C2B] text-lg font-semibold">{prop.title}</p>
          <div className="flex flex-row gap-2">
            <p className="text-[#252C2B] text-xs">{prop.day}</p>
            <p className="text-[#252C2B] text-xs">{prop.date}</p>
            <p className="text-[#252C2B] text-xs">{prop.time}</p>
          </div>
          <p className="text-[#252C2B] text-xs">{prop.address}</p>
          <div className="flex justify-between">
            <p className="text-[#252C2B] text-xs underline">{prop.author}</p>
            <p className="text-[#252C2B] text-xs">{prop.followers} followers</p>
          </div>
          <p className="text-[#2A6562] text-xs">
            {prop.attendee} people are attending this event
          </p>
          <p className="text-[#252C2B] text-sm">
            {prop.details.slice(0, 100)}...
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
