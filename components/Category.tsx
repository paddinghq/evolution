import  Image  from 'next/image';
import Music from "@/public/Images/music.png"
const Category = () => {

    return (
        <div className="px-48 py-5">
            <h3 className="capitalize text-[#B1761F] text-4xl font-bold underline
             decoration-[#F5A42C] decoration-8 decoration-slice">
                categories
            </h3>

            <div className="flex flex-wrap items-start content-start mt-9">
                <div className="flex items-center flex-col">
                    <Image src={Music.src} alt={"music"} width={70} height={70}/>
                    <p>Music</p>
                </div>
            </div>


        </div>
    )
}

export default Category