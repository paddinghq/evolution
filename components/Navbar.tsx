import Logo from '@/public/Images/Evolution_logo.png'
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import {
  IoLocationOutline,
  IoOptions,
  IoSearchSharp,
  IoTicketOutline,
} from 'react-icons/io5'
import SignIn from '../app/(auth)/signin/index'
import Image from 'next/image'

const priceOptions = [
  { value: 'nigeria', label: 'Nigeria' },
  { value: 'togo', label: 'Togo' },
  { value: 'others', label: 'others' },
]

const links = [
  { id: 1, name: 'Events', href: '/events' },
  { id: 2, name: 'Stories', href: '/stories' },
  { id: 3, name: 'Our mission', href: '/mission' },
  { id: 4, name: 'Contact Us', href: '/contactus' },
]

const token =
  typeof window !== 'undefined' ? localStorage.getItem('token') : null

const Navbar = () => {
  return (
    <div className="bg-black flex justify-between py-3 px-5">
      <div className="flex justify-between items-center gap-4">
        <Link href="/">
					<Image src={Logo.src} alt={'Evolution logo'} width={100} height={100} />
        </Link>

        <div className="flex justify-center items-center gap-3">
          <div className="relative flex justify-center items-center">
            <IoSearchSharp
              size={24}
              className="absolute  md:left-3 sm:hidden md:block"
            />
            {/* <input
              type="text"
              name="search"
              id="search"
              placeholder="Search all"
              className=" rounded-full outline-none px-14 py-3"
            /> */}
			      <Input />

            <div className="absolute rounded-2xl bg-[#B1761F] text-white right-6 px-5 py-1">
              <IoOptions size={20} className=" md:left-3 sm:hidden md:block" />
            </div>
          </div>
          <div className="flex flex-col items-center text-white gap-3">
            <IoLocationOutline size={20} />

            <select className="bg-transparent text-white border-none">
              {priceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-5">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className="text-white hover:text-[#B1761F] active:bg-[#B1761F] "
          >
            {link.name}
          </Link>
        ))}
        {token ? (
          <>
            <Link href="/profile">Profile</Link>
            <div className="flex">
              <Link
                href="/createevent"
                className="bg-[#B1761f] text-white py-3 px-8 rounded-lg"
              >
                <IoTicketOutline />
                Create an event
              </Link>
            </div>
          </>
        ) : (
          <div className="flex">
            <Link
              href="/signin"
              className="bg-[#B1761f] text-white py-2 px-8 rounded-lg flex justify-center items-center gap-3"
            >
              <IoTicketOutline />
              SignIn
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
