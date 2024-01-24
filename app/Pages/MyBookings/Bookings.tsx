import React from 'react'
import BookingCard from './BookingCard'
import { Button } from '@/components/ui/button'
import image from '@/public/chris.jpg'

const bookings = [
  {
    image: image,
    title: 'Music Party with Special Guests',
    address: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
    day: 'Friday',
    date: '25th January 2024 ',
    time: 1900,
    quantity: 2,
    seatNumber: 'H 01, P 02',
    price: 800,
    tax: 80,
    total: 880,
    bookingId: 'WQFCQ4X',
    qrCode: image,
  },
  {
    image: image,
    title: 'Music Party with Special Guests',
    address: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
    day: 'Friday',
    date: '25th January 2024 ',
    time: 1900,
    quantity: 2,
    seatNumber: 'H 01, P 02',
    price: 800,
    tax: 80,
    total: 880,
    bookingId: 'WQFCQ4X',
    qrCode: image,
  },
  {
    image: image,
    title: 'Music Party with Special Guests',
    address: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
    day: 'Friday',
    date: '25th January 2024 ',
    time: 1900,
    quantity: 2,
    seatNumber: 'H 01, P 02',
    price: 800,
    tax: 80,
    total: 880,
    bookingId: 'WQFCQ4X',
    qrCode: image,
  },
  {
    image: image,
    title: 'Music Party with Special Guests',
    address: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
    day: 'Friday',
    date: '25th January 2024 ',
    time: 1900,
    quantity: 2,
    seatNumber: 'H 01, P 02',
    price: 800,
    tax: 80,
    total: 880,
    bookingId: 'WQFCQ4X',
    qrCode: image,
  },
  {
    image: image,
    title: 'Music Party with Special Guests',
    address: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
    day: 'Friday',
    date: '25th January 2024 ',
    time: 1900,
    quantity: 2,
    seatNumber: 'H 01, P 02',
    price: 800,
    tax: 80,
    total: 880,
    bookingId: 'WQFCQ4X',
    qrCode: image,
  },
  {
    image: image,
    title: 'Music Party with Special Guests',
    address: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
    day: 'Friday',
    date: '25th January 2024 ',
    time: 1900,
    quantity: 2,
    seatNumber: 'H 01, P 02',
    price: 800,
    tax: 80,
    total: 880,
    bookingId: 'WQFCQ4X',
    qrCode: image,
  },
  {
    image: image,
    title: 'Music Party with Special Guests',
    address: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
    day: 'Friday',
    date: '25th January 2024 ',
    time: 1900,
    quantity: 2,
    seatNumber: 'H 01, P 02',
    price: 800,
    tax: 80,
    total: 880,
    bookingId: 'WQFCQ4X',
    qrCode: image,
  },
  {
    image: image,
    title: 'Music Party with Special Guests',
    address: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
    day: 'Friday',
    date: '25th January 2024 ',
    time: 1900,
    quantity: 2,
    seatNumber: 'H 01, P 02',
    price: 800,
    tax: 80,
    total: 880,
    bookingId: 'WQFCQ4X',
    qrCode: image,
  },
]

const Bookings = () => {
  return (
    <div
      className="mx-auto rounded-3xl w-[70%] p-10"
      style={{ background: 'rgba(33, 120, 115, 0.20)' }}
    >
      <div>
        <div className="w-full flex justify-between ">
          <div className="items-center flex w-[50%] gap-10 mb-5">
            <p className="font-semibold">Filter:</p>
            <input
              type="text"
              placeholder="Category"
              className="px-6 py-3 text-[#9D9D9D] text-xs rounded-2xl"
            />
            <input
              type="text"
              placeholder="Status"
              className="px-6 py-3 text-[#9D9D9D] text-xs rounded-2xl"
            />
          </div>
          <div className="mr-1">
            <Button className="bg-[#B1761F] text-white w-5 h-3">HH</Button>
          </div>
        </div>
        {bookings.map((booking: any) => {
          return (
            <div className="flex flex-row bg-white rounded-3xl my-6">
              <BookingCard
                key={booking.title}
                title={booking.title}
                image={booking.image}
                address={booking.address}
                day={booking.day}
                date={booking.date}
                time={booking.time}
                quantity={booking.quantity}
                seatNumber={booking.seatNumber}
                price={booking.price}
                tax={booking.tax}
                total={booking.total}
                bookingId={booking.bookingId}
                qrCode={booking.qrCode}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Bookings
