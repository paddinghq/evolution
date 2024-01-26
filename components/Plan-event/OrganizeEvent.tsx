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
backgroundImage: `url(/images/organizeEvent.svg)`,
backgroundRepeat: 'no-repeat',
backgroundPosition: 'center',
backgroundSize: 'cover'
}}>
    <div className=' max-w-[740px] min-h-[282px] mb-[103px] flex flex-col rounded-r-[36px] bg-[#252C2B] gap-[39px] mt-[437px] px-[48px] py-[33px]'>
<h1 className="text-[40px]  text-[#FFF] font-[600]">
Plan your own event
</h1>
<h3 className='text-[24px]  text-[#FFF] font-[500]'>Organize exiting events and contribute in all the fun!</h3>
<Button
    className="bg-[#2A6562] text-[#FFF] font-[500] text-[20px] rounded-[10px] w-[200px] h-[50px] "
    
    >
    <Link href="/signup">
    Organize an event
    </Link>
    </Button>
</div>
</div>
    </div>
  )
}

export default SendGift