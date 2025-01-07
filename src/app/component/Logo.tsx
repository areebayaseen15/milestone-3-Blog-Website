import {twMerge} from "tailwind-merge";
import Link from "next/link"
import Image from "next/image"

const Logo = () => {
  return (
    <div className='flex'>
      
      <Image src="/Assets/img02.png" alt="Logo" width={100} height={500} />

    <Link  href={"/"} className={twMerge("text-2xl text-white hover:text-blue-500 font-bold uppercase hoverEffect relative  group overflow-hidden mt-5"

    )}>
       
On The Trail
        
          <h5 className ="text-[16px] font-normal ">
          My Travel Blog
          </h5>
          <span className='absolute left-0 bottom-0 w-full h-px bg-white -translate-x-[105%] group-hover:translate-x-0 hoverEffect transition-transform'>
           
            </span>

      </Link>
    </div>

  );
};

export default Logo
