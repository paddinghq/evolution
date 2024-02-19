'use client'
import { IoChevronBack } from 'react-icons/io5'
import React from 'react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormProvider, useForm } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useDispatch, useSelector } from 'react-redux'
import { BioSlice, setBioData } from '@/app/Redux/slice/bioDataSlice'
import { BioData } from './../SubmitPostLogic';

interface HobbiesProps {
  handleSubmit: (stepValues: any) => void
  handlePreviousStep: any
}

const formSchema = z.object({
  location: z.enum(["lagos", "togo", "ivorycoast"], 
  { required_error: 'A location is required.' }),
  type: z.enum(['all', 'mentions', 'none'], {
    required_error: 'You need to select a notification type.',
  }),
})

const hobies = [
  {
    name: 'running',
    value: 'running'
  },
  {
    name: 'dancing',
    value: 'dancing',
  },
  {
    name: 'swimming',
    value: 'swimming',
  },
  {
    name: 'drawing',
    value: 'drawing',
  },
  {
    name: 'gaming',
    value: 'gaming',
  },
  {
    name: 'painting',
    value: 'painting',
  },
  {
    name: 'singing',
    value: 'singing',
  },
  {
    name: 'cooking',
    cooking: 'cooking',
  },
  {
    name: 'reading',
    value: 'reading',
  },
  {
    name: 'jogging',
    value: 'jogging',
  },
  {
    name: 'others',
    value: 'others',
  },
]

const Hobbies: React.FC<HobbiesProps> = ({
  handlePreviousStep,
  handleSubmit,
}) => {
  const bioData = useSelector((state: any) => state.bioData.bioData)
  console.log(bioData)
  const dispatch = useDispatch()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...bioData
    },
  })
  const handleSubmitData =(values: z.infer<typeof formSchema>)=> {
    const payLoad = {
      dob: bioData.dob,
      gender: bioData.gender,
      maritalStatus: bioData.maritalStatus,
      kid: bioData.kids,
      health: bioData.health,
      disability: bioData.disabilty
    }
    handleSubmit(payLoad)
  }

  const handleeClick = (Value : string) => {
    // dispatch(BioSlice.actions.setBioData(Value));
    console.log(Value)
  }


  return (
    <div className="container mt-10">
      <div className="shadow-lg cursor-pointer w-fit p-2 rounded-full">
        <IoChevronBack size={24} />
      </div>

      <div className="shadow-lg border-l-2 border-r-2 mt-10  ml-10 px-14 py-5">
        <h5 className="text-2xl font-bold mb-1">
          Good job! You’re just one step away
        </h5>
        <p>
          We want to serve you based on where you are located and what you
          like...
        </p>

        <FormProvider {...form}>
          <form
            defaultValue={bioData}
            onSubmit={(values) => handleSubmit(values)}
            className="max-w-md w-full flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="flex flex-col mt-6">
                  <FormLabel>Select your location</FormLabel>
                  <Select>
                    <SelectTrigger className="px-7 rounded-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nigeria">Nigeria</SelectItem>
                      <SelectItem value="togo">Togo</SelectItem>
                      <SelectItem value="ivorycoast">Ivory coast</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </form>
        </FormProvider>

        <div className="mt-5">
          <h6 className="text-[#252C2B] font-base">
            Tell us about your hobbies
          </h6>
        </div>

        <ul className="grid grid-cols-7 gap-6 items-center mt-5 ">
          {hobies.map((items) => (
            //@ts-ignore
            <li onClick={(e) => handleeClick(items.name)} className="border-2 rounded-full px-10 py-2 flex justify-center items-center cursor-pointer active:bg-[#B1761F] active:text-white hover:bg-[#2A6562] hover:text-white">
              {items.name}
            </li>
          ))}
        </ul>
      </div>
      <div className=" flex justify-end gap-3 mt-4">
        <Button
          type="submit"
          onClick={handlePreviousStep}
          className=" text-black hover:bg-[#217873] hover:text-white bg-white"
        >
          Skip
        </Button>
        <Button type="submit" className=" bg-[#2A6562] hover:bg-[#217873] px-8">
          FinishUp
        </Button>
      </div>
    </div>
  )
}

export default Hobbies
