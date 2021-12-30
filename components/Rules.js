import React from 'react'
import Image from 'next/image'
import { images } from '../public/assets'
const Rules = () => {
 return (
   <section className="container bg-white mx-auto px-6 py-12">
     <div className="">
       <h1 className="text-3xl underline pb-3 decoration-sky-500 decoration-4 font-medium uppercase font-['Numans'] text-center decoration-wavy">
         Club Rules
       </h1>
       <h3 className="font-['Nunito'] text-lg text-center">
         You would share your Reading
       </h3>
       <div className="main flex flex-col md:flex-row items-center  justify-evenly">
         <div className="text">
           <p>We value respect and group engagement.</p>
           <p>
             Open-mindedness is diamond. No racial, geographic discrimination.
           </p>
           <p>We share our knowledge, because that’s the whole point.</p>
         </div>
         <Image src={images.girl} alt="rules" />
       </div>
     </div>
   </section>
 );
}

export default Rules
