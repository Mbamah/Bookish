import React from 'react'
import Image from 'next/image'
import { images } from '../public/assets'
import * as VsIcons from 'react-icons/vsc'
const Rules = () => {
 return (
   <section className="container bg-white mx-auto px-6 py-12">
     <div className="">
       <h1 className="text-4xl underline pb-3 decoration-sky-500 decoration-4 font-medium  font-['Numans'] text-center decoration-wavy">
         Club Rules
       </h1>
       <div className="main flex flex-col md:flex-row gap-y-12  items-center justify-center">
         <div className="text mt-6 space-y-7  font-['Nunito'] ">
           <ul className="space-y-5   ">
             <li className="flex items-center gap-5 text-xl">
               <VsIcons.VscLaw /> We value respect and group engagement.
             </li>
             <li className="flex text-xl gap-5  items-start justify-items-start ">
               <VsIcons.VscLaw />
               <p>Open-mindedness is diamond.</p>
             </li>
             <li className="flex text-xl items-start gap-5 justify-items-start ">
               <VsIcons.VscLaw />
               <p> No racial, geographic discrimination.</p>
             </li>
             <li className="flex text-xl items-start gap-5  justify-items-start ">
               <VsIcons.VscLaw />
               <p> We share our knowledge, because that’s the whole point.</p>
             </li>
           </ul>
         </div>
         <Image src={images.girl} width={500} height={500} alt="girl" />
       </div>
     </div>
   </section>
 );
}

export default Rules
