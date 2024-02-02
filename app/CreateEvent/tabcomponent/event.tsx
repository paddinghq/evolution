import { Button } from '@/components/ui/button'
import { FormField, FormItem, FormControl } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  ChangeEvent,
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  SetStateAction,
  useState,
} from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { FiPlus } from 'react-icons/fi'
import { Checkbox } from '@/components/ui/checkbox'

const formSchema = z.object({
  eventChecklist: z.string(),
})

interface EventFormValues {
  eventChecklist: string
}

const Event: React.FC = () => {
  const [showInput, setShowInput] = useState<boolean>(false)
  const [checkList, setCheckList] = useState<string>('')
  const [showInputIndex, setShowInputIndex] = useState<null | number>(null)

  const [category, setcategory] = useState<string[]>([])
  const [subcategories, setSubcategories] = useState<string[][]>([])
  const [subcategoryInputValue, setSubcategoryInputValue] = useState('')

  const handleCheckList = (event: ChangeEvent<HTMLInputElement>): void => {
    setCheckList(event.target.value)
  }

  const handleAdd = (): void => {
    setcategory([...category, checkList])

    form.reset({ eventChecklist: '' })
  }

  const handleIconClick = (index: SetStateAction<null | number>) => {
    setShowInputIndex(index)
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventChecklist: '',
    },
  })

  const handleAddSubcategory = (
    categoryIndex: number,
    subcategory: string,
  ): void => {
    const updatedSubcategories = [...subcategories]
    updatedSubcategories[categoryIndex] = [
      ...(updatedSubcategories[categoryIndex] || []),
      subcategory,
    ]
    setSubcategories(updatedSubcategories)
    setShowInputIndex(null) // Reset the input index

    // Clear the subcategory input field
    setSubcategoryInputValue('')

    form.reset({ eventChecklist: '' }) // Reset the form
  }
  return (
    <FormProvider {...form}>
      <FormField
        control={form.control}
        name="eventChecklist"
        render={({ field }) => {
          return (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  placeholder="Checklist name"
                  type="eventName"
                  {...field}
                  onChange={(e) => {
                    field.onChange(e) // This line is added
                    handleCheckList(e)
                  }}
                />
              </FormControl>
            </FormItem>
          )
        }}
      ></FormField>
      <div className="flex justify-end gap-3 mt-5">
        <Button
          variant="secondary"
          className="px-10 border-2 border-solid"
          onClick={(e) => handleAdd()}
        >
          Add
        </Button>
      </div>

      {category.length > 0 && (
        <div className="mt-10 bg-white py-4 px-3 rounded-lg ">
          {category.map((event, index) => (
            <div key={index}>
              <h3 className="font-bold capitalize">{event}</h3>
              {subcategories[index]?.map(
                (
                  subcategory:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | PromiseLikeOfReactNode
                    | null
                    | undefined,
                  subIndex: Key | null | undefined,
                ) => (
                  <div key={subIndex} className="flex gap-3 items-center">
                    <Checkbox />
                    <span>{subcategory}</span>
                  </div>
                ),
              )}
              <div className="flex items-center">
                {showInputIndex === index ? (
                  <>
                    <Input
                      type="text"
                      value={subcategoryInputValue}
                      onChange={(e) => setSubcategoryInputValue(e.target.value)}
                      className="w-"
                    />

                    <button
                      onClick={() =>
                        handleAddSubcategory(index, subcategoryInputValue)
                      }
                    >
                      Add
                    </button>
                  </>
                ) : (
                  <div
                    onClick={() => handleIconClick(index)}
                    className="cursor-pointer"
                  >
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
