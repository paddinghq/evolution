import { Input } from '@/components/ui/input';
import { Calendar } from '@/components/ui/calendar';
import { IoCalendar } from 'react-icons/io5';

const eventType = [
    {id:1, title: "Private"},
    {id:2, title: "Strictly by Invitation"},
    {id:3, title: "Open"}
]


const Basic = () => {

   

    return(
    <div className="flex rounded-lg flex-col gap-8 px-9 py-8 bg-[#217873] opacity-25 text-black">
        <div className="flex gap-3">
            <Input placeholder='Event Name'/>
            <Input  placeholder='Event Type'/>
        </div>
        <div className="flex gap-3">
            <Input placeholder='Event Name'/>
            <Input  placeholder='Event Type'/>
        </div>
        <div className="flex gap-3">
            <div className="relative flex justify-center items-center">
            
			    <Input type='search' className=" px-10 rounded-full" placeholder='Event Date'/>

                <IoCalendar
                size={24}
                className="absolute  md:left-3 sm:hidden md:block text-[#7a7a7a]"
                />
            
            </div>
            <Input  placeholder='Event Type'/>
        </div>
        <div className="flex gap-3">
            <Input placeholder='Event Name'/>
            <Input  placeholder='Event Type'/>
        </div>
        <div className="flex gap-3">
            <Input placeholder='Event Name'/>
           
        </div>
        <div className="flex gap-3">
            <Input placeholder='Event Name'/>
        </div>
    </div>
    )
}

export default Basic