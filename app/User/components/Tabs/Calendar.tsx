'use client'
import React, { useState, useRef } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import CalendarHeader from '../fullcalendar/CalenderHeader'

interface Event {
  title: string
  start: Date | string
  allDay: boolean
  id: string
  end: Date | string
}

const events: Event[] = [
  {
    title: 'Seminar Presentation',
    start: new Date(), // Provide a valid date or string for start
    allDay: true,
    id: '',
    end: new Date(),
  },
]

const Calendar = () => {
  const calendarRef = useRef<any>(null)
  const dayHeaderContent = (arg: any) => {
    // arg.date is the date for the current day header cell
    const weekday = arg.date.toLocaleDateString('en-US', { weekday: 'short' })
    const dayNumber = arg.date.getDate()

    // Check if the weekday is Saturday or Sunday and capitalize it
    const capitalizedWeekday = ['sat', 'sun'].includes(weekday.toLowerCase())
      ? weekday.toUpperCase()
      : weekday

    return (
      <div className="custom-day-header">
        <div className="day-header-weekday">{capitalizedWeekday}</div>
        <div className="day-header-number">{dayNumber}</div>
      </div>
    )
  }

  return (
    <div className="mt-6">
      <div className="bg-[#21787333] py-16 px-16 rounded-2xl flex flex-col gap-10">
        <CalendarHeader calendarRef={calendarRef} />
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={'dayGridMonth'}
          headerToolbar={false}
          height={'100vh'}
          themeSystem={'Sandstone'}
          editable={true}
          selectable={true}
          events={events}
          dayHeaderContent={dayHeaderContent}
        />
      </div>
    </div>
  )
}

export default Calendar
