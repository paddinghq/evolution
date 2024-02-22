'use client'
import React, { useEffect, useState } from 'react'
import { Oval } from 'react-loader-spinner'
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
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'
import { OTPGet, OTPLogic } from './otpLogic'
import { setLoading, setSubmitting } from '@/app/Redux/slice/signupSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/Redux/slice/interface'
import Loader from '@/components/Loader'

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
  const dispatch = useDispatch()
  const router = useRouter()

  const [userEmail, setUserEmail] = useState('')
  const loading = useSelector((state: RootState) => state.auth.loading)

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
      const storedEmail = localStorage.getItem('userEmail')

      if (storedEmail) {
        setUserEmail(storedEmail)
      }
    }
  }, [])

  dispatch(setLoading(false))

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    dispatch(setSubmitting(true))
    dispatch(setLoading(true))

    const OtpDigit = `${values.otp1}${values.otp2}${values.otp3}${values.otp4}${values.otp5}${values.otp6}`

    try {
      const response = await OTPLogic({
        email: userEmail,
        otp: OtpDigit,
      })

      if (response.status === 200) {
        localStorage.removeItem('userEmail')
        dispatch(setLoading(false))
        toast({
          description: response.data.message,
        })
        setTimeout(() => {
          router.push('/signin')
        }, 3000)
        form.reset()
      } else {
        dispatch(setLoading(false))
        toast({
          variant: 'destructive',
          description: response.data.message,
        })
        window.location.reload()
        form.reset()
      }
    } catch (err) {
      dispatch(setLoading(false))
      toast({
        variant: 'destructive',
        description: 'Error occured try again',
      })
      window.location.reload()
      form.reset()
    }
  }

  const requestOtp = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
		
		try {
      const response = await OTPGet({
        email: userEmail,
      })

      if (response.status === 200) {
        toast({
          description: response.data.message,
        })
      } else {
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
    }
	};

  return (
    <div className="shadow-lg p-6 rounded-md ">
      <div className="flex flex-col gap-8 mb-8">
        <h1 className="text-lg font-bold text-center">
          {' '}
          Enter your verification code sent to your email
          <br />
          <span className="text-[#217873] text-sm">{userEmail}</span>
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
                        maxLength={1}
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
                        maxLength={1}
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
                        maxLength={1}
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
                        maxLength={1}
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
                        maxLength={1}
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
                        maxLength={1}
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
        <p className='text-center mt-5'>
          If you didn't receive code!{" "}
          <span className="text-primary cursor-pointer font-semibold" onClick={requestOtp}>
            Resend
          </span>
				</p>
        <div className="flex justify-center mt-5">
          
            {!loading && (
              <Button
                type="submit"
                className="w-full buttoncolor hover:bg-[#217873]"
                onClick={form.handleSubmit(handleSubmit)}
              >
                Verify Otp
              </Button>
            )}
            {loading && <Loader />}
          
        </div>
      </FormProvider>
    </div>
  )
}

export default OTP
