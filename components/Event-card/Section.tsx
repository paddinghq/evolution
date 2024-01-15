import React from 'react'
import EventCard from './EventCard'

const hobbies = [
  'Badminton',
  'Cricket',
  'Music',
  'Cooking',
  'Travelling',
  'Dancing',
  'Adventure Sports',
  'Art',
  'Designing',
  'Political Science',
  'Computer Science',
  'Basketball',
  'Party',
  'Singing',
  'EDM',
  'Fashion',
  'Dentistry',
  'Athletics',
]

function Section() {
  return (
    <div className="w-[70%] m-auto rounded-2xl">
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
      <div
        className="mt-10 rounded-2xl"
        style={{ background: 'rgba(33, 120, 115, 0.20)' }}
      >
        <EventCard />
      </div>
      <div
        className="mt-10 rounded-2xl"
        style={{ background: 'rgba(33, 120, 115, 0.20)' }}
      >
        <EventCard />
      </div>
      <div
        className="mt-10 rounded-2xl p-5 flex flex-col gap-5"
        style={{ background: 'rgba(33, 120, 115, 0.20)' }}
      >
        <p className="text-[#252C2B] text-3xl font-semibold">
          A Personal experience like never before
        </p>
        <p className="text-[#252C2B]">
          Select your hobbies and other favorite activities to get suggestions
          based on what you love
        </p>
        <div className="flex flex-wrap gap-6">
          {hobbies.map((hobby) => {
            return (
              <button className="text-[#252C2B] text-sm border-2 border-[#252C2B] py-3 px-5 rounded-full">
                {hobby}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Section
