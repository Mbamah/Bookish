import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#FEC702]">
      <div className="container mx-auto max-w-3xl py-12  px-6 text-center">
        <h1 className="font-['Numans'] md:text-6xl text-3xl">
          Building The Habit of Reading
        </h1>
        <blockquote className="font-['Nunito'] md:pt-8 pt-3 pb-8 md:pb-12 text-sm md:text-base">
          &quot;That&apos;s how knowledge works. It builds up, like compound interest. All
          of you can do it, but I guarantee not many of you will do it.&quot; -
          Warren Buffet.
        </blockquote>
        <a href="" className="bg-white font-['Numans']  py-4 px-5 md:px-10 rounded  font-bold md:text-xl border-black rotate-12">
          Join Now!
        </a>
        <p className="mt-10">A space to pick up on your reading habit. </p>
      </div>
    </section>
  );
};

export default Hero;
