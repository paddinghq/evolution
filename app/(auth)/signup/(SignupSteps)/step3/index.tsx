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
import { useRouter } from 'next/router'

// import StepThree from "../step3/index"

const formSchema = z.object({
  dob: z.date({ required_error: 'A date of birth is required.' }),
  type: z.enum(['all', 'mentions', 'none'], {
    required_error: 'You need to select a notification type.',
  }),
})

const hobies = [
  {
    name: 'label',
  },
  {
    name: 'label',
  },
  {
    name: 'label',
  },
  {
    name: 'label',
  },
  {
    name: 'label',
  },
  {
    name: 'label',
  },
  {
    name: 'label',
  },
  {
    name: 'label',
  },
  {
    name: 'label',
  },
  {
    name: 'label',
  },
  {
    name: 'label',
  },
  {
    name: 'label',
  },
  {
    name: 'label',
  },
  {
    name: 'label',
  },
  {
    name: 'label',
  },
  {
    name: 'label',
  },
  {
    name: 'label',
  },
  {
    name: 'label',
  },
  {
    name: 'label',
  },
  {
    name: 'label',
  },
  {
    name: 'label',
  },
  {
    name: 'label',
  },
  {
    name: 'label',
  },
  {
    name: 'label',
  },
  {
    name: 'label',
  },
  {
    name: 'label',
  },
  {
    name: 'label',
  },
  {
    name: 'label',
  },
]

const StepThree = () => {
  // const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  })

  const handleSubmit = () => {}

  const handleback = () => {
    
  }

  return (
    <div className="container mt-10">
      <div
        className="shadow-lg cursor-pointer w-fit p-2 rounded-full"
        onClick={(e) => handleback()}
      >
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
            onSubmit={form.handleSubmit(handleSubmit)}
            className="max-w-md w-full flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem className="flex flex-col mt-6">
                  <FormLabel>Select your location</FormLabel>
                  <Select>
                    <SelectTrigger className="px-7 rounded-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Nigeria</SelectItem>
                      <SelectItem value="dark">Togo</SelectItem>
                      <SelectItem value="system">Ivory coast</SelectItem>
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

        <div className="grid grid-cols-7 gap-6 items-center mt-5 ">
          {hobies.map((items) => (
            <div className="border-2 rounded-full px-10 py-2 flex justify-center items-center cursor-pointer active:bg-[#B1761F] active:text-white hover:bg-[#2A6562] hover:text-white">
              {items.name}
            </div>
          ))}
        </div>
      </div>
      <div className=" flex justify-end gap-3 mt-4">
        <Button
          type="submit"
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

export default StepThree
