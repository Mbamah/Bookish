import React from "react";
import * as BsIcons from 'react-icons/bs'
const Hero = () => {
  return (
    <section className="bg-gray-900 text-white h-screen flex flex-col items-center justify-center ">
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
          className="relative inline-block text-sm font-['Numans'] md:text-xl font-medium text-gray-900 group"
          href="/download"
        >
          <span className="absolute inset-0 border border-[#FEC702]"></span>
          <span className="block px-12 py-3 transition-transform bg-[#FEC702] border border-[#FEC702] group-hover:-translate-x-1 group-hover:-translate-y-1">
            Join the club
          </span>
        </a>
      </div>
      <BsIcons.BsArrowDownCircle className="animate-bounce w-10 h-10 text-white" />
    </section>
  );
};

export default Hero;
