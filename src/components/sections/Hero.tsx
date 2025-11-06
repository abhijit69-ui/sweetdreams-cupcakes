const Hero: React.FC = () => {
  const muffinImages = [
    "/assets/hero-cp2.png",
    "/assets/hero-cp4.png",
    "/assets/hero-cp2.png",
    "/assets/hero_cp3.png"

  ]
  return ( <section
      className="relative w-full h-[90vh] bg-cover bg-center flex flex-col items-center justify-center px-4 overflow-hidden"
      style={{
        backgroundImage: "url('/assets/bg_cloud.jpg')",
      }}
    >
      {/* Home Text */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary mb-9 text-blue-900 text-center max-w-3xl">
        Where Sweet Dreams Become Delicious Reality
        
      </h2>

      {/* Muffin Images */}
      <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16 mt-4">
        {muffinImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`dessert-${i}`}
            className="w-24 sm:w-32 md:w-44 lg:w-56 object-contain animate-float hover:scale-110 transition-transform duration-500 ease-in-out"
          />
        ))}
      </div>

     
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>

      
    </section>
 )
};

export default Hero;
