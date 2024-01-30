'use client'
import React, { useState } from 'react';
import { Button } from './ui/button';

const AboutMe = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-4xl font-bold mb-4">About Me</h1>
    {/* Add about me content here */}
  </div>
);

const MyBookings = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-4xl font-bold mb-4">My Bookings</h1>
    {/* Add bookings content here */}
  </div>
);

const MyEvents = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-4xl font-bold mb-4">My Events</h1>
    {/* Add events content here */}
  </div>
);

const MyFavorites = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-4xl font-bold mb-4">My Favorites</h1>
    {/* Add favorites content here */}
  </div>
);

const MyCalendar = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-4xl font-bold mb-4">My Calendar</h1>
    {/* Add calendar content here */}
  </div>
);

const Settings = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-4xl font-bold mb-4">Settings</h1>
    {/* Add settings content here */}
  </div>
);

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState('aboutMe');

  const handleTabChange = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <div className="absolute container mx-auto px-36 mt-20">
      <div className="mt-4">
        <ul className="flex space-x-4">
          <li>
            <Button variant="link"
              className={`${
                activeTab === 'aboutMe' ? '' : ''
              } text-gray-500`}
              onClick={() => handleTabChange('aboutMe')}
            >
              About Me
            </Button>
          </li>
          <li>
            <Button variant="link"
              className={`${
                activeTab === 'myBookings' ? '' : ''
              } text-gray-500`}
              onClick={() => handleTabChange('myBookings')}
            >
              My Bookings
            </Button>
          </li>
          <li>
            <Button variant="link"
              className={`${
                activeTab === 'myEvents' ? '' : ''
              } text-gray-500`}
              onClick={() => handleTabChange('myEvents')}
            >
              My Events
            </Button>
          </li>
          <li>
            <Button variant="link"
              className={`${
                activeTab === 'myFavorites' ? '' : ''
              } text-gray-500`}
              onClick={() => handleTabChange('myFavorites')}
            >
              My Favorites
            </Button>
          </li>
          <li>
            <Button variant="link"
              className={`${
                activeTab === 'myCalendar' ? '' : ''
              } text-gray-500`}
              onClick={() => handleTabChange('myCalendar')}
            >
              My Calendar
            </Button>
          </li>
          <li>
            <Button variant="link"
              className={`${
                activeTab === 'settings' ? 'b' : ''
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
        {activeTab === 'settings' && <Settings />}
      </div>
    </div>
  );
};

export default ProfileTabs;
