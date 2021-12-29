import React from 'react'
import Image from 'next/image'
import { images } from '../public/assets'
import * as AiIcons from 'react-icons/ai'

const Book = () => {
 return (
   <section className="bg-[#FEC702] bg-[url('../public/assets/images/bg1.png')] bg-no-repeat bg-left-bottom">
     <div className="container  mx-auto px-6 py-12 flex flex-col items-center">
       <h1 className="text-3xl text-center pb-4 font-['Numans'] uppercase underline decoration-sky-500 decoration-wavy decoration-4">
         Book of the Monthe
       </h1>
       <h3 className="md:text-2xl text-lg text-center text-white font-['Nunito']">
         His Glory Alone - Blessing Babilah
       </h3>
       <Image src={images.book} alt="book of the month" className="" />
       <a
         href="hi.pdf"
         target="_blank"
         download
         className="bg-white flex items-center justify-evenly gap-x-2 rounded mt-4 font-['Numans'] font-medium md:text-2xl px-6 py-3"
       >
         Download Book
         <AiIcons.AiOutlineDownload />
       </a>
     </div>
   </section>
 );
}

export default Book
