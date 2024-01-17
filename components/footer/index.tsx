import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Facebook from '@/public/images/footer/Facebook.svg'
import Instagram from '@/public/images/footer/Instagram.svg'
import Twitter from '@/public/images/footer/Twitter.svg'
import Subscribe from '@/public/images/footer/subscribe.svg'
import Styles from './Footer.module.css'

function footer() {
  return (
    <div className={Styles.body}>
      <div className="w-full min-h-[618px] pl-[22px] sm:pl-0   py-[36px] bg-[#252C2B]">
        <div className="flex items-center justify-center gap-[16px]">
          <Link href="/">
            <Image src={Facebook} alt="Facebook" width={35} height={35} />
          </Link>

          <Link href="/">
            <Image src={Instagram} alt="Instagram" width={35} height={35} />
          </Link>

          <Link href="/">
            <Image src={Twitter} alt="Twitter" width={35} height={35} />
          </Link>
        </div>

        <div className="flex flex-col md:flex-row m-auto  sm:min-w-[300px] md:max-w-[1200px] w-full sm:text-center md:text-left justify-evenly mt-[36px]">
          <div className="flex flex-col gap-[48px]">
            <h1 className="text-[#F5FFFE] font-[600] text-[24px]">About us</h1>

            <ul className="text-[#F5FFFE] font-[500] text-[24px]">
              <li>
                <Link href="/">Company</Link>
              </li>
              <li>
                <Link href="/">Leadership</Link>
              </li>
              <li>
                <Link href="/">Our features</Link>
              </li>
              <li>
                <Link href="/">Pricing</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col  mt-[60px] md:mt-0 gap-[48px]">
            <h1 className="text-[#F5FFFE] font-[600] text-[24px]">
              Help & Support
            </h1>

            <ul className="text-[#F5FFFE] font-[500] text-[24px]">
              <li>
                <Link href="/">Customer support</Link>
              </li>
              <li>
                <Link href="/">Organizer support</Link>
              </li>
              <li>
                <Link href="/">Terms of service</Link>
              </li>
              <li>
                <Link href="/">Privacy policy</Link>
              </li>
              <li>
                <Link href="/">Contact us</Link>
              </li>
              <li>
                <Link href="/">Report a scam</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col  mt-[60px] md:mt-0 gap-[48px]">
            <h1 className="text-[#F5FFFE] font-[600] text-[24px]">
              Connect with us
            </h1>

            <ul className="text-[#F5FFFE] font-[500] text-[24px]">
              <li>
                <Link href="/">Press</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/">Join our team</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col   sm:m-auto md:m-0  pt-[60px]  md:pt-0  w-[274px]">
            <h1 className="text-[#F5FFFE] font-[600] text-[24px]">
              Sign up for newsletter
            </h1>
            <p className="text-[#F5FFFE] mt-[60px] font-[500] text-[16px]">
              Sign up now and be the first to know about exclusive offers,
              latest fashion news & style tips!.
            </p>

            <form action="" className="mt-[20px] flex flex-col">
              <label
                htmlFor="email"
                className="text-[#F5FFFE] font-[700] text-[16px]"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className=" max-w-[274px] w-[full] h-[60px] mt-[8px] rounded-[8px] px-2 border-[1px] border-[#F5FFFE] outline-none"
              />
              <button
                type="submit"
                className="bg-[#B1761F] py-[16px] px-[36px] flex items-center gap-[8px] max-w-[274px] w-[full] rounded-[8px] mt-[40px]"
              >
                <Image src={Subscribe} alt="Subscribe" width={24} height={24} />
                <h1 className=" text-[#F5FFFE] font-[500] text-[24px]">
                  Subscribe
                </h1>
              </button>
            </form>
          </div>
        </div>

<div className='mt-[72px]'>
  <h3 className='text-center text-[16px] font-[500] text-[#F5FFFE]'>© Evolution Events, All Rights Reserved</h3>
</div>

      </div>
    </div>
  )
}

export default footer
