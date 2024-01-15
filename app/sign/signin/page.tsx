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
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import Link from 'next/link'

const formSchema = z.object({
  emailAddress: z.string().email(),
  password: z.string().min(3),
})

const SignIn = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: '',
    },
  })
  const handleSubmit = () => {}

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
                      className="shadow-md rounded-2xl px-4 py-6 border-t-white"
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
                    <Input
                      placeholder="Password"
                      type="password"
                      {...field}
                      className="shadow-md rounded-2xl px-4 py-6 border-t-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
          <div className="flex gap-24">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>
            <div>
              <Link href="/">
                <p className="text-sm font-medium text-[#217873]">
                  Forgotten password
                </p>
              </Link>
            </div>
          </div>
          <Button
            type="submit"
            className="w-full buttoncolor hover:bg-[#217873]"
          >
            <Link href="/">Sign in</Link>
          </Button>
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
          <Link href="/sign/signup" className="linktext ml-1">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignIn
