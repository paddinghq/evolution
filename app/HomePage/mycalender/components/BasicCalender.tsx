import React from 'react'
import Calendar from './Calendar'
import moment from 'moment'

const events = [
  {
    id:1,
    start: moment('2024-01-29:04:00:00').toDate(),
    end: moment('2024-01-29:09:00:00').toDate(),
    title: 'Standup meeting',
  },
  {
    id:2,
    start: moment('2024-01-31:04:00:00').toDate(),
    end: moment('2024-01-31:09:00:00').toDate(),
    title: 'Standup meeting',
  }

]

const BasicCalender = () => {
  return (
    <Calendar events={events} />
  )
}

export default BasicCalender
