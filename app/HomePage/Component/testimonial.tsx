import James from '@/public/Images/Henry.png'
import Image from 'next/image'
const review = [
    {
        test: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        img: James,
        name: 'Brooklyn Simmons',
        country: "(VP, Xiaomi Cameroon)"
    },
    {
        test: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        img: James,
        name: 'Brooklyn Simmons',
        country: "(VP, Xiaomi Cameroon)"
    },
    {
        test: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        img: James,
        name: 'Brooklyn Simmons',
        country: "(VP, Xiaomi Cameroon)"
    },
    {
        test: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        img: James,
        name: 'Brooklyn Simmons',
        country: "(VP, Xiaomi Cameroon)"
    },
]


const Testimonial = () => {
    return(
        <div className="px-36 py-5">
        <div className="container">
            <h1 className="text-[#B1761F] font-bold text-3xl">Notable Mentions</h1>
            <hr className="w-[6rem] border-4 border-[#F5A42C] rounded-xl mt-1" />
        </div>

        <div className="mt-4">
            <div className=" grid grid-flow-col overflow-x-auto gap-3 pb-5">
                {review.map((items) => 
                    <div className="flex flex-col items-center gap-3 ">
                        <div className="bg-[#F2F2F2] rounded-lg w-[25rem] px-7 py-4 text-justify text-[#252C2B]">
                            <p className=''>{items.test.split(' ').slice(0, 30).join(' ')}..</p>
                        </div>

                        <div className="flex flex-col items-center gap-3">
                            <Image 
                                src={items.img.src} 
                                alt={items.name} 
                                width={100}
                                height={100}
                            />
                            <h5 className='text-black capitalize font-semibold'>{items.name}</h5>
                            <h5 className='text-black font-light text-sm'>{items.country}</h5>
                        </div>
                      
                    </div>
                )}
                
                
                
            </div>
        </div>
        </div>
    )
}
export default Testimonial