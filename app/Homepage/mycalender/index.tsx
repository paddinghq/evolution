import React from 'react'
import {
  Calendar as BigCalendar,
  CalendarProps,
  momentLocalizer,
} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
import BasicCalender from './components/BasicCalender'
import ControlCalender from './components/ControlCalender'

const MyCalender = () => {
  return (
    <div className="mt-6">
      <BasicCalender />
    </div>
  )
}

export default MyCalender
