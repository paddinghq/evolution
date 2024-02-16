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
import { setSubmitting } from '@/app/Redux/slice/signupSlice'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/app/Redux/slice/interface'
import { useRouter } from 'next/navigation'
import resetpassword from './userdata'

const formSchema = z.object({
  email: z.string().email(),
})

const ForgottenPassword = () => {
  const dispatch = useDispatch()
  const { toast } = useToast()
  const router = useRouter()
  const submitting = useSelector((state: RootState) => state.auth.submitting)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  })

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    dispatch(setSubmitting(!submitting))

    const postEmail = { email: values.email }
    try {
      const response = await resetpassword.sendEmail(postEmail)

      if (response.status === 200) {
        dispatch(setSubmitting(submitting))

        toast({
          description: response.data.message,
        })

        setTimeout(() => {
          router.push('/new-password')
        }, 2000)
      } else {
        dispatch(setSubmitting(submitting))

        toast({
          variant: 'destructive',
          description: response.data.message,
        })
      }
    } catch (err) {
      toast({
        variant: 'destructive',
        description: 'Error occured try again',
      })
      dispatch(setSubmitting(submitting))
    }
  }

  return (
    <div className="shadow-lg p-6 rounded-md ">
      <div className="flex flex-col gap-8 mb-8">
        <h1 className="text-2xl font-bold text-center ">
          {' '}
          Please enter your Email address
        </h1>
      </div>

      <FormProvider {...form}>
        <form
        //   onSubmit={form.handleSubmit(handleSubmit)}
        >
          <div className="max-w-md w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Email address"
                        type="email"
                        {...field}
                        className="focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md rounded-2xl px-4 py-6 border-t-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
          </div>
        </form>
        <div className="flex justify-center  mt-5">
          <Button
            type="submit"
            className="buttoncolor hover:bg-[#217873] w-1/2"
            onClick={form.handleSubmit(handleSubmit)}
          >
            {submitting ? 'Sending OTP...' : 'Send OTP'}
          </Button>
        </div>
      </FormProvider>
    </div>
  )
}

export default ForgottenPassword
