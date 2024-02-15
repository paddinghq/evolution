'use client'

import { Button } from '@/components/ui/button'
import Basic from './tabcomponent/basic'
import Invite from './tabcomponent/invitee'
import EventCheck from './tabcomponent/event'
import Budget from './tabcomponent/budget'
import Payment from './tabcomponent/payment'
import React, { SetStateAction, useState } from 'react'

const Event = () => {
  const [activeTab, setActiveTab] = useState(1)
  const [formData, setFormData] = useState({
    eventName: '',
    eventType: '',
    pricedEvent: '',
    price: '',
    date: '',
    location: '',
    startTime: '',
    endTime: '',
    eventCategory: '',
    eventFormat: '',
    eventDescription: '',
    eventHashTag: '',
    media: '',
    inviteName: '',
    inviteNumber: '',
    eventChecklist: '',
    commodityName: '',
    amountAllocated: '',
    budgetDescription: '',
    paymentMethod: '',
  })
  const tabs = [
    {
      id: 1,
      title: 'Basic Info',
      component: <Basic formData={formData} setFormData={setFormData} />,
    },
    {
      id: 2,
      title: 'Invitee Info',
      component: <Invite formData={formData} setFormData={setFormData} />,
    },
    {
      id: 3,
      title: 'Event Checklist',
      component: <EventCheck formData={formData} setFormData={setFormData} />,
    },
    {
      id: 4,
      title: 'Budget Info',
      component: <Budget formData={formData} setFormData={setFormData} />,
    },
    {
      id: 5,
      title: 'Payment Info',
      component: <Payment formData={formData} setFormData={setFormData} />,
    },
  ]

  const handleSelectedTab = (tab: React.SetStateAction<number>) => {
    setActiveTab(tab)
  }

  const handleNextClick = () => {
    const nextTabId = activeTab < tabs.length ? activeTab + 1 : activeTab
    setActiveTab(nextTabId)
    console.log('tab changed')
  }

  const handlePrevClick = () => {
    const prevTabId = activeTab > 1 ? activeTab - 1 : activeTab
    setActiveTab(prevTabId)
  }

  const handleSubmit = () => {
    console.log('Form submitted successfully!')
  }

  const handleSkipNowClick = () => {
    const nextTabId = activeTab < tabs.length ? activeTab + 1 : activeTab
    setActiveTab(nextTabId)
  }

  const isLastTab = activeTab === tabs.length

  return (
    <div className="container mt-6 px-28 py-5">
      <div className="mt-3">
        <h2 className="text-[#B1761F] text-lg font-semibold capitalize mb-1">
          Create Event
        </h2>
        <hr className="w-[3rem] border-4 border-[#F5A42C] rounded-xl" />
      </div>

      <div className="flex justify-between items-center mt-6">
        {tabs.map((items) => (
          <Button
            key={items.id}
            variant="link"
            className={`bg-none ${
              activeTab === items.id ? 'text-[#217873] font-bold underline' : ''
            }`}
          >
            <span onClick={() => handleSelectedTab(items.id)}>
              {items.title}
            </span>
          </Button>
        ))}
      </div>

      <div
        className="px-9 py-8 rounded-lg mt-4"
        style={{ background: 'rgba(33, 120, 115, 0.20)' }}
      >
        <div className="">
          {tabs.find((item) => item.id === activeTab)?.component}
        </div>

        <div className="mt-7 flex justify-end items-center gap-4">
          {activeTab > 1 && <Button onClick={handlePrevClick}>Previous</Button>}
          {activeTab === 3 || activeTab === 4 ? (
            <>
              <Button variant="link" onClick={handleSkipNowClick}>
                Skip Now
              </Button>
              <Button
                className="bg-[#217873] px-10 text-white hover:bg-black"
                onClick={handleNextClick}
              >
                Next
              </Button>
            </>
          ) : isLastTab ? (
            <Button
              variant="secondary"
              className="bg-[#217873] px-10 text-white hover:bg-black"
              onClick={handleSubmit}
            >
              Publish Event
            </Button>
          ) : (
            <Button
              variant="secondary"
              className="bg-[#217873] px-10 text-white hover:bg-black"
              onClick={handleNextClick}
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Event
