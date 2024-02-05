'use client'
import { Input } from '@/components/ui/input'
import { Calendar } from '@/components/ui/calendar'
import { IoCalendar, IoCloudUpload, IoLocation, IoClose } from 'react-icons/io5'
import { GoClock, GoDeviceCameraVideo } from 'react-icons/go'
import { MdOutlineCameraAlt } from 'react-icons/md'
import { Button } from '@/components/ui/button'
import { SetStateAction, useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormProvider, useForm } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const eventType = [
  { id: 1, type: 'Private' },
  { id: 2, type: 'Strictly by Invitation' },
  { id: 3, type: 'Open' },
]

const MAX_FILE_SIZE = 5000000
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
]

const formSchema = z.object({
  eventName: z.string(),
  eventType: z.string({ required_error: 'Enter event type' }),
  eventPrice: z.string({ required_error: 'Enter event price' }),
  price: z.number({ required_error: 'Enter event price' }),
  date: z.date({ required_error: 'Enter event date' }),
  location: z.string({ required_error: 'Enter event location' }),
  startTime: z.number({ required_error: 'Enter event start time' }),
  endTime: z.number(),
  category: z.string(),
  format: z.string(),
  hashtag: z.string(),
  description: z.string(),
})

const Basic = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventName: '',
      eventType: '',
      eventPrice: '',
      price: 0,
      date: new Date(),
      location: '',
      startTime: 0,
      endTime: 0,
      category: '',
      format: '',
      hashtag: '',
      description: '',
    },
  })

  const [hashtag, setHashtag] = useState('')
  const [enteredHashtags, setEnteredHashtags] = useState<string[]>([])

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setHashtag(event.target.value)
  }

  const handleEnterKeyPress = (event: {
    key: string
    preventDefault: () => void
  }) => {
    if (event.key === 'Enter') {
      event.preventDefault()

      setEnteredHashtags([...enteredHashtags, hashtag])

      setHashtag('')
    }
  }

  const handleRemoveHashtag = (index: number): void => {
    const updatedHashtags = [...enteredHashtags]
    updatedHashtags.splice(index, 1)
    setEnteredHashtags(updatedHashtags)
  }

  const options = eventType.map(event => ({ value: event.id, label: event.type }));

  return (
    <div className="flex flex-col gap-8   ">
      <div className="flex gap-3 w-full justify-between">
        <div className="w-[49.49%]">
          <Input placeholder="Event Name" style={{ color: 'red' }} className='focus-visible:ring-0 focus-visible:ring-offset-0' />
        </div>
        <div className="w-[49.49%]">
          <Select>
            <SelectTrigger className="w-full focus-visible:!ring-0 focus-visible:!ring-offset-0">
              <SelectValue placeholder="Select an EventType" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel className='text-gray-500'>Event Type</SelectLabel>
                {eventType.map(event => (
                  <SelectItem key={event.id} value={event.type}>{event.type}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex gap-3">
        <Input placeholder="Priced event" className='focus-visible:ring-0 focus-visible:ring-offset-0' />
        <Input placeholder="Price (₦)" className='focus-visible:ring-0 focus-visible:ring-offset-0' />
      </div>
      <div className="flex gap-3">
        <div className="relative flex items-center w-full">
          <Input type="search" className="pr-10 pl-3 focus-visible:ring-0 focus-visible:ring-offset-0" placeholder="Location" />

          <IoCalendar size={24} className="absolute right-3 text-[#7a7a7a] focus-visible:ring-0 focus-visible:ring-offset-0" />
        </div>
        <div className="relative flex items-center w-full">
          <Input type="search" className="pr-10 pl-3 focus-visible:ring-0 focus-visible:ring-offset-0" placeholder="Location" />

          <IoLocation size={24} className="absolute right-3 text-[#7a7a7a]" />
        </div>
      </div>
      <div className="flex gap-3">
        <div className="relative flex items-center w-full">
          <Input
            type="search"
            className="pr-10 pl-3"
            placeholder="Start time"
          />

          <GoClock size={24} className="absolute right-3 text-[#7a7a7a]" />
        </div>
        <div className="relative flex items-center w-full">
          <Input type="search" className="pr-10 pl-3 focus-visible:ring-0 focus-visible:ring-offset-0" placeholder="End time" />

          <GoClock size={24} className="absolute right-3 text-[#7a7a7a] focus-visible:ring-0 focus-visible:ring-offset-0" />
        </div>
      </div>
      <div className="flex gap-3">
        <Input placeholder="Event Category" className='focus-visible:ring-0 focus-visible:ring-offset-0' />
      </div>
      <div className="flex gap-3">
        <Input placeholder="Event Format" className='focus-visible:ring-0 focus-visible:ring-offset-0' />
      </div>
      <div className="">
        <Input className="h-24 focus-visible:ring-0 focus-visible:ring-offset-0" placeholder="Event description" />
      </div>
      <div className="">
        <>
          <Input
            placeholder="Event Hashtag"
            value={hashtag}
            onChange={handleInputChange}
            onKeyPress={handleEnterKeyPress}
            className='focus-visible:ring-0 focus-visible:ring-offset-0'
          />

          {enteredHashtags.length > 0 && (
            <div className="mt-5 bg-white py-4 px-3 flex flex-wrap gap-3 rounded-lg">
              {enteredHashtags.map((enteredHashtag, index) => (
                <span
                  key={index}
                  className="border-2 rounded-full border-black px-3 flex"
                >
                  {enteredHashtag}
                  <button onClick={() => handleRemoveHashtag(index)}>
                    <IoClose />
                  </button>
                </span>
              ))}
            </div>
          )}
        </>
      </div>

      <div className="border-8 border-dashed rounded-2xl p-10 border-spacing-5 border-white">
        <div className="flex flex-col justify-center items-center gap-3 ">
          <div className="flex gap-2">
            <MdOutlineCameraAlt
              size={36}
              className="border-r-4 border-black ml-3"
            />

              <GoDeviceCameraVideo size={36} />
            </div>
            <h1>Drag and drop a file</h1>

            <p>Drag and drop or select an image or video file(s).</p>

            <Button variant="outline" className="flex gap-3 bg-none">
              <IoCloudUpload size={24} />
              Upload media
            </Button>
          </div>
        </div>
      </div>
  )
}

export default Basic
