import React from 'react'
import { Button } from '@/components/ui/button'
import EventCard from './EventCard'
import IMG from "@/public/image.jpeg"

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
const allEvents = [
  {
    title: 'Food Life',
    day: 'Tuesday',
    date: '22nd January 2024',
    time: 2200,
    image: IMG,
    address: '1901 Thornridge Cir Shiloh, Hawaii 81063',
    author: 'Annette Black ',
    followers: 2000,
    attendee: 200,
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.',
  },
  {
    title: 'Food Life',
    day: 'Tuesday',
    date: '22nd January 2024',
    time: 2200,
    image: IMG,
    address: '1901 Thornridge Cir Shiloh, Hawaii 81063',
    author: 'Annette Black ',
    followers: 2000,
    attendee: 200,
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.',
  },
  {
    title: 'Food Life',
    day: 'Tuesday',
    date: '22nd January 2024',
    time: 2200,
    image: IMG,
    address: '1901 Thornridge Cir Shiloh, Hawaii 81063',
    author: 'Annette Black ',
    followers: 2000,
    attendee: 200,
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.',
  },
  {
    title: 'Food Life',
    day: 'Tuesday',
    date: '22nd January 2024',
    time: 2200,
    image: IMG,
    address: '1901 Thornridge Cir Shiloh, Hawaii 81063',
    author: 'Annette Black ',
    followers: 2000,
    attendee: 200,
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.',
  },
  {
    title: 'Food Life',
    day: 'Tuesday',
    date: '22nd January 2024',
    time: 2200,
    image: IMG,
    address: '1901 Thornridge Cir Shiloh, Hawaii 81063',
    author: 'Annette Black ',
    followers: 2000,
    attendee: 200,
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.',
  },
  {
    title: 'Food Life',
    day: 'Tuesday',
    date: '22nd January 2024',
    time: 2200,
    image: IMG,
    address: '1901 Thornridge Cir Shiloh, Hawaii 81063',
    author: 'Annette Black ',
    followers: 2000,
    attendee: 200,
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.',
  },
  {
    title: 'Food Life',
    day: 'Tuesday',
    date: '22nd January 2024',
    time: 2200,
    image: IMG,
    address: '1901 Thornridge Cir Shiloh, Hawaii 81063',
    author: 'Annette Black ',
    followers: 2000,
    attendee: 200,
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.',
  },
  {
    title: 'Food Life',
    day: 'Tuesday',
    date: '22nd January 2024',
    time: 2200,
    image: IMG,
    address: '1901 Thornridge Cir Shiloh, Hawaii 81063',
    author: 'Annette Black ',
    followers: 2000,
    attendee: 200,
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.',
  },
]
const tagButtons = [
  'All',
  'For you',
  'Free',
  'Online',
  'Music',
  'Sport & Games',
  'Politics',
  'Community',
]

function Section() {
  return (
    <div className="px-28 py-5">
      <div className="container rounded-2xl">
        <div className="flex flex-row gap-6 mt-10">
          {tagButtons.map((button) => {
            return (
              <Button className="bg-transparent hover:bg-transparent active:text-[#2A6562] active:underline text-[#7F7F7F] p-0">
                {button}
              </Button>
            )
          })}
        </div>
        <div
          className="mt-10 rounded-2xl"
          style={{ background: 'rgba(33, 120, 115, 0.20)' }}
        >
          <EventCard events={allEvents} title={'Popular in Delhi'} />
        </div>
        <div
          className="mt-10 rounded-2xl"
          style={{ background: 'rgba(33, 120, 115, 0.20)' }}
        >
          <EventCard events={allEvents} title={'More Events'} />
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
          <div className="flex flex-wrap gap-6 my-5">
            {hobbies.map((hobby) => {
              return (
                <Button className="text-[#252C2B] text-sm border-2 bg-transparent hover:bg-[#2A6562] hover:text-white border-[#252C2B] py-3 px-7 rounded-full">
                  {hobby}
                </Button>
              )
            })}
          </div>
          <Button className="bg-[#2A6562] text-white w-[150px] hover:bg-[#252C2B] p-3 rounded-lg">
            See more
          </Button>
        </div>
    </div>
    </div>
    
  )
}

export default Section
