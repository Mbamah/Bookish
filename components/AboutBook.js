import * as BsIcons from 'react-icons/bs'
import Image from 'next/image';
import { images } from '../public/assets';
const AboutBook = () => {
 return (
   <section className="bg-[#fff1c0]  ">
     <div className="container mx-auto py-12 max-w-3xl bg-gray-600 px-6 flex md:flex-row flex-col gap-8 items-center justify-between">
       <div>
         <Image src={images.book1} width={400} height={500} alt="girl" />

         {/* <Image
           src="/public/assets/images/book1.png"
           alt="book"
           width={400}
           height={400}
         /> */}
       </div>
       {/* text */}
       <div className="  ">
         <h6 className='font-["Nunito"] bg-[#FEC702] my-6 w-28 p-1 text-center text-white rounded-full text-base'>
           About Book
         </h6>
         <h1 className='font-["Numans"] text-5xl mb-5'>Atomic Habits</h1>
         <p className='font-["Nunito"] my-6  '>
           Recursion is the process of defining a problem (or the solution to a
           problem) in terms of (a simpler version of) itself. For example, we
           can define the operation "find your way home" as: If you are at home,
           stop moving.
         </p>
         <a
           href=""
           className='text-[#FEC702] flex items-center gap-3 uppercase font-["Nunito"] font-bold'
         >
           Join Now <BsIcons.BsArrowRightShort />
         </a>
       </div>
     </div>
   </section>
 );
}

export default AboutBook
