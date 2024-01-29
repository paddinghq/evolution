import React from 'react'
import {
  Calendar as BigCalendar,
  CalendarProps,
  momentLocalizer,
} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'

const localizer = momentLocalizer(moment)

const Calendar = (props: Omit<CalendarProps, 'localizer'>) => {
  const handleViewChange = (date: Date, view: string) => {
    console.log(`view changed to: ${view}`)
  }

  return (
    <div className="bg-[#21787333] h-[95vh] p-8 rounded-2xl flex flex-col gap-10">
      <BigCalendar
        {...props}
        localizer={localizer}
        onNavigate={handleViewChange}
      />
    </div>
  )
}

export default Calendar
