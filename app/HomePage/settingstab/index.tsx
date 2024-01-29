'use client'
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Switch } from '@/components/ui/switch'
import { CiCircleInfo } from 'react-icons/ci'
import Link from 'next/link'

const FormSchema = z.object({
  event_notifications: z.boolean().default(false).optional(),
  chat_notifications: z.boolean().default(false).optional(),
})

const SettingsTab = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      event_notifications: false,
      chat_notifications: false,
    },
  })

  const handleSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log(values)
  }
  return (
    <div className="mt-6">
      <div className="bg-[#21787333] p-8 rounded-2xl flex flex-col gap-10">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              control={form.control}
              name="event_notifications"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg  p-3 ">
                  <div className=" flex items-center gap-6">
                    <FormLabel className="text-lg">
                      Get event Notifications
                    </FormLabel>
                    <FormControl className="">
                      <Switch
                        className=""
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="chat_notifications"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg  p-3 ">
                  <div className=" flex items-center gap-6">
                    <FormLabel className="text-lg">
                      Get chat Notifications
                    </FormLabel>
                    <FormControl className="">
                      <Switch
                        className=""
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
          </form>
        </FormProvider>
        <div className="flex gap-6 p-3">
          <div className="flex gap-2 text-lg font-semibold items-center">
            <h2> Show me events in the specified radius</h2>
            <Link href="">
              <CiCircleInfo />
            </Link>
          </div>
          <div className="bg-white w-52 rounded-md h-10"></div>
        </div>
      </div>
    </div>
  )
}

export default SettingsTab
