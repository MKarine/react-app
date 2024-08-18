export function Footer() {
   return (
     <footer className="bg-gray-900 mt-50">
       <div className=" container mx-auto max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6  lg:pt-24">
         <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
           <div>
             <div className="flex justify-center text-teal-300 sm:justify-start">
             <div className="shrink-0">
                <img className="h-12 w-12" src="/images/logo.jpg" alt="ChitChat Logo" />
              </div>
             </div>
 
             <p className="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-400 sm:max-w-xs sm:mx-0 sm:text-left" >
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
               consequuntur amet culpa cum itaque neque.
             </p>
           </div>
 
           <div className=" ">
             
               <ul className="space-y-4 text-sm md:float-right md:text-right  ">
                 <li>      
                     <p className="text-lg font-medium text-white flex items-center justify-center sm:justify-start gap-1.5 group ">Contact Us</p></li>
                 <li>
                   <a
                   className="flex items-center justify-center sm:justify-start gap-1.5 group"
                     href="/">       
                      <i className='fa fa-envelope text-white transition group-hover:text-white/75'></i>
                     <span className="text-white transition group-hover:text-white/75">
                       john@doe.com
                     </span>
                   </a>
                 </li>
 
                 <li>
                   <a
                     className="flex items-center justify-center sm:justify-start gap-1.5 group"
                     href="/"
                   >
                
                    <i className='fa-solid fa-phone text-white transition group-hover:text-white/75'></i>
                     <span className="text-white transition group-hover:text-white/75">
                       0123456789
                     </span>
                   </a>
                 </li>
 
                 <li
                   className="flex items-start justify-center gap-1.5 sm:justify-start"
                 >
                    <i className='fa fa-map-marker text-white transition group-hover:text-white/75'></i>
 
                   <address className="-mt-0.5 not-italic text-white">
                     213 Lane, London, United Kingdom
                   </address>
                 </li>
               </ul>
             
           </div>
         </div>
 
         <div className="pt-6 mt-12 border-t border-gray-800">
           <div className="text-center sm:flex sm:justify-between sm:text-left">
 
             <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
               &copy; 2022 Company Name
             </p>
           </div>
         </div>
       </div>
     </footer>
   )
 }