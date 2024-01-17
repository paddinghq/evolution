import React from 'react'
import Card from './Card'
import myImage from '../../../public/image.jpeg'

const EventCard = (props: any) => {
  const { events, title } = props
  return (
    <>
      <div className="p-10 ">
        <h2 className="text-[#B1761F] text-2xl font-semibold">{title}</h2>
        <hr className="w-[70px] border-4 border-[#B1761F] rounded-xl" />
        <div className="my-10 grid grid-cols-4 gap-7">
          {events.map((event: any) => {
            return (
              <Card
                key={event.title}
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
