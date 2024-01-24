import React from 'react'
import Image from '@/node_modules/next/image'
import { Button } from '@/components/ui/button'
import { LuSettings2 } from 'react-icons/lu'

interface BookingCardProps {
  image: string
  title: string
  address: string
  day: string
  date: string
  time: number
  quantity: number
  seatNumber: string
  price: number
  tax: number
  total: number
  qrCode: string
  bookingId: string
}

const BookingCard = (prop: BookingCardProps) => {
  return (
    <div className="flex w-full p-10">
      <div className="flex flex-row gap-5 bg-[#dbdada] rounded-xl w-[85%] p-3">
        <div>
          <Image
            src={prop.image}
            alt="Booking Card Image"
            width={250}
            height={200}
          />
        </div>
        <div className="w-[75%] border-r-2 border-black border-dashed p-3">
          <h2 className="text-sm font-bold text-[#252C2B]">{prop.title}</h2>
          <p className="text-xs text-[#252C2B]">{prop.address}</p>
          <div className="flex ">
            <p className="text-xs text-[#252C2B]">{prop.day}</p>
            <p className="text-xs text-[#252C2B]">. {prop.date} .</p>
            <p className="text-xs text-[#252C2B]">{prop.time}</p>
          </div>
          <p className="text-[#252C2B] mt-3 text-sm">
            Quantity: {prop.quantity}
          </p>
          <p className="text-[#252C2B] mt-2 text-xs">
            Seat number: {prop.seatNumber}
          </p>
          <div>
            <div className="flex justify-between mt-6">
              <p className="text-xs text-[#252C2B]">Ticket price</p>
              <p className="text-xs text-[#252C2B]">${prop.price}</p>
            </div>
            <div className="flex justify-between mt-3">
              <p className="text-xs text-[#252C2B]">Convenience fees + Taxes</p>
              <p className="text-xs text-[#252C2B]">${prop.tax}</p>
            </div>
            <hr className="border-2 my-4 border-black border-dashed" />
            <div className="flex justify-between mt-3">
              <p className="text-xs text-[#252C2B] font-bold">Amount paid</p>
              <p className="text-xs text-[#252C2B] font-bold">${prop.total}</p>
            </div>
          </div>
        </div>
        <div className="w-[25%] flex flex-col gap-3 p-2">
          <Image
            src={prop.qrCode}
            alt="QR Code"
            width={80}
            height={100}
            className=""
          />
          <p className="text-xs mx-auto">BOOKING ID</p>
          <p className="text-sm mx-auto">{prop.bookingId}</p>
          <Button className="bg-transparent text-[#2A6562] hover:bg-transparent cursor-pointer hover:text-[#B1761F] text-xs font-bold mx-auto">
            Download PDF
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start p-4">
        <Button className="bg-transparent text-[#2A6562] underline p-0 hover:bg-transparent cursor-pointer hover:text-[#B1761F]">
          Cancel booking
        </Button>
        <Button className="bg-transparent text-[#2A6562] underline p-0 hover:bg-transparent cursor-pointer hover:text-[#B1761F]">
          Follow Organizer
        </Button>
        <Button className="bg-transparent text-[#2A6562] underline p-0 hover:bg-transparent cursor-pointer hover:text-[#B1761F]">
          Report event
        </Button>
        <Button className="bg-transparent text-[#2A6562] underline p-0 hover:bg-transparent cursor-pointer hover:text-[#B1761F]">
          Report a scam
        </Button>
      </div>
    </div>
  )
}

export default BookingCard
