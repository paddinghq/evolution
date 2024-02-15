'use client'
import React, { useState } from 'react'
import axios from 'axios'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormProvider, useForm } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSelector, useDispatch } from 'react-redux'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { setSubmitting } from '@/app/Redux/slice/signupSlice'
import { RootState } from '@/app/Redux/slice/interface'
import { useToast } from '@/components/ui/use-toast'
import resetpassword from '../forgotten-password/userdata'
const formSchema = z
  .object({
    email: z.string().email(),
    otp: z.string().length(6),
    password: z
      .string()
      .min(3)
      .refine((value) => /[A-Z]/.test(value), {
        message: 'Password must include at least one capital letter',
      })
      .refine((value) => /\d/.test(value), {
        message: 'Password must include at least one number',
      })
      .refine((value) => /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(value), {
        message: 'Password must include at least one special character',
      }),
    confirmPassword: z.string(),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword
    },
    {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
    },
  )

const NewPassword = () => {
  const [showPassword, setShowPassword] = useState(false)
  const dispatch = useDispatch()
  const { toast } = useToast()
  const submitting = useSelector((state: RootState) => state.auth.submitting)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      otp: '',
      password: '',
      confirmPassword: '',
    },
  })
  const router = useRouter()

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    dispatch(setSubmitting(!submitting))
    const postPassword = {
      email: values.email,
      otp: values.otp,
      password: values.password,
      confirmPassword: values.confirmPassword,
    }
    try {
      const response = await resetpassword.updatePassword(postPassword)

      console.log(response)

      if (response.status === 201) {
        dispatch(setSubmitting(submitting))
        toast({
          description: response.data.message,
        })

        router.push('/signin')
        form.reset()
      } else {
        dispatch(setSubmitting(submitting))
        toast({
          variant: 'destructive',
          description: response.data.message,
        })

        form.reset()
      }
    } catch (err) {
      dispatch(setSubmitting(submitting))
      toast({
        variant: 'destructive',
        description: 'Error occured try again',
      })

      //form.reset()
    }
  }
  return (
    <div className="shadow-lg p-6 rounded-md  ">
      <div className="flex flex-col gap-8 mb-8">
        <h1 className="text-2xl font-bold text-center">Update Password</h1>
      </div>

      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="max-w-md w-full flex flex-col gap-4"
        >
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
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Please enter OTP"
                      type="text"
                      {...field}
                      className="focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md rounded-2xl px-4 py-6 border-t-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="Password"
                        type={showPassword ? 'text' : 'password'}
                        {...field}
                        className="focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md rounded-2xl px-4 py-6 border-t-white "
                      />
                      <span
                        onClick={() => setShowPassword(!showPassword)}
                        className="cursor-pointer absolute right-4 top-6"
                      >
                        {showPassword ? (
                          <AiOutlineEyeInvisible />
                        ) : (
                          <AiOutlineEye />
                        )}
                      </span>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="Confirm Password"
                        type={showPassword ? 'text' : 'password'}
                        {...field}
                        className="focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md rounded-2xl px-4 py-6 border-t-white"
                      />
                      <span
                        onClick={() => setShowPassword(!showPassword)}
                        className="cursor-pointer absolute right-4 top-6"
                      >
                        {showPassword ? (
                          <AiOutlineEyeInvisible />
                        ) : (
                          <AiOutlineEye />
                        )}
                      </span>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
          <Button
            type="submit"
            className="w-full buttoncolor hover:bg-[#217873]"
          >
            {submitting ? 'Updating Password...' : 'Update Password'}
          </Button>
        </form>
      </FormProvider>
    </div>
  )
}

export default NewPassword
