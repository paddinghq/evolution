'use client'
import React, { useEffect, useState } from 'react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'

const formSchema = z.object({
  otp1: z.string().max(1),
  otp2: z.string().max(1),
  otp3: z.string().max(1),
  otp4: z.string().max(1),
  otp5: z.string().max(1),
  otp6: z.string().max(1),
})

const OTP = () => {
  const { toast } = useToast()
  const router = useRouter()
  const [userEmail, setUserEmail] = useState('');
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp1: '',
      otp2: '',
      otp3: '',
      otp4: '',
      otp5: '',
      otp6: '',
    },
  })

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedEmail = localStorage.getItem('userEmail');

      if (storedEmail) {
        setUserEmail(storedEmail);
      }
    }
  }, []);

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    const Otp = `${values.otp1}${values.otp2}${values.otp3}${values.otp4}${values.otp5}${values.otp6}`

    try {
      const response = await axios.post(
        'https://evolution-stagin.onrender.com/api/v1/auth/verify-otp',
        {
          email: userEmail,
          otp: Otp,
        },
      )
      console.log(response)

      if (response.status === 200) {
        localStorage.removeItem('userEmail')
        toast({
          description: response.data.message,
        })
        router.push('/signin')
        form.reset()
      } else {
        toast({
          variant: 'destructive',
          description: response.data.message,
        })
        form.reset()
      }
    } catch (err) {
      toast({
        variant: 'destructive',
        description: 'Error occured try again',
      })
      form.reset()
    }
  }

  return (
    <div className="shadow-lg p-6 rounded-md ">
      <div className="flex flex-col gap-8 mb-8">
        <h1 className="text-2xl font-bold">
          {' '}
          Enter your verification code sent to your email
          {userEmail}
        </h1>
      </div>

      <FormProvider {...form}>
        <form
        //   onSubmit={form.handleSubmit(handleSubmit)}
        >
          <div className="max-w-md w-full flex gap-4">
            <FormField
              control={form.control}
              name="otp1"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        className="focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md rounded-2xl px-4 py-6 border-t-white text-center"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
            <FormField
              control={form.control}
              name="otp2"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        className="focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md rounded-2xl px-4 py-6 border-t-white text-center"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
            <FormField
              control={form.control}
              name="otp3"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        className="focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md rounded-2xl px-4 py-6 border-t-white text-center"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
            <FormField
              control={form.control}
              name="otp4"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        className="focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md rounded-2xl px-4 py-6 border-t-white text-center"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
            <FormField
              control={form.control}
              name="otp5"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        className="focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md rounded-2xl px-4 py-6 border-t-white text-center"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
            <FormField
              control={form.control}
              name="otp6"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        className="focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md rounded-2xl px-4 py-6 border-t-white text-center"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
          </div>
        </form>
        <div className="flex justify-center mt-5">
          <Button
            type="submit"
            className="buttoncolor hover:bg-[#217873]"
            onClick={form.handleSubmit(handleSubmit)}
          >
            Verify Account
          </Button>
        </div>
      </FormProvider>
    </div>
  )
}

export default OTP
