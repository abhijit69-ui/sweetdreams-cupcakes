import React from 'react';

const Hero: React.FC = () => {
  const muffinImages = [
    '/assets/hero-cp2.png',
    '/assets/hero-cp4.png',
    '/assets/hero-cp2.png',
    '/assets/hero_cp3.png',
  ];

  return (
        <section className="relative w-full h-[calc(100vh-4rem)] overflow-hidden pt-16">
  
  <div className="absolute inset-0 bg-[url('/assets/bg_cloud.jpg')] bg-cover bg-center opacity-50 -z-20" />

 
  <div className="absolute inset-0 flex justify-center items-center -z-10 pointer-events-none">
    <img
      src="/assets/bgcake.png"   
      alt="Cupcake background"
      className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] opacity-70 object-contain mt-17"
    />
  </div>

  
  <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
    <h2 className="text-4xl sm:text-5xl md:text-6xl font-primary font-extrabold text-lavender leading-tight drop-shadow-[0_4px_10px_rgba(255,192,203,0.3)]">
      Where Sweet Dreams <br />
      <span className="text-pink-500">Become Delicious Reality</span>
    </h2>
  </div>
</section>


   );
};

export default Hero;
