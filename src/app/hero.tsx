
export default function HeroSection() {
    return (
        <div>
      <section className="mt-28  relative h-[900px] bg-cover bg-center " style={{backgroundImage: "url('/Assets/bg2.png')"} }>
        <div className="absolute  left-16 top-28 md:top-0 bg-[#8d5a3a] p-10 rounded-md">
          <img src="/Assets/profile.avif" alt="Profile" className="w-24 h-24 rounded-full mx-auto"/>
          <h2 className="text-4xl text-white mt-5">Welcome!</h2>
          <p className="text-white">Join my journey</p>
        </div>
        </section>

      
      </div>
    );
  }
  
