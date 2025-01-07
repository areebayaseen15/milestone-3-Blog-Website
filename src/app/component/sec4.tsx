


import Image from "next/image";

const Section4 = () => {

   
  return (
    <div>
      
      <div className="bg-[#8d5a3a] w-full text-white px-5  lg:px-20 xl:px-64 py-10 rounded-sm">
        <div className="flex flex-col sm:mx-40 md:flex-row gap-10 lg:gap-20  mx-20 lg:mx-2 justify-between">
         <div >
         <p className="font-bold text-4xl lg:text-5xl ml-8 mb-3">98</p>
         <p>Countries Visited</p>

         </div>
         <div >
         <p className="font-bold text-4xl lg:text-5xl ml-10 mb-3">7</p>
         <p>Continents Visited</p>

         </div>
         <div >
         <p className="font-bold text-4xl lg:text-5xl ml-10 mb-3">8</p>
         <p>Torn Pairs of Shoes</p>

         </div>
         <div >
         <p className="font-bold text-4xl lg:text-5xl ml-10 mb-3">2</p>
          <p >Lost BackPacks</p>
        </div>
       
      </div>
      </div>

    <div className="my-20 text-center">
        <span className="text-2xl lg:text-3xl font-bold text-gray-700 hover:text-gray-600">
          Follow us on Instagram
        </span>
        <span className="text-[#8d5a3a] text-2xl lg:text-3xl font-bold mx-2">
          @traveling.blog
        </span>


        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-10 mx-4 sm:mx-8 lg:mx-20 my-10">
  <Image
    src="/Assets/img4.avif"
    alt="img"
    width={300}
    height={400}
    className="object-cover hover:opacity-75 transition duration-300 cursor-pointer"
  />
  <Image
    src="/Assets/img02.jpg"
    alt="img"
    width={400}
    height={500}
    className="object-cover hover:opacity-75 transition duration-300"
  />
  <Image
    src="/Assets/img6.jpeg"
    alt="img"
    width={400}
    height={500}
    className="object-cover w-full h-full hover:opacity-75 transition duration-300"
  />
  <Image
    src="/Assets/cow.webp"
    alt="img"
    width={500}
    height={700}
    className="object-cover w-full h-full hover:opacity-75 transition duration-300"
  />
  <Image
    src="/Assets/img5.jpeg"
    alt="img"
    width={400}
    height={500}
    className="object-cover w-full h-full hover:opacity-75 transition duration-300"
  />
  <Image
    src="/Assets/img5.jpg"
    alt="img"
    width={400}
    height={500}
    className="object-cover w-full h-full hover:opacity-75 transition duration-300"
  />
  <Image
    src="/Assets/img3.jpg"
    alt="img"
    width={400}
    height={500}
    className="object-cover w-full h-full hover:opacity-75 transition duration-300"
  />
  <Image
    src="/Assets/hero2.jpg"
    alt="img"
    width={400}
    height={500}
    className="object-cover w-full h-full hover:opacity-75 transition duration-300"
  />
</div>

    </div>
    </div>
  )
}

export default Section4
