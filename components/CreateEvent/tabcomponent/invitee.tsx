import { Input } from "@/components/ui/input";
import React, { useState, SetStateAction, ChangeEvent, KeyboardEvent } from 'react';
import { IoClose } from "react-icons/io5";
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormProvider, useForm } from 'react-hook-form'
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';

const formSchema = z.object({
    inviteEmail: z.string().email(),
    invitePhone: z.string()

})

const  Invitee:React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [enteredEmail, setEnteredEmail] = useState<string[]>([]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const handleEnterKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      // Prevent the form from being submitted
      event.preventDefault();
  
      // Add the entered hashtag to the list
      setEnteredEmail([...enteredEmail, email]);
  
      // Clear the input field in the form state
      form.reset({ inviteEmail: '' });
    }
  };

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          inviteEmail: "",
          invitePhone: "",
        },
    })

    const handleRemoveHashtag = (index: number): void => {
        const updatedHashtags = [...enteredEmail];
        updatedHashtags.splice(index, 1);
        setEnteredEmail(updatedHashtags);
    };
 
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
                <FormControl >
                    <Input
                        placeholder="Event Name"
                        type="eventName"
                        {...field}
                        onChange={(e) => {
                            field.onChange(e);  // This line is added
                            handleInputChange(e);
                        }}
                        onKeyPress={handleEnterKeyPress}
                    />
                </FormControl>
                

                {enteredEmail.length > 0 && (
                        <div className='mt-10 bg-white py-4 px-3 flex flex-wrap gap-3 rounded-lg'>
                        {enteredEmail.map((email, index) => (
                            <span key={index}className='border-2 rounded-full border-black px-3 flex'>
                                {email}
                                <button onClick={() => handleRemoveHashtag(index)}>
                                    <IoClose />
                                </button>
                                </span>
                        ))}
                        </div>
                    )}
                </FormItem>
                );
                }}
                >
            </FormField>

            <FormField 
                control={form.control} 
                name="invitePhone"  
                render={({ field }) => {
                    return (
                        <FormItem className="w-full">
                            <FormControl>
                                <Input
                                    placeholder="Event Type"
                                    type="eventName"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        );
                    }}
            >
            </FormField>
            </div>
            
        </Form>
    </FormProvider>
    )
}

export default Invitee