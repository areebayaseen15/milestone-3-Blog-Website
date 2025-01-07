"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SlUser } from "react-icons/sl";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FiLink } from "react-icons/fi";
import { blogs } from "@/app/component/Constant";
import Comments from "@/app/component/Comments";

interface Props {
  params: Promise<{ posts: string }>;
}

export default function BlogDetail({ params }: Props) {
  const [blog, setBlog] = useState<null | typeof blogs[0]>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const blogId = parseInt((await params).posts, 10);
      const foundBlog = blogs.find((b) => b.id === blogId);
      setBlog(foundBlog || null);
    };
    fetchBlog();
  }, [params]);

  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false); // To prevent multiple likes

  // Function to handle the like button click
  const handleLike = () => {
    if (!hasLiked) {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
    } else {
      setLikes((prev) => prev - 1);
      setHasLiked(false);
    }
  };

  if (!blog) {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Blog Not Found</h1>
        <p className="text-gray-700">The blog you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="px-5 md:px-10 lg:px-28 xl:px-40 pt-10 lg:pt-20 flex flex-col-reverse lg:flex-row gap-10 xl:gap-20">
        <div className="flex flex-col border shadow-xl border-gray-400 w-full xl:w-[700px] mt-5 cursor-pointer rounded hover:shadow-lg transition duration-300">
          <div className="flex px-5 pt-10 pb-2">
            <SlUser className="bg-gray-400 text-gray-500 rounded-full text-4xl" />
            <div className="flex justify-between w-full">
              <div className="ml-2 mt-2">
                <span>Admin . Mar 22, 2023 . 1 min read</span>
              </div>
              <div className="flex flex-col space-y-1 mt-[10px]">
                <div className="h-[2px] w-[2px] bg-gray-900 rounded-full"></div>
                <div className="h-[2px] w-[2px] bg-gray-900 rounded-full"></div>
                <div className="h-[2px] w-[2px] bg-gray-900 rounded-full"></div>
              </div>
            </div>
          </div>
          <h1 className="font-extrabold text-3xl text-gray-600 leading-10 px-5">{blog.title}</h1>
          <p className="px-5 py-3 text-[16px] font-medium">{blog.description}</p>
          <Image
            src={blog.image}
            alt="image"
            width={700}
            height={1000}
            className="object-cover max-h-[1000px] p-5"
          />
          <h1 className="px-5 mt-3 text-2xl font-medium text-black">{blog.heading1}</h1>
          <p className="px-5 py-2">{blog.para1}</p>

          <h1 className="px-5 mt-3 text-2xl font-medium text-black">{blog.heading2}</h1>
          <p className="px-5 py-2">{blog.para2}</p>

          <h1 className="px-5 mt-3 text-2xl font-medium text-black">{blog.heading3}</h1>
          <p className="px-5 py-2">{blog.para3}</p>

          <h1 className="px-5 mt-3 text-2xl font-medium text-black">{blog.heading4}</h1>
          <p className="px-5 py-2">{blog.para4}</p>

          <h1 className="px-5 mt-3 text-2xl font-medium text-black">{blog.heading5}</h1>
          <p className="px-5 py-2">{blog.para5}</p>

          <h1 className="px-5 mt-3 text-2xl font-medium text-black">{blog.heading6}</h1>
          <p className="px-5 py-2">{blog.para6}</p>

          <h1 className="px-5 mt-3 text-2xl font-medium text-black">{blog.heading7}</h1>
          <p className="px-5 py-2">{blog.para7}</p>

          <h1 className="px-5 mt-3 text-2xl font-medium text-black">{blog.heading8}</h1>
          <p className="px-5 py-2">{blog.para8}</p>

          <h1 className="px-5 mt-3 text-2xl font-medium text-black">{blog.heading9}</h1>
          <p className="px-5 py-2">{blog.para9}</p>

          <h1 className="px-5 mt-3 text-2xl font-medium text-black">{blog.heading10}</h1>
          <p className="px-5 py-2">{blog.para10}</p>

          <hr className="m-5" />
          <div className="flex gap-7 mx-6">
            <FaFacebookF className="hover:text-blue-400" />
            <BsTwitterX className="text-gray-600 hover:text-blue-400" />
            <FaLinkedinIn className="hover:text-blue-400" />
            <FiLink className="text-xl" />
          </div>

          <hr className="m-5" />

          {/* Post Stats */}
          <div className="flex justify-between items-center text-sm text-gray-600 mb-8 mx-5">
            <div>
              <span>0 views</span>
            </div>
            <div>
              <button onClick={handleLike} className="flex items-center focus:outline-none">
                <span className={`text-xl ${hasLiked ? "text-red-500" : "text-gray-600"}`}>❤</span>
                <span className="ml-1">{likes}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#8d5a3a] p-10 rounded-md w-full lg:w-[500px] max-h-[550px] mt-10 lg:mt-28">
          <img src="/Assets/profile.avif" alt="Profile" className="rounded-full mx-auto" />
          <h2 className="text-3xl text-bold text-white mt-5">Hi, thanks for dropping by!</h2>
          <p className="text-white mt-5">
            "Welcome to my little corner of the internet! I'm so glad you stopped by to explore and share in this journey.
            So take a look around, leave a comment, and let's embark on this amazing journey together. Thanks for being here!"
          </p>
        </div>
      </div>

      <Comments />
    </div>
  );
}
