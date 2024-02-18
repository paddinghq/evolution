'use client'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { FaBell } from 'react-icons/fa'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import * as React from 'react'
import { useState } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

const notifications = [
  {
    message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    time: '4 hours ago'
  },
  {
    message: 'aliquam vero, corporis magni dolores, adipisci.',
    time: '16 hours ago'
  },
  {
    message: 'blanditiis quisquam debitis nisi veritatis velit exercitationem sit totam! Blanditiis.',
    time: '24 hours ago'
  },
  {
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    time: '3 days ago'
  },
  {
    message: 'blanditiis mollitia voluptatum earum autem temporibus? Est',
    time: '5 dayss ago'
  },
  {
    message: 'accusamus odio expedita quisquam non, eaque fugit',
    time: '7 dayss ago'
  },
  {
    message: 'nesciunt cum deleniti non eos Officiis laudantium sapiente,',
    time: '16 dayss ago'
  },
  {
    message: 'veniam quidem commodi Expedita, impedit? Voluptatem.',
    time: '24 days ago'
  },
  {
    message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    time: '1 months ago'
  },
  {
    message: 'quisquam debitis nisi veritatis velit exercitationem sit totam! Blanditiis',
    time: '2 months ago'
  },
  {
    message: 'corporis magni dolores, adipisci veniam quidem commodi blanditiis ',
    time: '2 months ago'
  },
  {
    message: 'Expedita, impedit? Voluptatem aliquam vero,',
    time: '3 months ago'
  },
]

const Notification = () => {
  const [notification, setNotification] = useState<boolean>(true)

  const closeNotification = () => {
    setNotification(false)
    console.log('closed')
  }

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className=" relative cursor-pointer">
            <IoIosNotificationsOutline className="text-white text-4xl" />
            <p
              className={`text-white bg-orange-600 rounded-full w-5 text-center text-sm absolute bottom-[1.4rem] right-0 ${
                notification ? '' : 'hidden'
              }`}
            >
              24
            </p>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-72 translate-x-[-7.5rem]">
          <ScrollArea className="h-96 rounded-md">
            <div className="">
              <div className="">
                <ul className="flex justify-between">
                  <button className="text-[0.7rem] text-white bg-gray-500 p-2 cursor-pointer rounded-md hover:bg-gray-700 active:bg-gray-700 focus:bg-gray-700">
                    7 days ago
                  </button>
                  <button className="text-[0.7rem] text-white bg-gray-500 p-2 cursor-pointer rounded-md hover:bg-gray-700 active:bg-gray-700 focus:bg-gray-700">
                    30 days ago
                  </button>
                  <button className="text-[0.7rem] text-white bg-gray-500 p-2 cursor-pointer rounded-md hover:bg-gray-700 active:bg-gray-700 focus:bg-gray-700">
                    All Notifications
                  </button>
                </ul>
              </div>
              <div
                className={`${notification ? 'bg-gray-100' : 'bg-transparent'}`}
              >
                <Separator className="my-2" />
                {notifications.map((notification) => (
                  <>
                    <div
                      key={notification.time}
                      className="text-sm flex items-center"
                      onMouseEnter={closeNotification}
                    >
                      <div className="mr-2">
                        <FaBell />
                      </div>
                      <div>
                        <p className="font-medium text-base leading-5">
                          {notification.message}
                        </p>
                        <p className="font-medium text-[0.65rem]">
                          {notification.time}
                        </p>
                      </div>
                    </div>
                    <Separator className="my-2" />
                  </>
                ))}
              </div>
            </div>
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default Notification
