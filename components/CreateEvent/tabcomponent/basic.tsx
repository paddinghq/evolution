"use client"
import { Input } from '@/components/ui/input';
import { Calendar } from '@/components/ui/calendar';
import { IoCalendar, IoCloudUpload, IoLocation, IoClose } from 'react-icons/io5';
import { GoClock, GoDeviceCameraVideo } from "react-icons/go";
import { MdOutlineCameraAlt } from "react-icons/md";
import { Button } from '@/components/ui/button';
import { SetStateAction, useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormProvider, useForm } from 'react-hook-form'
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';

const eventType = [
    {id:1, title: "Private"},
    {id:3, title: "Open"}
]

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const formSchema = z.object({
    eventName: z.string(),
    eventType:z.string({required_error: "Enter event type"}),
    eventPrice: z.string({required_error: "Enter event price"}),
    price: z.number({required_error: "Enter event price"}),
    date: z.date({required_error: "Enter event date"}),
    location: z.string({required_error: "Enter event location"}),
    startTime: z.number({required_error: "Enter event start time"}),
    endTime: z.number(),
    category: z.string(),
    format: z.string(),
    hashtag: z.string(),
    description: z.string(),
    image: z
    .any()
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    )


})


const Basic = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            eventName: "",
            eventType: "",
            eventPrice: "",
            price: 0,
            date: new Date(),
            location: "",
            startTime: 0,
            endTime: 0,
            category: "",
            format: "",
            hashtag:"",
            description: "",
            image: File,

        }
    })

    


    const [hashtag, setHashtag] = useState('');
    const [enteredHashtags, setEnteredHashtags] = useState<string[]>([]);

    const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setHashtag(event.target.value);
    };
    
    const handleEnterKeyPress = (event: { key: string; preventDefault: () => void; }) => {
        if (event.key === 'Enter') {
            // Prevent the form from being submitted
            event.preventDefault();

            // Add the entered hashtag to the list
            setEnteredHashtags([...enteredHashtags, hashtag]);

            // Clear the input field
            setHashtag('');
        }
    };

    const handleRemoveHashtag = (index: number): void => {
    const updatedHashtags = [...enteredHashtags];
    updatedHashtags.splice(index, 1);
    setEnteredHashtags(updatedHashtags);
    };

   

    return(
        <FormProvider {...form}>
            <Form className="flex flex-col gap-4">
                
                <div className="flex justify-between gap-3">
                <FormField 
                    control={form.control} 
                    name="eventName"  
                    render={({ field }) => {
                        return (
                            <FormItem className="w-full">
                                <FormControl >
                                    <Input
                                        placeholder="Event Name"
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
                <FormField 
                    control={form.control} 
                    name="eventType"  
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
                <div className="flex justify-between gap-3">
                <FormField 
                    control={form.control} 
                    name="eventName"  
                    render={({ field }) => {
                        return (
                            <FormItem className="w-full">
                                <FormControl >
                                    <Input
                                        placeholder="Event Name"
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
                <FormField 
                    control={form.control} 
                    name="eventType"  
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
                <div className="flex justify-between gap-3">
                <FormField 
                    control={form.control} 
                    name="eventName"  
                    render={({ field }) => {
                        return (
                            <FormItem className="w-full">
                                <FormControl >
                                    <Input
                                        placeholder="Event Name"
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
                <FormField 
                    control={form.control} 
                    name="eventType"  
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
                <div className="flex justify-between gap-3">
                <FormField 
                    control={form.control} 
                    name="eventName"  
                    render={({ field }) => {
                        return (
                            <FormItem className="w-full">
                                <FormControl >
                                    <Input
                                        placeholder="Event Name"
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
                <FormField 
                    control={form.control} 
                    name="eventType"  
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
                <div className="flex justify-between gap-3">
                <FormField 
                    control={form.control} 
                    name="eventName"  
                    render={({ field }) => {
                        return (
                            <FormItem className="w-full">
                                <FormControl >
                                    <Input
                                        placeholder="Event Name"
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
                <div className="flex justify-between gap-3">
                <FormField 
                    control={form.control} 
                    name="eventName"  
                    render={({ field }) => {
                        return (
                            <FormItem className="w-full">
                                <FormControl >
                                    <Input
                                        placeholder="Event Name"
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
                <div className="flex justify-between gap-3">
                <FormField 
                    control={form.control} 
                    name="eventName"  
                    render={({ field }) => {
                        return (
                            <FormItem className="w-full">
                                <FormControl >
                                    <Textarea
                                        placeholder="Event Description"
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
                <div className="flex justify-between gap-3">
                <FormField 
                    control={form.control} 
                    name="eventName"  
                    render={({ field }) => {
                        return (
                            <FormItem className="w-full">
                                <FormControl >
                                    <Input
                                        placeholder="Event Hashtag"
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
                <div className="border-8 border-dashed rounded-2xl p-10 border-spacing-5 border-white">
            <div className='flex flex-col justify-center items-center gap-3 '>
                <div className="flex gap-2">
                    <MdOutlineCameraAlt size={36} className='border-r-4 border-black ml-3' />

                    <GoDeviceCameraVideo size={36}/>

                </div>
                <h1>Drag and drop a file</h1>

                <p>Drag and drop or select an image or video file(s).</p>

                <Button variant="outline" className='flex gap-3 bg-none'>
                    <IoCloudUpload size={24}/>
                    Upload media
                </Button>
            </div>
        </div>
            </Form>
        </FormProvider>
    )
}

export default Basic



{/* <div className="flex flex-col gap-8   ">
        <div className="flex gap-3">
            <Input placeholder='Event Name' />
            <select></select>
        </div>
        <div className="flex gap-3">
            <Input placeholder='Priced event'/>
            <Input  placeholder='Price (₦)'/>
        </div>
        <div className="flex gap-3">
            <div className="relative flex items-center w-full">
                    <Input type='search' className="pr-10 pl-3" placeholder='Location'/>
    
                    <IoCalendar
                        size={24}
                        className="absolute right-3 text-[#7a7a7a]"
                    />
            </div>
            <div className="relative flex items-center w-full">
                <Input type='search' className="pr-10 pl-3" placeholder='Location'/>

                <IoLocation
                    size={24}
                    className="absolute right-3 text-[#7a7a7a]"
                />
            </div>
                
        </div>
        <div className="flex gap-3">
            <div className="relative flex items-center w-full">
                    <Input type='search' className="pr-10 pl-3" placeholder='Start time'/>
    
                    <GoClock size={24}
                        className="absolute right-3 text-[#7a7a7a]"
                    />
            </div>
            <div className="relative flex items-center w-full">
                <Input type='search' className="pr-10 pl-3" placeholder='End time'/>

                <GoClock size={24}
                    className="absolute right-3 text-[#7a7a7a]"
                />
            </div>
                
        </div>
        <div className="flex gap-3">
            <Input placeholder='Event Category'/>
           
        </div>
        <div className="flex gap-3">
            <Input placeholder='Event Format'/>
        </div>
        <div className="">
            <Textarea placeholder="Event Description" />
        </div>
        <div className="">
            <>
                <Input placeholder='Event Hashtag'
                value={hashtag}
                onChange={handleInputChange}
                onKeyPress={handleEnterKeyPress}
                />

                {enteredHashtags.length > 0 && (
                    <div className='mt-5 bg-white py-4 px-3 flex flex-wrap gap-3 rounded-lg'>
                    {enteredHashtags.map((enteredHashtag, index) => (
                        <span key={index} className='border-2 rounded-full border-black px-3 flex'>{enteredHashtag}
                            <button onClick={() => handleRemoveHashtag(index)}>
                                <IoClose />
                            </button>
                        </span>
                    ))}
                    </div>
                )}
            </>
            
            
        </div>
       

        <div className="border-8 border-dashed rounded-2xl p-10 border-spacing-5 border-white">
            <div className='flex flex-col justify-center items-center gap-3 '>
                <div className="flex gap-2">
                    <MdOutlineCameraAlt size={36} className='border-r-4 border-black ml-3' />

                    <GoDeviceCameraVideo size={36}/>

                </div>
                <h1>Drag and drop a file</h1>

                <p>Drag and drop or select an image or video file(s).</p>

                <Button variant="outline" className='flex gap-3 bg-none'>
                    <IoCloudUpload size={24}/>
                    Upload media
                </Button>
            </div>
        </div>
    </div> */}