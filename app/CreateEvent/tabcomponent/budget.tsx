'use client'
import { Input } from '@/components/ui/input'
import React, { SetStateAction } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { EventFormData } from './types'

type Props = {
  formData: EventFormData
  setFormData: React.Dispatch<SetStateAction<EventFormData>>
}

const Budget: React.FC<Props> = ({ formData, setFormData }) => {
  return (
    <div className="flex rounded-lg flex-col gap-8 px-9 py-8  text-black">
      <div className="flex gap-3">
        <Input
          placeholder="Commodity Name"
          className="focus-visible:ring-0 focus-visible:ring-offset-0"
          value={formData.commodityName}
          onChange={(event) =>
            setFormData({ ...formData, commodityName: event.target.value })
          }
        />
        <Input
          placeholder="Amount Alloted"
          className="focus-visible:ring-0 focus-visible:ring-offset-0"
          value={formData.amountAllocated}
          onChange={(event) =>
            setFormData({ ...formData, amountAllocated: event.target.value })
          }
        />
      </div>

      <div>
        <Textarea
          placeholder="Description"
          className="focus-visible:ring-0 focus-visible:ring-offset-0"
          value={formData.budgetDescription}
          onChange={(event) =>
            setFormData({ ...formData, budgetDescription: event.target.value })
          }
        />
      </div>

      <div className="flex justify-end gap-3">
        <Button variant="secondary" className="px-10 border-2 border-solid">
          Add
        </Button>
      </div>
    </div>
  )
}

export default Budget
