import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { FiPlus } from "react-icons/fi";

const formSchema = z.object({
    eventChecklist: z.string(),
    
})




const  Event:React.FC = () => {
    const [checkList, setCheckList] = useState<string>("")

    const [enteredCheckList, setEnteredCheckList] = useState<string[]>([])
    

    const handleCheckList = (event: ChangeEvent<HTMLInputElement>): void => {
        setCheckList(event.target.value)
    }
    console.log(checkList)

    const handleAdd = (): void =>  {

        setEnteredCheckList([...enteredCheckList, checkList])

        form.reset({ eventChecklist: '' });
    }

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            eventChecklist: "",
        },
    })

    return (
        <FormProvider {...form}>
            
            <FormField
                control={form.control} 
                name="eventChecklist"  
                render={({ field }) => {
                    return (
                        <FormItem className="w-full">
                            
                            <FormControl >
                                <Input
                                    placeholder="Checklist name"
                                    type="eventName"
                                    {...field}
                                    onChange={(e) => {
                                        field.onChange(e);  // This line is added
                                        handleCheckList(e);
                                    }}
                                    
                                />
                            </FormControl>
                    

                            
                        </FormItem>
                    );
                }}
                    >
            </FormField>
            <div className="flex justify-end gap-3 mt-5">
                <Button variant="secondary" className="px-10 border-2 border-solid" onClick={(e) => handleAdd() }>Add</Button>
            </div>

            {enteredCheckList.length > 0 && (
                            <div className='mt-10 bg-white py-4 px-3 rounded-lg '>
                                {enteredCheckList.map((email, index) => (
                                    <div className="flex gap-3 items-center">
                                        <h3 key={index}className='font-bold'>
                                            {email}
                                            
                                        </h3>
                                        <div className="">
                                        <FiPlus size={18}/>
                                        </div>
                                    </div>
                                ))}
                                
                            </div>
                        )}
    </FormProvider>
    )
}

export default Event