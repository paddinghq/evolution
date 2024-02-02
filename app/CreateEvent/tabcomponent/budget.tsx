'use client'
import { Input } from "@/components/ui/input";
import React from 'react';
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";

function Budget() {
    return (
        <div className="flex rounded-lg flex-col gap-8 px-9 py-8  text-black">
        <div className="flex gap-3">
            <Input placeholder='Commodity Name'/>
            <Input placeholder="Amount Alloted" />
        </div>

        <div>
        <Textarea placeholder="Description" />
        </div>

        <div className="flex justify-end gap-3">
            <Button variant="secondary" className="px-10 border-2 border-solid">Add</Button>
            </div>
    </div>
    );
}

export default Budget