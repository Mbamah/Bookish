import React from 'react'
import * as RiIcons from 'react-icons/ri'
import  {images}  from '../public/assets/';
import Image from 'next/image';
const Cludruns = () => {
 return (
   <section className="container mx-auto px-6  pt-12">
     <div>
       <h1 className="text-3xl font-['Numans'] text-center underline decoration-sky-500 decoration-4 decoration-wavy font-medium pb-3 uppercase">Club Runs </h1>
       <p className="font-['Nunito'] text-lg text-center">
         A space to pick up on your reading habit
       </p>
       <div className="main flex flex-col md:flex-row items-center  justify-evenly">
         <div className="text mt-6 space-y-7  font-['Nunito']  ">
           <p className="flex items-center gap-x-4 text-lg">
             {" "}
             <RiIcons.RiBookLine className="" /> For a start, one book would
             be picked for the month
           </p>
           <p className="flex gap-x-4 items-center text-lg">
             {" "}
             <RiIcons.RiBookLine className="" /> We would divide the number
             of pages of the book by 25 to get our page goals
           </p>
           <p className="flex items-start gap-x-4 text-lg">
             {" "}
             <RiIcons.RiBookLine className="" />
             We would read the resulting number of pages of the book every day
             of the 25 days
           </p>
           <p className="flex gap-x-4 items-center text-lg">
             {" "}
             <RiIcons.RiBookLine className="" />
             We would pick the next book after the 26th day.
           </p>
           <p className="flex gap-x-4  items-start text-lg">
             {" "}
             <RiIcons.RiBookLine className="" /> To stay connected as a club,
             clubbers would share their thoughts and questions on a regular
             basis.
           </p>
           <p className="flex gap-x-4 items-start text-lg">
             The last 5/6 days left
             of the month is for us to share our BOOK SUMMARY; what we have
             learnt and how the book has influenced us already.
           </p>
         </div>

         <Image
           src={images.girl}
           alt="girl"
           className="border-4 border-blue-700"
         />
       </div>
     </div>
   </section>
 );
}

export default Cludruns
