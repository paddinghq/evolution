import React from 'react'
import { Button } from '../ui/button'

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
const Hobbies = () => {
  return (
    <div>
      <p className="text-[#252C2B] text-3xl font-semibold">
        A Personal experience like never before
      </p>
      <p className="text-[#252C2B]">
        Select your hobbies and other favorite activities to get suggestions
        based on what you love
      </p>
      <div className="flex flex-wrap gap-6 my-5">
        {hobbies.map((hobby) => {
          return (
            <Button className="text-[#252C2B] text-sm border-2 bg-transparent hover:bg-[#2A6562] hover:text-white border-[#252C2B] py-3 px-7 rounded-full">
              {hobby}
            </Button>
          )
        })}
      </div>
    </div>
  )
}

export default Hobbies
