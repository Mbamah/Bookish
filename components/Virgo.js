import React from 'react'

 const Virgo = () => {
  return (
    <section className="flex items-center justify-center py-10">
      <div className="bg-red-200 relative cursor-pointer group">
        <img
          src="/assets/images/book1.png"
          alt=""
          className="relative rounded-lg w-80 "
        />
        {/* Small text */}
        <div className="text absolute bg-white opacity-75 px-2 text-black overflow-hidden w-auto bottom-0 py-4 group-hover:hidden  transition ease-in-out duration-700">
          <p className="font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nisi?
          </p>
          <p className="text-sm py-2">21 Nov 2021</p>
        </div>
        {/* Large text */}
        <div className="text absolute bg-white opacity-75 px-2 py-4 hidden group-hover:block  group-hover:h-full hover:translate-y left-0 right-0 bottom-0  transition ease-in-out duration-700">
          <p className="font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nisi?
          </p>
          <p className="text-sm py-2">21 Nov 2021</p>

          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi amet
            totam natus ducimus nesciunt similique quam, veritatis omnis minus
            ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Amet, nisi?
          </p>
          <a className="py-2 px-6  bg-blue-800 text-white rounded-full text-sm ">
            Read more
          </a>
        </div>
      </div>
    </section>
  );
}
export default Virgo