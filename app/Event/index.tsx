'use client'

import Card from '@/components/Event-card/Card'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { IoTicketOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { setEvent, setLoading,  } from '../Redux/slice/signupSlice'
import { setEventDetails } from '../Redux/slice/eventSlice'
import  Image from 'next/image'
import Img1 from '@/public/image.jpeg'

const EventList = () => {
  
  const dispatch = useDispatch()
  const token = useSelector((state: any) => state.auth.token)
  const event = useSelector((state: any) => state.auth.event)
  // const event = useSelector((state: any) => state.event.eventDetails)
  console.log(event)
  console.log(token)

  useEffect(() => {
    const getEvent = async () => {
      
      dispatch(setLoading(true))
      try{
        const response = await axios.get("https://evolution-stagin.onrender.com/api/v1/events", {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
  
        
        const data =response.data.events 
        console.log(data)
        dispatch(setEvent(data))
        dispatch(setLoading(false))
      }catch (err) {
        dispatch(setLoading(false))
        console.log(err)
      }
    }
    getEvent()
  },[dispatch])
 
  
  return (
    <>
      <div className="container px-18 py-10">
        <div className="flex justify-between items-center">
          <div className="">
            <h1 className="text-[#B1761F] text-2xl font-semibold">Event</h1>
            <hr className="w-[70px] border-4 border-[#B1761F] rounded-xl" />
          </div>

          <Link href="/CreateEvent" 
            className="bg-[#B1761f] text-white py-2 px-8 rounded-lg flex 
            justify-center items-center gap-3 hover:bg-[#2A6562]"
            >
            <IoTicketOutline />
            Create Event
          </Link>
        </div>
        <div className="">
          {event.map((items: any) => console.log(items))}
        </div>

        <div className="mt-10">
          <div className="bg-[#FFF] p-3 rounded-xl grid grid-cols-3 gap-5">
            {event.map((items: any) => 

              <div className="border-2 flex flex-col p-5">
                <div className="flex justify-center ">
                  <Image 
                    src={Img1} 
                    alt={items.eventName} 
                    width={300}
                    height={150}
                    className="rounded-lg"
                  />
                </div>
                
                 
                <div className="flex flex-col gap-2">
                  <p className="text-[#252C2B] text-lg font-semibold">Event Name: {items.eventName}</p>
                  <div className="flex justify-between gap-2">
                    <p className="text-[#252C2B] text-xs">Event Type: {items.eventType}</p>
                    <p className="text-[#252C2B] text-xs">Event Price: {items.eventPrice}</p>
                  </div>
                  <div className="flex justify-between gap-2">
                    <p className="text-[#252C2B] text-xs">Event Location: {items.location}</p>
                    <p className="text-[#252C2B] text-xs">Event Date: {items.eventDate}</p>
                  </div>
                  
                  
                  <div className="flex justify-between">
                    <p className="text-[#252C2B] text-xs">Start Time: {items.startTime} </p>
                    <p className="text-[#252C2B] text-xs">End Time: {items.endTime} </p>
                  </div>

                  <p className="text-[#252C2B] text-sm">
                    {items.eventDescription.slice(0, 115)}...
                  </p>
                </div>
              </div>
            
            )}
           
          </div>
        </div>

      </div>
    </>
  )
}

export default EventList



