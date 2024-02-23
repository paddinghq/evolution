'use client'

import Card from '@/components/Event-card/Card'
import axios from 'axios'
import React from 'react'

const EventList = () => {
  const getEvent = async () => {
    try{
      const response = await axios.get("https://evolution-stagin.onrender.com/api/v1/events", {
        headers: {
          "Content-type": "application/json",
          // Authorization: `Bearer ${token}`,
        },
      })
    }catch (err) {

    }
  }
  return (
    <>
      <div className="p-10 ">
        <h2 className="text-[#B1761F] text-2xl font-semibold">hello</h2>
        <hr className="w-[70px] border-4 border-[#B1761F] rounded-xl" />
        <div className="my-10 grid grid-cols-4 gap-7">
          {/* {events.map((event: any) => {
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
          })} */}
        </div>
      </div>
    </>
  )
}

export default EventList
