import React from 'react'
import Image from 'next/image'
// import { images } from '../public/assets'
import * as VsIcons from 'react-icons/vsc'
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
       <div className="main flex flex-col md:flex-row gap-12 items-center justify-evenly">
         <div className="text ">
           <ul className="space-y-3   ">
             <li className="flex items-center text-xl">
               <VsIcons.VscLaw /> We value respect and group engagement.
             </li>
             <li className="flex text-xl items-start justify-items-start ">
               <VsIcons.VscLaw />
               <p>
                 Open-mindedness is diamond. No racial, geographic
                 discrimination.
               </p>
             </li>
             <li className=" flex text-xl">
               <VsIcons.VscLaw />
               {/* We share our knowledge, because that’s the whole point. */}
             </li>
             <li className=" flex text-xl ">
               <VsIcons.VscLaw />
               <p>
                 {/* We share our knowledge, because that’s the whole point. */}
               </p>
             </li>
             <li className=" flex text-xl">
               <VsIcons.VscLaw />
               {/* We share our knowledge, because that’s the whole point. */}
             </li>
             <li className=" flex text-xl">
               <VsIcons.VscLaw />
               {/* We share our knowledge, because that’s the whole point. */}
             </li>
             <li className=" flex text-xl">
               <VsIcons.VscLaw />
               {/* We share our knowledge, because that’s the whole point. */}
             </li>
           </ul>
         </div>
         <div className="border-red-500 border-2">
           <Image src="/public/assets/images/girl.svg" alt="rules" layout='fill' />
         </div>
       </div>
     </div>
   </section>
 );
}

export default Rules
