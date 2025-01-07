import { twMerge } from "tailwind-merge";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#4a5240] text-[#ffffff] px-6 sm:px-10  md:px-20 lg:px-[20px] xl:pl-40 py-10">
        <div className="flex   flex-wrap gap-10  md:gap-5 lg:gap-20 xl:gap-36 items-start max-w-[1200px] mx-auto">
          {/* Logo and Title */}
          <div className="w-full sm:w-auto flex items-start gap-5">
            <Image src="/Assets/img02.png" alt="Logo" width={150} height={100} className="flex-shrink-0" />
            <Link
              href="/"
              className={twMerge(
                "text-lg sm:text-xl lg:text-2xl text-white hover:text-darkOrange font-bold uppercase relative group overflow-hidden mt-10"
              )}
            >
              ON THE TRAIL
              <h5 className="text-sm sm:text-base font-normal">My Travel Blog</h5>
              <span className="absolute left-0 bottom-0 w-full h-px bg-darkOrange -translate-x-[105%] group-hover:translate-x-0 transition-transform"></span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="w-full sm:w-auto flex justify-start mt-5">
            <ul className="flex flex-wrap lg:flex-col gap-2 sm:gap-5 font-sans text-sm sm:text-[14px]">
              <li><Link href="#" className="text-[#ffffff] hover:underline">Home</Link></li>
              <li><Link href="#" className="text-[#ffffff] hover:underline">About Me</Link></li>
              <li><Link href="#" className="text-[#ffffff] hover:underline">Work With Me</Link></li>
              <li><Link href="#" className="text-[#ffffff] hover:underline">As Featured In</Link></li>
              <li><Link href="#" className="text-[#ffffff] hover:underline">Instagram</Link></li>
              <li><Link href="#" className="text-[#ffffff] hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="w-full sm:w-auto flex flex-col gap-4 mt-5">
            <p className="font-sans text-sm sm:text-base lg:text-[16px] w-full sm:w-[300px]">
              Subscribe here and get the latest travel tips and my insider secrets!
            </p>
            <form className="space-y-4">
              <label className="block text-sm lg:text-base">Email:</label>
              <input
                type="email"
                required
                className="w-full sm:w-[300px] p-2 border-2 border-white bg-transparent rounded-md"
              />
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                <label className="flex items-center text-sm lg:text-base">
                  <input type="checkbox" className="mr-2" /> Yes, subscribe me to your newsletter
                </label>
                <button
                  type="submit"
                  className="bg-[#835f38] text-white px-4 py-2 rounded-sm hover:bg-[#6c4b2d] transition"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center font-serif text-sm mt-10">
          © 2035 by On the Trail. Powered and secured by{" "}
          <a href="https://www.wix.com" className="text-[#ffffff] underline hover:text-gray-300">
            Wix
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
