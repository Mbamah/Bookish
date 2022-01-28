import React from 'react'
import Link from 'next/link';
import * as FeIcons from 'react-icons/fa'
const Footer = () => {
 return (
   <footer className="bg-white font-['Numans'] ">
     <div className="flex items-center container mx-auto py-4 px-6 justify-between ">
       &copy;2022 Bookish
       <div className="flex gap-5 items-center justify-center">
         <Link href="/" passHref>
           <FeIcons.FaFacebookF className="cursor-pointer" />
         </Link>
         <Link href="/" passHref>
           <FeIcons.FaInstagram className="cursor-pointer" />
         </Link>
         <Link href="/" passHref>
           <FeIcons.FaLinkedinIn className="cursor-pointer" />
         </Link>
         <Link href="/" passHref>
           <FeIcons.FaTwitter className="cursor-pointer" />
         </Link>
       </div>
     </div>
   </footer>
 );
}

export default Footer
