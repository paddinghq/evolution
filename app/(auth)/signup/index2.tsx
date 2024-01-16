import Link from 'next/link'
import { IoIosArrowBack } from 'react-icons/io'
import Index2 from './index2'
const Signup2 = () => {
  const handlenext = () => {}
  return (
    <div className="m-auto container p-20">
      <div>
        <IoIosArrowBack size={24} />
      </div>
      <h5 className="font-semibold text-3xl">
        We look out for you in any way possible
      </h5>
      <p className="text-base mt-2">
        Let us make this journey as convenient for you as we can
      </p>
      <h6 className="mt-3">
        How do you rate yourself in terms of your current health?
      </h6>
      <div className="flex gap-3">
        <label className="flex gap-3">
          <input type="radio" value="option1" />
          Excellent
        </label>

        <label className="flex gap-3">
          <input type="radio" value="option1" />
          Good
        </label>

        <label className="flex gap-3">
          <input type="radio" value="option1" />
          Fair
        </label>

        <label className="flex gap-3">
          <input type="radio" value="option1" />
          Poor
        </label>

        <label className="flex gap-3">
          <input type="radio" value="option1" />
          Prefer not to answer
        </label>
      </div>
      <h6 className="mt-4">Do you have disability?</h6>
      <div className="flex gap-3">
        <label className="flex gap-3">
          <input type="radio" value="option1" />
          Yes
        </label>

        <label className="flex gap-3">
          <input type="radio" value="option1" />
          No
        </label>

        <label className="flex gap-3">
          <input type="radio" value="option1" />
          Prefer not to answer
        </label>
      </div>

      <h5 className="mt-2">Please select one of the options</h5>
      <div className="display-flex p-2 align-middle">
        <input
          className="border border-radius bg-white px-10 rounded-2xl shadow-slate-100"
          placeholder="Select"
        />
      </div>
      <div className="flex justify-end gap-7">
        <Link href="#" className="bg-white">
          Skip
        </Link>

        <Link
          href="/Index2"
          className="bg-[#2A6562] cursor-pointer px-8 text-white"
        >
          Next
        </Link>
      </div>
    </div>
  )
}
export default Signup2
