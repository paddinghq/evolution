'use client'
import React, { useState } from 'react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
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
import { useSelector, useDispatch } from 'react-redux'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { signIn } from './api'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'
import { setLoading, setSubmitting, setUserDetails } from '@/app/Redux/slice/signupSlice'
import { RootState } from '@/app/Redux/slice/interface'
import Loader from '@/components/Loader'

const formSchema = z.object({
  emailAddress: z.string().email(),
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
  remember: z.boolean().default(false).optional(),
})

const SignIn = () => {

  const dispatch = useDispatch()
  const { toast } = useToast()
  const router = useRouter()

  const [showPassword, setShowPassword] = useState(false)
  const loading = useSelector((state: RootState) => state.auth.loading)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: '',
      password: '',
      remember: false,
    },
  })

 
  
  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    dispatch(setSubmitting(true))
    dispatch(setLoading(true))

    try {
      const response = await signIn({
        email: values.emailAddress,
        password: values.password,
      })

      if (response.status === 200) {
        dispatch(setSubmitting(false))
        toast({
          description: response.data.message,
        })
        dispatch(setUserDetails(response.data.user))

        if (response.data.user.registrationCompleted === false) {
          router.replace('/bioData')
        } else {
          router.replace('/HomePage')
        }

        form.reset()
      } else {
        dispatch(setSubmitting(false))
        toast({
          variant: 'destructive',
          description: response.data.message,
        })
        // router.push("/")
        form.reset()
      }
    } catch (err) {
      toast({
        variant: 'destructive',
        description: 'Error occured try again',
      })
      // router.push("/")
      form.reset()
    }
  }

  return (
    <div className="shadow-lg p-6 rounded-md ">
      <div className="flex flex-col gap-8 mb-8">
        <h1 className="text-2xl font-bold">Welcome back!</h1>
        <p className="text-sm font-semibold">
          Enter your credentials to access your account
        </p>
      </div>

      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="max-w-md w-full flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="emailAddress"
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
          <div className="flex items-center gap-24">
            <FormField
              control={form.control}
              name="remember"
              render={({ field }) => (
                <FormItem className=" flex items-center  gap-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-3 pb-2 text-sm font-medium text-slate-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    <FormLabel className="">Remember me</FormLabel>
                  </div>
                </FormItem>
              )}
            />
            <div>
              <Link href="/forgotten-password">
                <p className="text-sm font-medium text-[#217873]">
                  Forgotten password
                </p>
              </Link>
            </div>
          </div>
          
          <div className="mt-5">
            {!loading && (
              <Button
                type="submit"
                className="w-full buttoncolor hover:bg-[#217873]"
              >
                SignIn
              </Button>
            )}
            {loading && <Loader />}
          </div>
        </form>
      </FormProvider>
      <div className="flex items-center mt-8">
        <hr className="flex-grow border-t-2 border-slate-300" />
        <span className="px-2 bg-white text-slate-900">or</span>
        <hr className="flex-grow border-t-2 border-slate-300" />
      </div>
      <div className="flex justify-between mt-8">
        <div>
          <Button className="bg-white  hover:bg-white text-xs font-semibold text-black border-solid border-2 border-slate-300">
            <Link href="/">Sign in with Google</Link>
          </Button>
        </div>
        <div>
          <Button className="bg-white hover:bg-white text-xs font-semibold text-black border-solid border-2 border-slate-300">
            <Link href="/">Sign in with Apple</Link>{' '}
          </Button>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <p className="text-xs font-semibold">
          Dont have an account?{' '}
          <Link href="/signup" className="linktext ml-1">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignIn
