import React from 'react'
import Card from './Card'
import myImage from '../../../public/image.jpeg'

const allEvents = [
  {
    title: 'Food Life',
    day: 'Tuesday',
    date: '22nd January 2024',
    time: 2200,
    image: '/../../../public/image.jpeg',
    address: '1901 Thornridge Cir Shiloh, Hawaii 81063',
    author: 'Annette Black ',
    followers: 2000,
    attendee: 200,
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.',
  },
]

const EventCard = () => {
  return (
    <>
      <div className="p-10" style={{ zIndex: '99' }}>
        <h2 className="text-[#B1761F] text-2xl font-semibold">
          Popular in Delhi
        </h2>
        <hr className="w-[70px] text-[#B1761F] font-bold" />
        <div className="my-10">
          {allEvents.map((event) => {
            return (
              <Card
                title={event.title}
                day={event.day}
                date={event.date}
                image={event.image}
                time={event.time}
                author={event.author}
                address={event.address}
                followers={event.followers}
                attendee={event.attendee}
                details={event.details}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default EventCard
