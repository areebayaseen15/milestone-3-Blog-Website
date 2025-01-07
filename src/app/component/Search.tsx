"use client";
import React from 'react'
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci'
import { IoMdClose } from 'react-icons/io';

const SearchInput = () => {
    const [search , setSearch] = useState("")
  return (
    <>
    {/* <div className='w-20 hidden md:inline-flex flex-1 h-12 relative'>
    <CiSearch className='absolute left-2.5  text-lg mt-3.5 text-lightOrange'/>
 <input type="text"
      placeholder='Search Products.......'
      className=' flex-1 h-full outline-none bg-transparent placeholder-text-lightText border-[1px] border-white
      rounded-sm pl-8 pr-28'
      onChange={(e)=>setSearch(e.target.value)}
      value={search}
      />
      {search && <IoMdClose  onClick={()=>setSearch("")}
       className="text-accent/50 hoverEffect hover:text-lightRed cursor-pointer absolute right-20 top-4"/>}
      <button className=' bg-lightOrange absolute right-0 px-3.5 py-1.5 text-white text-sm hover:bg-darkOrange  font-medium rounded-sm
      top-2   mr-1.5'>
        Search
      </button>
    </div> */}

    <div className='hidden lg:inline-flex h-12 relative'>
    <input type="text"
      placeholder='Search ......'
      className=' flex-1 h-full outline-none bg-transparent placeholder-text-lightText border-[1px] border-white
      rounded-sm pl-2 pr-28 py-2'
      onChange={(e)=>setSearch(e.target.value)}
      value={search}
      />
    <CiSearch
     className="text-white text-2xl g mt-3  absolute  left-[265px]"/>

    </div>
    </>
  )
}

export default SearchInput
