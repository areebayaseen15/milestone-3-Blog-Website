

import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-40">
      <h1 className=" mt-40  text-center text-slate-700 text-4xl font-bold">
        Blog
      </h1>
      <div>
        <div className="flex gap-5 xl:gap-10 mt-10 justify-center md:justify-start md:ml-10">
          <Link href="/Blog" className="text-slate-600 hover:text-[#8d5a3a]">
            All Posts
          </Link>
          <Link href="/Recent" className="text-slate-600 hover:text-[#8d5a3a]">
            Recent
          </Link>
        </div>
      </div>

  <div className="p-6 md:py-20  lg:mx-32 my-7 lg:my-10 lg:px-40 bg-white shadow-lg rounded-md text-center max-w-sm  md:max-w-3xl border border-gray-200">
    <h1 className="text-xl font-semibold text-gray-800 mb-2">
      Post Coming Soon
    </h1>
    <p className="text-sm text-gray-600">
      Explore other categories in this blog or check back later.
    </p>
  </div>
</div>

  )
}

export default page
