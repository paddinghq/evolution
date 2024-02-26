// pages/events/[id].js
'use client'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EventPage from '../components/EventPage'
import Loader from '@/components/Loader'

async function getEvent(id, token) {
  try {
    const response = await fetch(
      `https://evolution-staging.onrender.com/api/v1/events/${id}`,
      {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`)
    }

    const data = await response.json()

    if (!data.event) {
      throw new Error('Invalid response format. Event data not found.')
    }

    console.log(data)
    return data.event
  } catch (error) {
    console.error('Error in getEvent:', error.message)
    throw error
  }
}

function EventDetails({ event }) {
  return (
    <>
      <h1>Event Details</h1>
      <EventPage
        eventName={event.eventName}
        eventType={event.eventType}
        eventPrice={event.eventPrice}
        location={event.location}
        eventDate={event.eventDate}
        startTime={event.startTime}
        endTime={event.endTime}
        eventDescription={event.eventDescription}
      />
    </>
  )
}

function EventDetailsPage({ params }) {
  const [event, setEvent] = useState(null)
  const token = useSelector((state) => state.auth.token)

  useEffect(() => {
    async function fetchData() {
      try {
        const eventData = await getEvent(params.id, token)
        setEvent(eventData)
      } catch (error) {
        console.error('Error fetching event data:', error.message)
      }
    }

    fetchData()
  }, [params.id, token])

  return event ? <EventDetails event={event} /> : <Loader />
}

export default EventDetailsPage
