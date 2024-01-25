'use client'
import React, { useState } from 'react';

const AboutMe = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-4xl font-bold mb-4">About Me</h1>
    {/* Add your about me content here */}
  </div>
);

const MyBookings = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-4xl font-bold mb-4">My Bookings</h1>
    {/* Add your bookings content here */}
  </div>
);

const MyEvents = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-4xl font-bold mb-4">My Events</h1>
    {/* Add your events content here */}
  </div>
);

const MyFavorites = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-4xl font-bold mb-4">My Favorites</h1>
    {/* Add your favorites content here */}
  </div>
);

const MyCalendar = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-4xl font-bold mb-4">My Calendar</h1>
    {/* Add your calendar content here */}
  </div>
);

const Settings = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-4xl font-bold mb-4">Settings</h1>
    {/* Add your settings content here */}
  </div>
);

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState('aboutMe');

  const handleTabChange = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto px-36">
      <div className="mt-4">
        <ul className="flex space-x-4">
          <li>
            <button
              className={`${
                activeTab === 'aboutMe' ? 'border-b-2 border-gray-500' : ''
              } text-gray-500`}
              onClick={() => handleTabChange('aboutMe')}
            >
              About Me
            </button>
          </li>
          <li>
            <button
              className={`${
                activeTab === 'myBookings' ? 'border-b-2 border-gray-500' : ''
              } text-gray-500`}
              onClick={() => handleTabChange('myBookings')}
            >
              My Bookings
            </button>
          </li>
          <li>
            <button
              className={`${
                activeTab === 'myEvents' ? 'border-b-2 border-gray-500' : ''
              } text-gray-500`}
              onClick={() => handleTabChange('myEvents')}
            >
              My Events
            </button>
          </li>
          <li>
            <button
              className={`${
                activeTab === 'myFavorites' ? 'border-b-2 border-gray-500' : ''
              } text-gray-500`}
              onClick={() => handleTabChange('myFavorites')}
            >
              My Favorites
            </button>
          </li>
          <li>
            <button
              className={`${
                activeTab === 'myCalendar' ? 'border-b-2 border-gray-500' : ''
              } text-gray-500`}
              onClick={() => handleTabChange('myCalendar')}
            >
              My Calendar
            </button>
          </li>
          <li>
            <button
              className={`${
                activeTab === 'settings' ? 'border-b-2 border-gray-500' : ''
              } text-gray-500`}
              onClick={() => handleTabChange('settings')}
            >
              Settings
            </button>
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
