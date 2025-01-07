"use client";
import Image from "next/image"
import { SlUser } from "react-icons/sl"
import Link from "next/link"

interface Props{
  id?:number,
    image?:string | null ,
    title:string,
    description:string,
}
const BlogCard = ({image ,title , description , id}:Props)=>{
  return (
       <div>
       <div className="flex flex-col border shadow-xl border-gray-400 mt-5 cursor-pointer rounded  hover:shadow-lg transform  hover:scale-105 transition duration-300">
       <Link href={`/Blog/${id}`}>
     
       <Image
            src={image || "/default-image.jpg"}
            alt="image"
            width={600}
            height={1000}
            className="object-cover max-h-[1000px]"
            
          />
          </Link>
         <div className="flex items-center px-4 py-3">
        <SlUser className="bg-gray-400 text-gray-500 rounded-full text-3xl" />
        <div className="flex justify-between w-full">
          <div className="ml-3">
            <h1 className="text-sm font-semibold text-gray-700">Admin</h1>
            <p className="text-xs text-gray-500">Mar 22, 2023 • 1 min read</p>
          </div>

          <div className="flex flex-col items-center space-y-1">
            <div className="h-[2px] w-[2px] bg-gray-800 rounded-full"></div>
            <div className="h-[2px] w-[2px] bg-gray-800 rounded-full"></div>
            <div className="h-[2px] w-[2px] bg-gray-800 rounded-full"></div>
          </div>
        </div>
          </div>
          <Link href={`/Blog/${id}`}>
         <h1 className="Font-extrabold text-2xl leading-10 px-2 hover:text-[#8d5a3a]">{title}</h1>
         </Link>
         <Link href={`/Blog/${id}`}>
           <p className="max-w-[500px] px-2 py-3">{description}</p>
           </Link> 
       </div>
       </div>
  )
}

export default BlogCard
