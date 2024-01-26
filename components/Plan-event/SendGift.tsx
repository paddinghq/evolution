import React from 'react'
import sendGift from '@/public/images/sendGift.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Styles from '../footer/Footer.module.css'

function SendGift() {
  return (
    <div className={Styles.body}>
<div className='min-h-[769.5px] mt-[160px] rounded-[20px] max-w-[80%] border m-auto ' style={{
backgroundImage: `url(/images/sendGift.svg)`,
backgroundRepeat: 'no-repeat',
backgroundPosition: 'center',
backgroundSize: 'cover'
}}>
    <div className=' max-w-[558px] mb-[168px] flex flex-col gap-[39px] mt-[437px] ml-[80px]'>
<h1 className="text-[40px]  text-[#FFF] font-[600]">
You can now gift tickets to an event to your friends
</h1>
<h3 className='text-[24px]  text-[#FFF] font-[500]'>Last minute gifting needs, from ₹799 </h3>
<Button
    className="bg-[#2A6562] text-[#FFF] font-[500] text-[20px] rounded-[10px] w-[200px] h-[50px] "
    
    >
    <Link href="/signup">Send Gift</Link>
    </Button>
</div>
</div>
    </div>
  )
}

export default SendGift