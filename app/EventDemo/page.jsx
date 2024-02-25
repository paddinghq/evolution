'use client'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EventPage from './components/EventPage'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

async function fetchEvents(token) {
  const res = await fetch(
    'https://evolution-stagin.onrender.com/api/v1/events?select=eventName,eventPrice',
    {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  )
  const data = await res.json()
  return data.events
}

function Events() {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        const eventsData = await fetchEvents(token)
        setEvents(eventsData)
      }
    }

    fetchData()
  }, [token])

  return (
    <>
      <Navbar />
      <div className=" px-5 py-8">
        <h3 className="capitalize text-[#B1761F] text-4xl font-bold">Events</h3>
        <hr className="w-[70px] border-4 border-[#B1761F] rounded-xl" />

        <div className="bg-[#FFF] p-3 grid grid-cols-4 gap-5 relative">
          {events?.length > 0 &&
            events.map(
              ({
                id,
                _id,
                eventName,
                eventType,
                eventPrice,
                location,
                eventDate,
                startTime,
                endTime,
                eventDescription,
              }) => (
                <EventPage
                  key={id}
                  eventName={eventName}
                  eventType={eventType}
                  eventPrice={eventPrice}
                  location={location}
                  eventDate={eventDate}
                  startTime={startTime}
                  endTime={endTime}
                  eventDescription={eventDescription}
                  _id={_id}
                />
              ),
            )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Events
