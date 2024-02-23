'use client'
import { LuPencil } from 'react-icons/lu'
import Image from 'next/image'
import Hero from '@/public/Images/Hero.png'
import profile from '@/public/Images/profile.png'
import { useSelector } from 'react-redux'
import { RootState } from '../Redux/slice/interface'

const UserProfile = () => {
  const user = useSelector((state: RootState) => state.auth.user)
  console.log(user)
  if (!user) {
    return (
      <div className="text-center mt-12 text-3xl font-bold">Loading user data ...</div>
    )
  }

  return (
    <div className="relative w-full container mx-auto">
      <Image src={Hero.src} width={1400} height={10} alt="Hero" />
      <div className="flex absolute w-full top-0 px-16 py-5 items-start mb-50 gap-5">
        <div className="rounded-lg">
          <Image src={profile.src} width={200} height={100} alt={`profile`} />
        </div>

        <div className="flex flex-col gap-3 rounded-3xl w-full p-5 bg-[#a4ddda] bg-opacity-50">
          <div className="flex justify-between">
            <h2 className="text-2xl font-semibold mb-2 not-italic text-orange-400">
              {user.name}
            </h2>
            <div className="bg-white rounded-full p-3">
              <LuPencil />
            </div>
          </div>
          <p>Date of Birth: {user.dateOfBirth}</p>
          <p>Gender: {user.gender}</p>
          <p>Marital Status: {user.maritalStatus}</p>
          <p>Email: {user.email}</p>
          <p>Mobile: {user.mobile}</p>
          <div className="flex gap-3 items-center">
            Hobbies:{' '}
            {user?.hobbies.map((items: string) => (
              <p className="text-white bg-[#217873] px-4 py-2 rounded-lg">
                {items}
              </p>
            ))}
          </div>
          <div className="flex gap-3 items-center">
            Medical Condition:{' '}
            {user?.medicalCondition.map((items: string) => (
              <p className="text-white bg-[#F5A42C] px-4 py-2 rounded-lg">
                {items}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
