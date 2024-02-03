import React, { useState, RefObject, useRef, useEffect } from 'react'
import moment from 'moment'
import { Button } from '@/components/ui/button'
import { IoSearchSharp } from 'react-icons/io5'
import { Input } from '@/components/ui/input'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { FaArrowRightLong } from 'react-icons/fa6'

interface HeaderProps {
  calendarRef: RefObject<any> // Replace 'any' with the appropriate type of your calendarRef
}

const CalendarHeader: React.FC<HeaderProps> = ({ calendarRef }) => {
  const [title, setTitle] = useState<string>(moment().format('MMMM DD, YYYY'))
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const calendarApi = calendarRef.current.getApi()

    // Update the input value when the calendar view changes
    const updateTitle = () => {
      setTitle(calendarApi.view.title)
    }

    calendarApi.on('viewTitleChange', updateTitle)

    return () => {
      // Cleanup event listener on unmount
      calendarApi.off('viewTitleChange', updateTitle)
    }
  }, [calendarRef])

  const handleInputChange = () => {
    // Do something with the input value, if needed
    console.log('Input value:', inputRef.current?.value)
  }

  const handleDay = () => {
    const calendarApi = calendarRef.current.getApi()
    calendarApi.changeView('timeGridDay')
  }

  const handleWeek = () => {
    const calendarApi = calendarRef.current.getApi()
    calendarApi.changeView('timeGridWeek')
  }

  const handleMonth = () => {
    const calendarApi = calendarRef.current.getApi()
    calendarApi.changeView('dayGridMonth')
  }

  const handleYear = () => {
    const calendarApi = calendarRef.current.getApi()
    calendarApi.changeView('dayGridYear')
  }

  return (
    <div className="flex justify-between gap-3">
      <div className="flex gap-4 ">
        <Button
          className="text-[#252C2B] focus:bg-[#2A6562] focus:text-white hover:bg-[#2A6562] hover:text-white mt-[0.3rem] w-20 h-10 bg-transparent  border-solid border-2 border-slate-600"
          onClick={() => calendarRef.current.getApi().prev()}
        >
          <FaArrowLeftLong size={22} />
        </Button>
        <Button
          className="text-[#252C2B] focus:bg-[#2A6562] focus:text-white hover:bg-[#2A6562] hover:text-white w-20 h-12  bg-transparent  border-solid border-2 border-slate-600"
          onClick={() => calendarRef.current.getApi().today()}
        >
          Today
        </Button>
        <Button
          className="text-[#252C2B] focus:bg-[#2A6562] focus:text-white hover:bg-[#2A6562] hover:text-white mt-[0.3rem] w-20 h-10 bg-transparent  border-solid border-2 border-slate-600"
          onClick={() => calendarRef.current.getApi().next()}
        >
          <FaArrowRightLong size={22} />
        </Button>
      </div>
      <div className="flex gap-4">
        <Button
          className="bg-transparent text-[#7F7F7F] hover:bg-[#2A6562] focus:bg-[#2A6562] focus:text-white hover:text-white"
          onClick={handleDay}
        >
          Day
        </Button>
        <Button
          className="bg-transparent text-[#7F7F7F] hover:bg-[#2A6562] focus:bg-[#2A6562] focus:text-white hover:text-white"
          onClick={handleWeek}
        >
          Week
        </Button>
        <Button
          className="bg-transparent text-[#7F7F7F] hover:bg-[#2A6562] focus:bg-[#2A6562] focus:text-white hover:text-white"
          onClick={handleMonth}
        >
          Month
        </Button>
        <Button
          className="bg-transparent text-[#7F7F7F] hover:bg-[#2A6562] focus:bg-[#2A6562] focus:text-white hover:text-white"
          onClick={handleYear}
        >
          Year
        </Button>
      </div>
      <div className="relative flex justify-center items-center">
        <IoSearchSharp
          size={24}
          className="absolute  md:left-3 sm:hidden md:block text-[#7a7a7a]"
        />
        <Input
          type="search"
          className="w-50 px-10 rounded-full focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder="Search"
        />
      </div>
    </div>
  )
}

export default CalendarHeader
