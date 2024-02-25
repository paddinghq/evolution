'use client'
import { useDispatch, useSelector } from 'react-redux'

async function getAllEvent() {
  const token = useSelector((state) => state.auth.token)

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
  console.log(`this is the error message from line 17 ${data}`)

  return data.EventDemo.map((events) => ({
    id: events._id,
  }))
}

async function getEvent(id) {
  const res = await fetch(
    `https://evolution-stagin.onrender.com/api/v1/events/:${id}`,
  )
  const data = await res.json()

  return data
}

export default async function EventDetails({ params }) {
  const event = await getEvent(params.id)
  console.log({ event })

  return <h1>Event Details</h1>
}
