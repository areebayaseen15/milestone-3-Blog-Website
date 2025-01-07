"use client";

import Image from "next/image";

export default function FeaturedPost() {
  return (
    <section className="absolute  top-[600px] left-4 sm:left-16 lg:left-20 xl:left-64 w-[90%] lg:w-[800px] bg-[#2f372f] text-white py-5 px-6 sm:px-8 rounded-md">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">
          Featured Post
        </h2>
        <div className="bg-[#3f473f] rounded-md overflow-hidden flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-1/2">
            <Image
              src="/Assets/img1.webp"
              alt="Hiker by the lake"
              width={600}
              height={400}
              className="w-full h-64 sm:h-80 object-cover"
            />
          </div>
          {/* Text Section */}
          <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <p className="text-xs sm:text-sm text-gray-300">
                Mar 22, 2023 • 2 min read
              </p>
              <h3 className="text-lg sm:text-2xl font-bold mt-2 sm:mt-3">
                Top Hikes In Australia
              </h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-400">
                Australia is a land of vast and diverse landscapes, from its
                rugged coastlines and dense rainforests to its arid deserts and
                towering mountain ranges. For hiking enthusiasts, Australia
                offers an abundance of trails that showcase the beauty and
                uniqueness of this remarkable country.
              </p>
            </div>
            <p className="mt-6 text-xs sm:text-sm border-t border-gray-500 pt-3 sm:pt-4">
              0 comments
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
