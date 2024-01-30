"use client"
import { Input } from '@/components/ui/input';
import { Calendar } from '@/components/ui/calendar';
import { IoCalendar, IoCloudUpload, IoLocation, IoClose } from 'react-icons/io5';
import { GoClock, GoDeviceCameraVideo } from "react-icons/go";
import { MdOutlineCameraAlt } from "react-icons/md";
import { Button } from '@/components/ui/button';
import { SetStateAction, useState } from 'react';
import { Textarea } from '@/components/ui/textarea';

const eventType = [
    {id:1, title: "Private"},
    {id:2, title: "Strictly by Invitation"},
    {id:3, title: "Open"}
]


const Basic = () => {
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
    <div className="flex flex-col gap-8   ">
        <div className="flex gap-3">
            <Input placeholder='Event Name' />
            <Input  placeholder='Event Type'/>
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
    </div>
    )
}

export default Basic