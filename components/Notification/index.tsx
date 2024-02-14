import { IoIosNotificationsOutline } from 'react-icons/io'
import { FaCircle } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import * as React from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

const notifications: string[] = [
  'notification1',
  'notification2',
  'notification3',
  'notification4',
  'notification5',
  'notification16',
]

const Notification = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="cursor-pointer relative">
            <IoIosNotificationsOutline className="text-white text-3xl" />
            <FaCircle className='text-orange-500 w-3 absolute bottom-[1.1rem] right-1' />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-72">
          <ScrollArea className="h-96 rounded-md border">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none">
                Notificationss
              </h4>
              <Separator className="my-2" />
              {notifications.map((notification) => (
                <>
                  <div key={notification} className="text-sm">
                    {notification}
                  </div>
                  <Separator className="my-2" />
                </>
              ))}
            </div>
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default Notification
