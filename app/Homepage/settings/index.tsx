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

const FormSchema = z.object({
  event_notifications: z.boolean().default(false).optional(),
  chat_notifications: z.boolean().default(false).optional(),
})

const Settings = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      event_notifications: true,
      chat_notifications: true,
    },
  })

  const handleSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log(values)
  }
  return (
    <div className="p-28">
      Settings
      <div className="bg-[#21787333] p-8 rounded-2xl flex flex-col gap-10">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              control={form.control}
              name="event_notifications"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg  p-3 ">
                  <div className=" flex items-center gap-6">
                    <FormLabel className='text-lg'>Get event Notifications</FormLabel>
                    <FormControl className=''>
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
                    <FormLabel className='text-lg'>Get chat Notifications</FormLabel>
                    <FormControl className=''>
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
      </div>
      <div>
        <footer></footer>
      </div>
    </div>
  )
}

export default Settings
