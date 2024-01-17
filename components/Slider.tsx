'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io'

import Img1 from '@/public/Images/Image.png'
import Img2 from '@/public/Images/Image.png'
import Img3 from '@/public/Images/Image.png'
import { Button } from './ui/Button/button'

const Slider: React.FC = () => {
  const [current, setCurrent] = useState(0)
  const images = [Img1, Img2, Img3]

  let prevSlide = () => {
    if (current === 0) setCurrent(images.length - 1)
    else setCurrent(current - 1)
  }

  let nextSlide = () => {
    if (current === images.length - 1) setCurrent(0)
    else setCurrent(current + 1)
  }

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-300`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {images.map((img, index) => (
          <Image key={index} src={img} alt={`image-${index}`} />
        ))}
      </div>
      <div className="absolute top-0 h-full w-full justify-between items-center flex px-10 ">
        <Button onClick={prevSlide}>
          <IoIosArrowDropleftCircle size={24} />
        </Button>
        <Button onClick={nextSlide}>
          <IoIosArrowDroprightCircle size={24} />
        </Button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 items-center w-full">
        {images.map((img, index) => (
          <div
            onClick={() => setCurrent(index)}
            key={index}
            className={`rounded-full w-5 h-5 cursor-pointer  ${
              index === current ? 'bg-white ' : 'bg-gray-500'
            }`}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Slider
