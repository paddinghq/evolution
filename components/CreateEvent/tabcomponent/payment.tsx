'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { RadioGroup} from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast"
import { Checkbox } from "@/components/ui/checkbox"
import { FaCcPaypal } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { FaGooglePay } from "react-icons/fa6";
import UPI from '@/public/Images/UPI.jpg';
import Image from 'next/image';
import React from "react"
 
const FormSchema = z.object({
  type: z.enum(["all", "mentions", "none"], {
    required_error: "You need to select a notification type.",
  }),
})

export function Payment() {
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
    })
   
    function onSubmit(data: z.infer<typeof FormSchema>) {
      toast({
        title: "You submitted the following values:",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      })
    }
    return (
        <div className="flex rounded-lg flex-col gap-8 px-9 py-8 text-black">
            <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-4">
              <FormLabel>Select payment methods to link with this Event:</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                    <div className="flex justify-between">
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox value="all" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Credit card/Debit card
                    </FormLabel>
                  </FormItem>
                  <RiVisaLine size={24} />
                  </div>
                  <div className="flex justify-between">
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox value="mentions" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Paypal
                    </FormLabel>
                  </FormItem>
                  <FaCcPaypal size={24}/>
                  </div>
                  <div className="flex justify-between">
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox value="none" />
                    </FormControl>
                    <FormLabel className="font-normal">Google Pay</FormLabel>
                  </FormItem>
                  <FaGooglePay size={24}/>
                  </div>
                  <div className="flex justify-between">
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox value="none" />
                    </FormControl>
                    <FormLabel className="font-normal">UPI</FormLabel>
                  </FormItem>
                  <Image src={UPI.src} alt="UPI" width={25} height={25} />
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p className="mt-5">Note: These payment methods are the one's added to your Evolution account. Add more methods to your profile to get more options here.</p>
      </form>
    </Form>
        </div>
    )
}

export default Payment