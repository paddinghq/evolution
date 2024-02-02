import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent, SetStateAction, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { FiPlus } from "react-icons/fi";

const formSchema = z.object({
    eventChecklist: z.string(),
    
})




const  Event:React.FC = () => {
    const [showInput, setShowInput] = useState<boolean>(false);
    const [checkList, setCheckList] = useState<string>("")
    const [showInputIndex, setShowInputIndex] = useState<null | number>(null);

    const [category, setcategory] = useState<string[]>([])
    

    const handleCheckList = (event: ChangeEvent<HTMLInputElement>): void => {
        setCheckList(event.target.value)
    }
    

    const handleAdd = (): void =>  {

        setcategory([...category, checkList])

        form.reset({ eventChecklist: '' });
    }

    const handleIconClick = (index: SetStateAction<null | number>) => {
        setShowInputIndex(index);
      };

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

            {category.length > 0 && (
                            <div className='mt-10 bg-white py-4 px-3 rounded-lg '>
                                {category.map((event, index) => (
                                    <div className="flex gap-3 items-center">
                                        <h3 key={index}className='font-bold capitalize'>
                                            {event}
                                            
                                        </h3>
                                        <div className='flex items-center'>
                                            {showInputIndex === index ? (
                                            <>
                                                <Input
                                                type='text'
                                                // value={inputValue}
                                                // onChange={handleInputChange}
                                                className=''
                                                />
                                                <button>Add</button>
                                            </>
                                            ) : (
                                            <div onClick={() => handleIconClick(index)} className='cursor-pointer'>
                                                <FiPlus size={18} />
                                            </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                                
                            </div>
                        )}
    </FormProvider>
    )
}

export default Event