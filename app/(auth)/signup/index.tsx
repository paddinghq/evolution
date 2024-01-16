import Link from 'next/link'
import { IoIosArrowBack } from 'react-icons/io'
import Index2 from './index2'
const Signup = () => {
  const handlenext = () => {}
  return (
    <div className="m-auto container p-20">
      <div>
        <IoIosArrowBack size={24} />
      </div>
      <h5 className="font-semibold text-3xl">Let us get to know you better</h5>
      <p className="text-base mt-2">
        We will use this information to personalize your experience and cater to
        your individual needs
      </p>
      <h5 className="mt-2">What is your date of birth</h5>
      <div className='display-flex p-2 align-middle'>
          <input
          className='border border-radius bg-white px-10 rounded-2xl shadow-slate-100' placeholder='Enter your date of birth'
          />
      </div>
      <h6 className="mt-3">Please specify your gender</h6>
      <div className="flex gap-3">
      <label className='flex gap-3'>
            <input type="radio" value="option1" />
            Male
          </label>

          <label className='flex gap-3'>
            <input type="radio" value="option1"/>
            Female
          </label>

          <label className='flex gap-3'>
            <input type="radio" value="option1"/>
            Other
          </label>

          <label className='flex gap-3'>
            <input type="radio" value="option1"/>
            Prefer not to answer
          </label>
      </div>
      <h6 className="mt-4">Please specify your relationship status</h6>
      <div className="flex gap-3">
      <label className='flex gap-3'>
            <input type="radio" value="option1" />
            Single
          </label>

          <label className='flex gap-3'>
            <input type="radio" value="option1"/>
            Married
          </label>

          <label className='flex gap-3'>
            <input type="radio" value="option1"/>
            Preferred not to answer
          </label>
      </div>

      <h6 className="mt-4">Do you have any kids?</h6>
      <div className="flex gap-3">
      <label className='flex gap-3'>
            <input type="radio" value="option1" />
            Yes
          </label>

          <label className='flex gap-3'>
            <input type="radio" value="option1"/>
            No
          </label>

          <label className='flex gap-3'>
            <input type="radio" value="option1"/>
            Preferred not to answer
          </label>
      </div>
      <div className='flex justify-end gap-7'>
<Link href="#" className="bg-white"> 
Skip
</Link>

<Link href="/Index2" className="bg-[#2A6562] cursor-pointer px-8 text-white"> 
Next
</Link>
</div>
    </div>
  )
}
export default Signup
