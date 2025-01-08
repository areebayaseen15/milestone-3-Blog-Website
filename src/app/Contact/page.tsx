
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const page = () => {
  return (
    <div>
      <div className='Contact'>
              <h1 className="mt-40 lg:mx-40 lg:mt-48 text-center text-slate-700 text-3xl font-bold">
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
              <h1 className="text-2xl lg:text-3xl text-gray-900 font-bold text-center mt-10">Or just drop me a line here</h1>
              <div className="lg:w-1/2 md:w-2/3 w-full mx-0 lg:mx-auto mt-10">
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
  )
}

export default page
