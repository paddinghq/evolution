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
  FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import Link from 'next/link'

const formSchema = z.object({
  name: z.string().min(3),
  emailAddress: z.string().email(),
  password: z.string().min(3),
  terms: z.boolean().default(false).optional(),
})

const SignUp = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      emailAddress: '',
      password: '',
      terms: false,
    },
  })
  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }
  return (
    <div className="shadow-lg p-6 rounded-md ">
      <div className="flex flex-col gap-8 mb-8">
        <h1 className="text-2xl font-bold">Get started now</h1>
      </div>

      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="max-w-md w-full flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Name"
                      type="name"
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
          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className=" flex items-center  gap-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-3 pb-2 text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  <FormLabel>
                    I agree to the{' '}
                    <Link href="" className="underline decoration-solid">
                      terms and conditions
                    </Link>
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full buttoncolor hover:bg-[#217873]"
          >
            Sign up
          </Button>
        </form>
      </FormProvider>
      <div className="flex items-center mt-8">
        <hr className="flex-grow border-t-2 border-slate-300" />
        <span className="px-2 bg-white text-slate-900">or</span>
        <hr className="flex-grow border-t-2 border-slate-300" />
      </div>
      <div className="flex gap-16 mt-8">
        <div>
          <Button className="bg-white hover:bg-white text-xs font-semibold text-black border-solid border-2 border-slate-300">
            <Link href="/">Sign up with Google</Link>
          </Button>
        </div>
        <div>
          <Button className="bg-white hover:bg-white text-xs font-semibold text-black border-solid border-2 border-slate-300">
            <Link href="/">Sign up with Apple</Link>
          </Button>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <p className="text-xs font-semibold">
          Have an account?{' '}
          <Link href="/signin" className="linktext ml-1 font-bold">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
