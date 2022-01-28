import React from 'react'
import Image from 'next/image'
import { images } from '../public/assets'
import * as VsIcons from 'react-icons/vsc'
const Rules = () => {
 return (
   <section>
     <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
       <h1 className='text-center font-["Numans"] text-4xl font-medium'>
         Club Rules
       </h1>
       {/* <div class="grid grid-cols-1   gap-y-8 gap-x-16 lg:h-screen lg:items-center"> */}
       <div className=" mx-auto font-['Nunito'] space-y-4 grid sm:grid-cols-2 sm:gap-7 grid-col-1  text-center lg:text-left lg:py-24">
         {/* start */}

         <div className="block  p-6 bg-white border space-y-4 border-gray-100 shadow-sm rounded-xl hover:shadow-lg">
           <span className="bg-gray-800 rounded-lg">
             <svg
               className="w-6 h-6"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 20 20"
               fill="currentColor"
             >
               <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
             </svg>
           </span>

           <h5 className="mt-1 text-xl font-meduim text-gray-900">
             We value respect and group engagement.
           </h5>
         </div>

         <div className="block p-6 bg-white border space-y-4 sm:translate-y-6 border-gray-100 shadow-sm rounded-xl hover:shadow-lg">
           <span className="bg-gray-800 rounded-lg">
             <svg
               className="w-6 h-6"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 20 20"
               fill="currentColor"
             >
               <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
             </svg>
           </span>

           <h5 className="mt-1 text-xl font-meduim text-gray-900">
             Open-mindedness is diamond.
           </h5>
         </div>
         <div className="block p-6 bg-white border space-y-4 sm:translate-x-5 border-gray-100 shadow-sm rounded-xl hover:shadow-lg">
           <svg
             className="w-6 h-6"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 20 20"
             fill="currentColor"
           >
             <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
           </svg>

           <h5 className="mt-1 text-xl font-meduim text-gray-900">
             We share our knowledge, because that’s the whole point.
           </h5>
         </div>
         <div className="block p-6 bg-white border space-y-4 sm:translate-y-5 sm:translate-x-5 border-gray-100 shadow-sm rounded-xl hover:shadow-lg">
           <span className="bg-gray-800 rounded-lg">
             <svg
               className="w-6 h-6"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 20 20"
               fill="currentColor"
             >
               <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
             </svg>
           </span>

           <h5 className="mt-1 text-xl font-meduim text-gray-900">
             No racial, geographic discrimination.
           </h5>
         </div>
         {/* end */}
       </div>
     </div>
     {/* </div> */}
   </section>
 );
}

export default Rules
