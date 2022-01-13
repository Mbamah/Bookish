import React from "react";
import * as BsIcons from 'react-icons/bs'
const Hero = () => {
  return (
    <section className="bg-[#FEC702] h-screen flex flex-col items-center justify-center ">
      <div className="container mx-auto max-w-3xl py-12  px-6 text-center ">
        <h1 className="font-['Numans'] md:text-7xl text-3xl leading-10">
          Building The Habit of Reading
        </h1>
        <blockquote className="font-['Nunito'] md:pt-8 pt-3 pb-8 md:pb-12 text-sm md:text-base">
          &quot;That&apos;s how knowledge works. It builds up, like compound
          interest. All of you can do it, but I guarantee not many of you will
          do it.&quot; - Warren Buffet.
        </blockquote>
        <a
          href=""
          className="bg-white font-['Numans']  py-4 px-5 md:px-10   font-bold md:text-xl border-black rotate-12"
        >
          
          Join the club 
        </a>
      </div>
        <BsIcons.BsArrowDownCircle className="animate-bounce w-10 h-10 text-white" />
    </section>
  );
};

export default Hero;
