import { Input } from '@/components/ui/input'
import React, {
  useState,
  SetStateAction,
  ChangeEvent,
  KeyboardEvent,
} from 'react'
import { IoClose } from 'react-icons/io5'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormProvider, useForm } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { EventFormData } from './types'

const formSchema = z.object({
  inviteEmail: z.string().email(),
  invitePhone: z.string(),
})
type Props = {
  formData: EventFormData
  setFormData: React.Dispatch<SetStateAction<EventFormData>>
}
const Invitee: React.FC<Props> = ({ formData, setFormData }) => {
  const [email, setEmail] = useState<string>('')
  const [enteredEmail, setEnteredEmail] = useState<string[]>([])

  const [phone, setPhone] = useState<string>('')
  const [enteredPhone, setEnteredPhone] = useState<string[]>([])

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value)
  }
  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPhone(event.target.value)
  }

  const handleEnterKeyPress = (
    event: KeyboardEvent<HTMLInputElement>,
  ): void => {
    if (event.key === 'Enter') {
      event.preventDefault()

      setEnteredEmail([...enteredEmail, email])

      form.reset({ inviteEmail: '' })
    }
  }

  const handleEnterPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault()

      setEnteredPhone([...enteredPhone, phone])

      form.reset({ invitePhone: '' })
    }
  }

  const handleRemoveHashtag = (index: number): void => {
    const updatedHashtags = [...enteredEmail]
    updatedHashtags.splice(index, 1)
    setEnteredEmail(updatedHashtags)
  }
  const handleRemovePhone = (index: number): void => {
    const updatedHashtags = [...enteredPhone]
    updatedHashtags.splice(index, 1)
    setEnteredPhone(updatedHashtags)
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inviteEmail: '',
      invitePhone: '',
    },
  })

  return (
    <FormProvider {...form}>
      <Form className="flex flex-col gap-4">
        <div className="flex justify-between gap-3">
          <FormField
            control={form.control}
            name="inviteEmail"
            render={({ field }) => {
              return (
                <FormItem className="w-full">
                  <FormLabel>
                    <h1>Invite via Email</h1>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Event Name"
                      type="eventName"
                      // value={formData.inviteName}
                      {...field}
                      onChange={(e) => {
                        field.onChange(e) // This line is added
                        handleInputChange(e)
                      }}
                      onKeyPress={handleEnterKeyPress}
                    />
                  </FormControl>

                  {enteredEmail.length > 0 && (
                    <div className="mt-10 bg-white py-4 px-3 flex flex-wrap gap-3 rounded-lg">
                      {enteredEmail.map((email, index) => (
                        <span
                          key={index}
                          className="border-2 rounded-full border-black px-3 flex"
                        >
                          {email}
                          <button onClick={() => handleRemoveHashtag(index)}>
                            <IoClose />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </FormItem>
              )
            }}
          ></FormField>

          <FormField
            control={form.control}
            name="invitePhone"
            render={({ field }) => {
              return (
                <FormItem className="w-full">
                  <FormLabel>
                    <h1>Invite via Phone</h1>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Phone number"
                      type="eventName"
                      value={formData.inviteNumber}
                      {...field}
                      onChange={(e) => {
                        field.onChange(e) // This line is added
                        handlePhoneChange(e)
                      }}
                      onKeyPress={handleEnterPress}
                    />
                  </FormControl>

                  {enteredPhone.length > 0 && (
                    <div className="mt-10 bg-white py-4 px-3 flex flex-wrap gap-3 rounded-lg">
                      {enteredPhone.map((phone, index) => (
                        <span
                          key={index}
                          className="border-2 rounded-full border-black px-3 flex"
                        >
                          {phone}
                          <button onClick={() => handleRemovePhone(index)}>
                            <IoClose />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                  <FormMessage />
                </FormItem>
              )
            }}
          ></FormField>
        </div>
      </Form>
    </FormProvider>
  )
}

export default Invitee
