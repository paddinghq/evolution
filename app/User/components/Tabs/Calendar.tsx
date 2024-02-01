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
  return (
    <div className="mt-6">
      <div className="bg-[#21787333] pt-16 px-16 rounded-2xl flex flex-col gap-10">
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
        />
      </div>
    </div>
  )
}

export default Calendar
