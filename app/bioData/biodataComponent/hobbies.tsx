'use client'
import { IoChevronBack } from 'react-icons/io5'
import React from 'react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useSelector } from 'react-redux'
import { Checkbox } from '@/components/ui/checkbox'
// import Loader from '@/components/Loader'

interface HobbiesProps {
  handleSubmit: (stepValues: any) => void
  handlePreviousStep: any
}

const hobies = [
  {
    name: 'running',
    value: 'running',
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

const formSchema = z.object({
  location: z.enum(['nigeria', 'togo', 'ivorycoast'], {
    required_error: 'A location is required.',
  }),
  hobies: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one item.',
  }),
})

const Hobbies: React.FC<HobbiesProps> = ({
  handlePreviousStep,
  handleSubmit,
}) => {
  const bioData = useSelector((state: any) => state.updateProfile.editbioData)
  const loading = useSelector((state: any) => state.auth.loading)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...bioData,
      hobies: [],
    },
  })
  const handleSubmitData = (values: z.infer<typeof formSchema>) => {
    const payLoad = {
      dob: bioData.dob,
      gender: bioData.gender,
      maritalStatus: bioData.maritalStatus,
      kid: bioData.kids,
      health: bioData.health,
      disability: bioData.disability,
      location: values.location,
      hobbies: values.hobies,
    }
    handleSubmit(payLoad)
  }

  return (
    <div className="container py-32">
      <div className="shadow-lg cursor-pointer w-fit p-2 rounded-full">
        <IoChevronBack size={24} />
      </div>

      <div className="flex justify-around shadow-lg border-l-2 border-r-2 mt-10  ml-10 px-14 py-5">
        <div>
          <h5 className="text-2xl font-bold mb-1">
            Good job! You’re just one step away
          </h5>
          <p className=" text-sm font-semibold">
            We want to serve you based on where you are located and what you
            like...
          </p>
        </div>

        <FormProvider {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmitData)}
            className="max-w-md w-full flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Select your location</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
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

            <FormField
              control={form.control}
              name="hobies"
              render={({ field }) => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">Hobbies</FormLabel>
                    <FormDescription>
                      Tell us about your hobbies
                    </FormDescription>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    {hobies.map((item) => (
                      <FormField
                        key={item.name}
                        control={form.control}
                        name="hobies"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.name}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item.name)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          item.name,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== item.name,
                                          ),
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">
                                {item.name}
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className=" flex justify-end gap-3 mt-4">
              <Button
                type="submit"
                onClick={handlePreviousStep}
                className=" text-black hover:bg-[#217873] hover:text-white bg-white"
              >
                Back
              </Button>
              <div className="">
            {!loading && (
              <Button
                type="submit"
                className=" bg-[#217873] hover:bg-[#217873] px-8"
              >
                Submit
              </Button>
            )}
            {loading && "Loading...."}
          </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}

export default Hobbies
