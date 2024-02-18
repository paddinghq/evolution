'use client'
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
import { useRouter } from 'next/navigation'
import { useSelector, useDispatch } from 'react-redux'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { setSubmitting,setLoading, setShowPassword } from '@/app/Redux/slice/signupSlice'
import { RootState } from '@/app/Redux/slice/interface'
import { useToast } from '@/components/ui/use-toast'
import { signUp } from './signUpLogic'
import Loader from '@/components/Loader';
import { useState } from 'react'

const formSchema = z.object({
  name: z.string().min(3),
  phone: z.string().max(11),
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
  terms: z.boolean().refine((value) => value, {
    message: 'You must agree to terms and condition',
  }),
})

const SignUp = () => {
  const [clicked, SetClicked] = useState<boolean>(false);
  const dispatch = useDispatch()
  const { toast } = useToast()


  const loading = useSelector((state: RootState) => state.auth.loading)
  const password = useSelector((state: RootState) => state.auth.showPassword)


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      emailAddress: '',
      password: '',
      terms: false,
    },
  })
  const router = useRouter()

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    SetClicked(true);
    console.log(SetClicked);
    dispatch(setSubmitting(true))
    dispatch(setLoading(true));
    
    try {
      const response = await signUp({
          fullName: values.name,
          email: values.emailAddress,
          phone: values.phone,
          password: values.password,
      })

      if (response.status === 201) {
        dispatch(setSubmitting(false))
        toast({
          description: response.data.message,
        })
        localStorage.setItem('userEmail', response.data.user.email)
        setTimeout(() => {
          router.push('/otp')
        }, 2000);
        
        form.reset()
      } else {
        dispatch(setSubmitting(false))
        toast({
          variant: 'destructive',
          description: response.data.message,
        })
        setTimeout(() => {
          window.location.reload()
        }, 2000);
        form.reset()
      }
    } catch (err) {
      toast({
        variant: 'destructive',
        description: 'Error occured try again',
      })
      window.location.reload()
      form.reset()
    }
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
            name="phone"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Phone number"
                      type="phone"
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
                        type={password ? 'text' : 'password'}
                        {...field}
                        className="focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md rounded-2xl px-4 py-6 border-t-white"
                      />
                      <span
                        onClick={() => dispatch(setShowPassword(!password))}
                        className="cursor-pointer absolute right-4 top-6"
                      >
                        {password ? (
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
          <div className="mt-5">
            {!loading && (
                <Button
                  type="submit"
                  className="w-full buttoncolor hover:bg-[#217873]"
                  disabled={clicked}
                >
                  SignUp
                </Button>
              )}
              {loading && (
                <Loader />
              )}
          </div>

          
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
          <Link href="/signin" className="linktext ml-1 font-bold px-3 py-2 hover:bg-[#B1761f] hover:text-white">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
