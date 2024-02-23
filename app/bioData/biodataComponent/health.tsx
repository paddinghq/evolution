'use client'
import React from 'react'
import * as z from 'zod'
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
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { IoIosArrowBack } from 'react-icons/io'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { IoChevronBack } from 'react-icons/io5'

const formSchema = z.object({
  disabilityStatus: z.enum(['yes', 'no', 'prefer not to say'], {
    required_error: 'You need to select a disability status.',
  }),
  disability: z.enum(['blind', 'deaf', 'dumb', 'none', 'prefer not to say'], {
    required_error: 'You need to select a disability.',
  }),

  health: z.enum(['excellent', 'good', 'fair', 'poor', 'prefer not to say'], {
    required_error: 'You need to select a health status.',
  }),
})

interface HealthProps {
  handleNextStep: (stepValues: any) => void
  handlePreviousStep: any
}

const Health: React.FC<HealthProps> = ({
  handlePreviousStep,
  handleNextStep,
}) => {
  const bioData = useSelector((state: any) => state.bioData.bioData)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...bioData,
    },
  })

  const handleSubmitData = (values: z.infer<typeof formSchema>) => {
    // console.log({values})
    const payLoad = {
      dateOfBirth: bioData.dateOfBirth,
      gender: bioData.gender,
      maritalStatus: bioData.maritalStatus,
      kid: bioData.kids,
      health: values.health,
      disability: values.disability,
      disabilityStatus: values.disabilityStatus
    }
    handleNextStep(payLoad)
  }


  return (
    <div className="container py-32">
      
      <div className="shadow-lg cursor-pointer w-fit p-2 rounded-full">
        <IoChevronBack size={24} />
      </div>

      <div className="flex justify-around shadow-lg border-l-2 border-r-2 border-b-2 mt-10 mx-auto px-14 py-5">
        <div className="">
          <h1 className="text-2xl font-bold">
            We look out for you in any way possible
          </h1>
          <p className="text-sm font-semibold">
            Let us make this journey as convenient for you as we can...
          </p>
        </div>

        <FormProvider {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmitData)}
            className="max-w-md w-full flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="health"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>
                    How do you rate yourself in terms of your current health?
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="excellent" />
                        </FormControl>
                        <FormLabel className="font-normal">Excellent</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="good" />
                        </FormControl>
                        <FormLabel className="font-normal">Good</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="fair" />
                        </FormControl>
                        <FormLabel className="font-normal">Fair</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="poor" />
                        </FormControl>
                        <FormLabel className="font-normal">Poor</FormLabel>
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
              name="disabilityStatus"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Do you have disability?</FormLabel>
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
            <FormField
              control={form.control}
              name="disability"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Which disability do you have?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="blind" />
                        </FormControl>
                        <FormLabel className="font-normal">blind</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="deaf" />
                        </FormControl>
                        <FormLabel className="font-normal">deaf</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="dumb" />
                        </FormControl>
                        <FormLabel className="font-normal">dumb</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="none" />
                        </FormControl>
                        <FormLabel className="font-normal">none</FormLabel>
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
              <Button
                type="submit"
                onClick={handlePreviousStep}
                className=" text-black hover:bg-[#217873] hover:text-white bg-white"
              >
                Back
              </Button>
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

export default Health