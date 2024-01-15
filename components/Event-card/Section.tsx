import React from 'react'
import EventCard from './EventCard'

function Section() {
  return (
    <div className="w-[80%] m-auto rounded-2xl">
      <div className="flex flex-row gap-6 mt-10">
        <button className="text-[#7F7F7F]">All</button>
        <button className="text-[#7F7F7F]">For you</button>
        <button className="text-[#7F7F7F]">Free</button>
        <button className="text-[#7F7F7F]">Online</button>
        <button className="text-[#7F7F7F]">Music</button>
        <button className="text-[#7F7F7F]">Sport & Games</button>
        <button className="text-[#7F7F7F]">Politics</button>
        <button className="text-[#7F7F7F]">Community</button>
      </div>
      <div className="bg-[#A6562]  mt-10 rounded-2xl">
        <EventCard />
      </div>
    </div>
  )
}

export default Section
