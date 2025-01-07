"use client";

import React from 'react';
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const page = () => {
  return (
    <div className="px-4 md:px-8">
      <h1 className="mt-10 text-center text-slate-700 text-4xl font-bold">
        Work with Me
      </h1>

      <div className="flex flex-wrap md:flex-nowrap justify-center max-w-5xl mx-auto shadow-gray-400 border-2 border-gray-700 my-10">
  <div className="flex-shrink-0 w-full sm:w-auto">
    <Image
      src="/Assets/sea.avif"
      alt="image"
      width={500}
      height={500}
      className="object-cover w-full md:w-[520px]"
    />
  </div>
  <div className="bg-[#8d5a3a] px-5 md:px-10 py-10 md:py-20 text-white text-base sm:text-lg md:text-2xl font-bold w-full md:w-[700px]">
    <h1>
      I am passionate about sharing my knowledge, travel experience, and the useful tips I’ve learned on the trail.
    </h1>
    <p className="text-sm font-normal leading-6 mt-5 tracking-[2%]">
      I am deeply passionate about sharing the knowledge and experiences I’ve gained from my travels. Every journey has taught me valuable lessons, and I love passing along tips that can make someone else’s adventures smoother and more enjoyable. Whether it’s uncovering hidden gems or navigating challenges on the trail, my goal is to inspire and guide fellow travelers. Through my stories and insights, I hope to spark curiosity and a sense of adventure in everyone who reads them.
    </p>
  </div>
</div>


      <div className="featured text-center mt-10">
        <h5 className="text-xl">As featured in</h5>
      </div>

      <ul className="flex flex-wrap justify-center gap-10 md:gap-20 mt-10">
        {["05.png", "02.png", "03.png", "04.png"].map((image, index) => (
          <li key={index}>
            <Image
              src={`/Assets/${image}`}
              alt={`featured-${index}`}
              width={100}
              height={100}
              className={`object-cover w-[100px] md:w-[200px] ${index % 2 !== 0 ? "mt-5 md:mt-10" : ""}`}
            />
          </li>
        ))}
      </ul>

      <div className='Contact'>
        <h1 className="mt-5 text-center text-slate-700 text-3xl font-bold">
          Contact me here
        </h1>
        <div className="flex flex-wrap justify-center items-center mt-5 text-sm md:text-xl">
          <span className="flex border-r border-black px-5 md:px-10 mb-2 md:mb-0">
            info@mysite.com
          </span>
          <span className="flex border-r border-black px-5 md:px-10 mb-2 md:mb-0">
            123-456-7890
          </span>
          <ul className="flex gap-3 ml-5">
            <li><FaFacebookF /></li>
            <li><FaInstagram /></li>
            <li><FaYoutube /></li>
            <li><FaTwitter /></li>
          </ul>
        </div>
      </div>

      <div className="contact my-20">
        <h1 className="text-3xl text-gray-900 font-bold text-center mt-10">Or just drop me a line here</h1>
        <div className="lg:w-1/2 md:w-2/3 w-full mx-auto mt-10">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full sm:w-1/2">
              <div className="relative">
                <label htmlFor="firstName" className="leading-7 text-sm text-gray-600">First Name*</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full bg-white rounded border border-gray-300 focus:border-black text-base outline-none text-gray-700 py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
            </div>
            <div className="p-2 w-full sm:w-1/2">
              <div className="relative">
                <label htmlFor="lastName" className="leading-7 text-sm text-gray-600">Last Name*</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full bg-white rounded border border-gray-300 focus:border-black text-base outline-none text-gray-700 py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
            </div>
            <div className="p-2 w-full sm:w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-black text-base outline-none text-gray-700 py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
            </div>
            <div className="p-2 w-full sm:w-1/2">
              <div className="relative">
                <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone*</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full bg-white rounded border border-gray-300 focus:border-black text-base outline-none text-gray-700 py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-black text-base outline-none text-gray-700 py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="w-full flex justify-center py-2 text-white bg-[#8d5a3a] border-0 focus:outline-none hover:bg-gray-800 rounded text-lg transition duration-300 ease-in-out transform hover:scale-105">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
