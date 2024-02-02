'use client'
import React, { useState } from 'react'
import { Button } from '../../../components/ui/button'
import About from './Tabs/About/About'
import Bookings from './Tabs/Bookings/page'
import Favorites from './Tabs/Favorites/Favorites'
import Calendar from './Tabs/Calendar/page'
import Settings from './Tabs/Settings/Settings'
import Events from './Tabs/Events/Events'

const AboutMe = () => (
  <div className="container mx-auto p-4">
    <About />
  </div>
)

const MyBookings = () => (
  <div className="container mx-auto p-4">
    <Bookings />
  </div>
)

const MyEvents = () => (
  <div className="container mx-auto p-4">
    <Events />
  </div>
)

const MyFavorites = () => (
  <div className="container mx-auto p-4">
    <Favorites />
  </div>
)

const MyCalendar = () => (
  <div className="container mx-auto p-4">
    <Calendar />
  </div>
)

const SettingsTab = () => (
  <div className="container mx-auto p-4">
    <Settings />
  </div>
)

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState('aboutMe')

  const handleTabChange = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab)
  }

  return (
    <div className="container mx-auto px-18 mt-20">
      <div className="mt-4">
        <ul className="flex space-x-4">
          <li>
            <Button
              variant="link"
              className={`${
                activeTab === 'aboutMe'
                  ? 'focus:underline active:underline'
                  : ''
              } text-gray-500`}
              onClick={() => handleTabChange('aboutMe')}
            >
              About Me
            </Button>
          </li>
          <li>
            <Button
              variant="link"
              className={`${
                activeTab === 'myBookings'
                  ? 'focus:underline active:underline'
                  : ''
              } text-gray-500`}
              onClick={() => handleTabChange('myBookings')}
            >
              My Bookings
            </Button>
          </li>
          <li>
            <Button
              variant="link"
              className={`${
                activeTab === 'myEvents'
                  ? 'focus:underline active:underline'
                  : ''
              } text-gray-500`}
              onClick={() => handleTabChange('myEvents')}
            >
              My Events
            </Button>
          </li>
          <li>
            <Button
              variant="link"
              className={`${
                activeTab === 'myFavorites'
                  ? 'focus:underline active:underline'
                  : ''
              } text-gray-500`}
              onClick={() => handleTabChange('myFavorites')}
            >
              My Favorites
            </Button>
          </li>
          <li>
            <Button
              variant="link"
              className={`${
                activeTab === 'myCalendar'
                  ? 'focus:underline active:underline'
                  : ''
              } text-gray-500`}
              onClick={() => handleTabChange('myCalendar')}
            >
              My Calendar
            </Button>
          </li>
          <li>
            <Button
              variant="link"
              className={`${
                activeTab === 'settings'
                  ? 'focus:underline active:underline'
                  : ''
              } text-gray-500`}
              onClick={() => handleTabChange('settings')}
            >
              Settings
            </Button>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        {activeTab === 'aboutMe' && <AboutMe />}
        {activeTab === 'myBookings' && <MyBookings />}
        {activeTab === 'myEvents' && <MyEvents />}
        {activeTab === 'myFavorites' && <MyFavorites />}
        {activeTab === 'myCalendar' && <MyCalendar />}
        {activeTab === 'settings' && <SettingsTab />}
      </div>
    </div>
  )
}

export default ProfileTabs
