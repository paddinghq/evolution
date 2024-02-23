'use client'
import { LuPencil } from 'react-icons/lu'
import Image from 'next/image'
import Hero from '@/public/Images/Hero.png'
import profile from '@/public/Images/profile.png'
import { useSelector } from 'react-redux'
import { RootState } from '../Redux/slice/interface'

const UserProfile = () => {
  const user = useSelector((state: RootState) => state.auth.userDetails)
  console.log(user)
  console.log('noway')
  if (!user) {
    return (
      <div className="text-center mt-12 text-3xl font-bold">
        Loading user data ...
      </div>
    )
  }
  const dateString = user ? user.dateOfBirth : ''
  const date = dateString ? new Date(dateString) : null

  let formattedDate = ''
  if (date) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    const formattedMonth = month < 10 ? `0${month}` : `${month}`
    const formattedDay = day < 10 ? `0${day}` : `${day}`

    formattedDate = `${year}-${formattedMonth}-${formattedDay}`
  }
  console.log(formattedDate) // Output: "1997-09-07"

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
              {user.fullName}
            </h2>
            <div className="bg-white rounded-full p-3">
              <LuPencil />
            </div>
          </div>
          <p>Date of Birth: {formattedDate}</p>
          <p>Gender: {user.gender}</p>
          <p>Marital Status: {user.relationshipStatus}</p>
          <p>Email: {user.email}</p>
          <p>Mobile: {user.phone}</p>
          <div className="flex gap-3 items-center">
            Hobbies:{' '}
            {user?.hobbies?.map((hobby: string, index: string) => (
              <p
                key={user._id}
                className="text-white bg-[#217873] px-4 py-2 rounded-lg"
              >
                {hobby}
              </p>
            ))}
          </div>
          <div className="flex gap-3 items-center">
            Medical Condition:{' '}
            <p className="text-white bg-[#F5A42C] px-4 py-2 rounded-lg">
              {user.healthStatus}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
