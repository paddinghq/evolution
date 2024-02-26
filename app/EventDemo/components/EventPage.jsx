import Img1 from '@/public/image.jpeg'
import { IoShareOutline } from 'react-icons/io5'
import { IoIosHeartEmpty } from 'react-icons/io'
import EventBtn from './eventBtn'
import Image from 'next/image'
export default function EventPage({
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
  noButton = false,
}) {
  return (
    <div className="border-2 flex flex-col rounded-lg">
      <div className="flex justify-center relative">
        <Image src={Img1} alt={eventName} className="" />
        <div className="absolute flex items-center gap-4 text-white top-3 right-5">
          <IoShareOutline
            size="28"
            className="hover:text-[#2A6562] cursor-pointer"
          />
          <IoIosHeartEmpty
            size="28"
            className="hover:text-[#2A6562] cursor-pointer"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 p-5">
        <p className="text-[#252C2B] text-lg font-semibold">
          Event Name: {eventName}
        </p>
        <div className="flex justify-between gap-2">
          <p className="text-[#252C2B] text-xs">Event Type: {eventType}</p>
          <p className="text-[#252C2B] text-xs">Event Price: {eventPrice}</p>
        </div>
        <div className="flex justify-between gap-2">
          <p className="text-[#252C2B] text-xs">Event Location: {location}</p>
          <p className="text-[rgb(37,44,43)] text-xs">
            Event Date:{' '}
            {new Date(eventDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            })}
          </p>
        </div>

        <div className="flex justify-between">
          <p className="text-[#252C2B] text-xs">Start Time: {startTime} </p>
          <p className="text-[#252C2B] text-xs">End Time: {endTime} </p>
        </div>

        <p className="text-[#252C2B] text-sm">
          {eventDescription?.slice(0, 115)}...
        </p>

        {!noButton && <EventBtn id={_id} />}
      </div>
    </div>
  )
}
