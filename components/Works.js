const Works = () => {
 return (
   <section className="container  mx-auto px-6 py-12 ">
     <h1 className="text-center font-['Numans'] text-4xl pb-4 text-gray-900 ">
       How it works
     </h1>
     {/* cards */}
     <div className="grid md:grid-cols-3 gap-16 py-24">
       {/* card 1 */}
       <div className="bg-gray-900 text-white py-10 relative px-8 font-['Nunito']">
         <p>
           BB Agency is a strategic partner for fast-growing tech companies in
           need of a scalable website with modular CMS, a design system, and
           future-proof brand identity
         </p>
         <div className="border-red-800 bg-white top-0 text-gray-900 py-4 px-5 left-0 absolute shadow-lg -translate-y-9 -translate-x-9">
           <p className="font-['Numans'] text-lg font-medium">
             A book is picked
           </p>
         </div>
       </div>
       {/* card 2 */}
       <div className="bg-gray-100 py-10 relative px-8 font-['Nunito']">
         <p>
           BB Agency is a strategic partner for fast-growing tech companies in
           need of a scalable website with modular CMS, a design system, and
           future-proof brand identity
         </p>
         <div className="border-red-800 bg-white top-0 py-4 px-5 left-0 absolute shadow-lg -translate-y-9 -translate-x-9">
           <p className="font-['Numans'] text-lg font-medium">Read the book</p>
         </div>
       </div>
       {/* card 3 */}
       <div className="bg-[#fff1c0] py-10 relative px-8 font-['Nunito']">
         <p>
           BB Agency is a strategic partner for fast-growing tech companies in
           need of a scalable website with modular CMS, a design system, and
           future-proof brand identity
         </p>
         <div className="border-red-800 bg-white top-0 py-4 px-5 left-0 absolute shadow-lg -translate-y-9 -translate-x-9">
           <p className="font-['Numans'] text-lg font-medium">
             Discuss the book
           </p>
         </div>
       </div>
     </div>
   </section>
 );
}

export default Works
