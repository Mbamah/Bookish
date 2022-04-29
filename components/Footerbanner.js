import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Footerbanner = () => {
  return (
    <section>
      <aside className="relative overflow-hidden text-gray-300 bg-gray-900  lg:flex">
        <div className="w-full p-12 text-center lg:w-1/2 sm:p-16 lg:p-y-24 lg:text-left">
          <div className="max-w-xl mx-auto lg:ml-0">
            <p className="mt-2 text-2xl font-medium font-['Numans'] text-white sm:text-6xl">
              Read, Learn and Share
            </p>

            <p className="hidden lg:mt-4 w-3/4 lg:block">
              Join others in what we’re reading and share the adventure together
            </p>

            <Link href="/">
              <a className="inline-block px-5 py-3 mt-8 text-sm font-['Numans'] font-medium text-gray-900 bg-[#FEC702]   hover:bg-white">
                Get started today
              </a>
            </Link>
          </div>
        </div>

        <div className="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-auto">
          <img
            src="https://www.hyperui.dev/photos/women-2.jpeg"
            alt="Women smiling at college"
            className="absolute inset-0 object-cover w-full h-full"
          />
          {/* <Image
            src="/assets/images/book.svg"
            alt="book of the month"
            width={800}
            height={400}
            className="absolute inset-0 object-cover w-full h-full"
          /> */}
        </div>
      </aside>
    </section>
  );
};

export default Footerbanner;
