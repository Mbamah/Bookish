import React from 'react'
import Image from 'next/image'
import { images } from '../public/assets'
import * as AiIcons from 'react-icons/ai'

const Book = () => {
 return (
   <section className="bg-gray-900 ">
     <div className="container  mx-auto px-6 py-12 flex flex-col items-center">
       <h1 className="text-4xl text-white text-center pb-4 font-['Numans'] ">
         Book of the Month
       </h1>

       <Image src={images.book} alt="book of the month" className="" />
       <a
         href="hi.pdf"
         target="_blank"
         download
         className="bg-[#FEC702] flex items-center text-gray-900 justify-evenly gap-x-2 rounded mt-4 font-['Numans'] font-medium md:text-2xl px-6 py-3"
       >
         Download Book
         <AiIcons.AiOutlineDownload />
       </a>
     </div>
   </section>
 );
}

export default Book
