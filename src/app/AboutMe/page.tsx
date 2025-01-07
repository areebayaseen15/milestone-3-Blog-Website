import React from 'react'
import Image from "next/image"

const AboutMe = () => {
  return (
    <div>
      <h1 className="mt-10 text-center text-slate-700 text-4xl font-bold">
        About Me
      </h1>

      <div className='flex flex-col lg:flex-row justify-center w-full max-w-[1050px] mx-auto shadow-gray-400 border-2 border-gray-700 my-10'>
        <div className='w-full lg:w-[430px]'>
          <Image
            src="/Assets/about.avif"
            alt="image"
            width={430}
            height={500}
            className='object-cover w-full'
          />
        </div>
        <div className='bg-[#8d5a3a] px-10 py-10 lg:py-20 text-white text-xl lg:text-2xl font-bold w-full lg:w-[700px]'>
          <h1 className='text-2xl lg:text-3xl'>
            Hi, thanks for dropping by!
          </h1>

          <p className="text-sm font-normal leading-6 mt-10 tracking-[2%]">
            Hi, thanks for dropping by! Whether you're here to explore, learn, or simply pass the time, I’m thrilled to have you. This space is all about sharing ideas, experiences, and stories that inspire and connect us. From travel adventures to helpful tips and reflections on life, there’s a little something here for everyone. I hope you’ll find value in what’s shared and perhaps even a spark of inspiration to carry into your own journey.
          </p>
          <p className="text-sm font-normal leading-6 tracking-[2%] mt-5">
            As you browse through, feel free to engage—leave a comment, share your thoughts, or even just say hello. Your presence means the world, and it’s what makes this space a vibrant and welcoming community. So, grab a cup of coffee, take your time, and enjoy exploring. Once again, thank you for stopping by—I look forward to sharing this little corner of the world with you!
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
