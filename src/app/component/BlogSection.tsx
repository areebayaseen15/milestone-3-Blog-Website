"use client";

import Link from "next/link";
import Image from "next/image";
import { FaRegCommentAlt } from "react-icons/fa";

const blogPosts = [
  { id: 1, title: "Mexico: A Culinary Journey", image: "/Assets/blog1.webp" },
  { id: 2, image: "/Assets/Budget-Travel.webp", title: "5 Tips For Budget Travelers" },
  { id: 3, image: "/Assets/diving-spots.webp", title: "The Most Amazing Diving Spots" },
  { id: 4, image: "/Assets/markets.webp", title: "5 Food Markets Around the World" },
  { id: 5, image: "/Assets/hikes.webp", title: "Top Hikes in Australia" },
  { id: 6, image: "/Assets/trip.webp", title: "Asia Trip: Off the Beaten Path" },
];

export default function BlogSection() {
  return (
    <section className="px-4 sm:px-8 lg:px-20 pt-20 pb-10 mt-72 md:mt-40 lg:mt-10">
      <h2 className="text-3xl font-bold text-slate-700 mb-10 hover:text-gray-500 text-center lg:text-left">
        Recent Posts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={224}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <Link href={`/Blog/${post.id}`}>
                <h3 className="text-xl font-bold hover:text-[#8d5a3a]">{post.title}</h3>
              </Link>
              <hr className="border-gray-300 my-4" />
              <div className="flex items-center gap-2 text-gray-600">
                <FaRegCommentAlt />
                <span>0</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
