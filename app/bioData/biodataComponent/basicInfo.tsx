'use client'
import React from 'react'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { IoChevronBack } from 'react-icons/io5'
import * as z from 'zod'
import { cn } from '@/lib/utils'
import { Calendar } from '@/components/ui/calendar'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormProvider, useForm } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormDescription,
  FormLabel,
} from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { IoIosArrowBack } from 'react-icons/io'
import { useSelector } from 'react-redux'

const formSchema = z.object({
  dob: z.date({ required_error: 'A date of birth is required.' }),
  gender: z.enum(['male', 'female', 'others', 'prefer not to say'], {
    required_error: 'You need to select a gender.',
  }),
  maritalStatus: z.enum(['single', 'married',  'prefer not to say'], {
    required_error: 'You need to select your marital status.',
  }),
  kids: z.enum(['yes', 'no', 'prefer not to say'], {
    required_error: 'You need to select if you have kids.',
  }),
})

interface BasicInfoProps {
  handleNextStep: (stepValues: any) => void
  // other prop types
}

const BasicInfo: React.FC<BasicInfoProps> = ({ handleNextStep }) => {
  const bioData = useSelector((state: any) => state.bioData.bioData)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...bioData
    },
  })

  const handleSubmit =(values: z.infer<typeof formSchema>)=> {
    console.log(values)
    const dob = values.dob.toLocaleString("en-gb",{
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).split("/").reverse().join("-")
  const payLoad = {
    dob:dob,
    gender: values.gender,
    maritalStatus: values.maritalStatus,
    kids: values.kids
  }
    handleNextStep(payLoad)
  }

  return (
    <div className=" container my-32 overflow-hidden">
      
      
      <div className="flex justify-around shadow-lg border-l-2 border-r-2 border-b-2 mt-10 mx-auto px-14 py-5">
        <div>
          <h1 className="text-2xl font-bold ">Let us get to know you better</h1>
          <p className="text-sm font-semibold">
            We will use this information to personalize your experience
          </p>
        </div>
        
        
      

        <FormProvider {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="max-w-md w-full flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>What is your date of birth?</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'rounded-xl py-6 text-left font-normal',
                            !field.value && 'text-muted-foreground',
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span>Date of birth</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date('1900-01-01')
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Please specify your gender</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="male" />
                        </FormControl>
                        <FormLabel className="font-normal">Male</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="female" />
                        </FormControl>
                        <FormLabel className="font-normal">Female</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="others" />
                        </FormControl>
                        <FormLabel className="font-normal">Other</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="prefer not to say" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Prefer not to answer
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="maritalStatus"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Please specify your relationship status</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="single" />
                        </FormControl>
                        <FormLabel className="font-normal">Single</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="married" />
                        </FormControl>
                        <FormLabel className="font-normal">Married</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="prefer not to say" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Prefer not to answer
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="kids"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Do you have any kids?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="yes" />
                        </FormControl>
                        <FormLabel className="font-normal">Yes</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="no" />
                        </FormControl>
                        <FormLabel className="font-normal">No</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="prefer not to say" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Prefer not to answer
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className=" flex justify-end gap-3">
              {/* <Button
                type="submit"
                className=" text-black hover:bg-[#217873] hover:text-white bg-white"
              >
                <Link href="/">Skip</Link>
              </Button> */}
              <Button
                type="submit"
                className=" bg-[#217873] hover:bg-[#217873] px-8"
              >
                Next
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}

export default BasicInfo
