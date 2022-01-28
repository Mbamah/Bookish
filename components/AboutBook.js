import * as BsIcons from 'react-icons/bs'
import Image from 'next/image';
import { images } from '../public/assets';
const AboutBook = () => {
 return (
   <section>
     <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-5/6">
       <div className="relative z-10 lg:py-8">
         <div className="relative h-64 lg:h-full">
           <img
             className="absolute inset-0 object-cover w-full h-full"
             src="https://www.hyperui.dev/photos/house-1.jpeg"
             //  src="/public/assets/images/book1.png"
             alt="book"
           />
         </div>
       </div>

       <div className="relative flex items-center bg-gray-900 lg:pl-4">
         <span className="absolute inset-y-0 hidden w-16 bg-gray-900 lg:block -left-16"></span>

         <div className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
           <h6 className='font-["Nunito"] bg-[#FEC702] my-6 w-28 p-1 text-center text-gray-900 rounded-full text-base'>
             About Book
           </h6>
           <h2 className="text-2xl font-medium font-['Numans'] text-white sm:text-5xl">
             Atomic Habits
           </h2>

           <p className="mt-4 text-white font-['Nunito']">
             Recursion is the process of defining a problem (or the solution to
             a problem) in terms of (a simpler version of) itself. For example,
             we can define the operation "find your way home" as: If you are at
             home, stop moving.
           </p>

           <a
             className="flex py-3 group space-x-1 mt-8 text-sm hover:text-white font-medium uppercase font-['Nunito'] text-[#FEC702] "
             href=""
           >
             <span>JOIN NOW</span>
             <svg
               className="w-5 h-5 ml-3 group-hover:translate-x-3 duration-300"
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
             >
               <path
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 stroke-width="2"
                 d="M17 8l4 4m0 0l-4 4m4-4H3"
               />
             </svg>
             {/* <span aria-hidden="true">&rarr;</span> */}
           </a>
         </div>
       </div>
     </div>
   </section>
 );
}

export default AboutBook
