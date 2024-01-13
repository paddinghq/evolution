import { IoIosOptions } from 'react-icons/io';
import Logo from '@/components/Assests/Evolution_logo.png';

const Navbar = () => {
  return (
    <div className="bg-black flex justify-between gap-6 py-3 px-5">
      <div className="flex justify-between items-center gap-4">
        <img src={Logo.src} alt="Evolution logo" className="w-24" />

        <div className="relative border-[0.5rem] border-solid border-[#ffffff5e] rounded-2xl">
						{/* <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute text-2xl xl:top-[1.5rem] xl:left-5 md:top-[1.5rem] md:left-3 sm:hidden md:block" /> */}
                        <IoIosOptions size={24} className="absolute text-2xl xl:top-[1.5rem] xl:left-5 md:top-[1.5rem] md:left-3 sm:hidden md:block" />
						<input
							type="text"
							name="search"
							id="search"
							placeholder="Where would you love to stay?"
							className="w-full rounded-lg outline-none  sm:pr-0 sm:pl-3 sm:w-full sm:h-[5rem] md:pl-12 md:h-[5rem] xl:pr-[12rem] xl:pl-[4rem] xl:h-[5rem]"
						/>

						<div
							
							className="absolute rounded-2xl bg-black text-white sm:py-4 sm:px-3 sm:top-[7rem] sm:w-full  md:top-[0.6rem]
              sm:right-0 md:right-2 md:w-auto xl:top-[1rem] xl:right-4 xl:w-auto xl:py-3 xl:px-5 "
						>
                        <IoIosOptions size={24} className="text-2xl xl:top-[1.5rem] xl:left-5 md:top-[1.5rem] md:left-3 sm:hidden md:block" />
							
						</div>
					</div>
    
      </div>
    </div>
  );
};

export default Navbar;

{/* <div className="relative flex justify-between items-center">
<div className="bg-primary absolute">
    <IoIosOptions size={24} />
</div>

<input
type="text"
name="search"
id="search"
placeholder="search"
className="px-5 py-3 rounded-full"
/>
<div className="bg-primary absolute">
<IoIosOptions size={24} />
</div>
</div> */}
