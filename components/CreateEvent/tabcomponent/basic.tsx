import { Input } from '@/components/ui/input';
const Basic = () => {

    return(
    <div className="flex rounded-lg flex-col gap-8 px-9 py-8 bg-[#217873] opacity-25 text-black">
        <div className="flex gap-3">
            <Input placeholder='Event Name'/>
            <Input />
        </div>
    </div>
    )
}

export default Basic