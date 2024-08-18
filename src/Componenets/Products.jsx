import React from 'react'
import { Link } from 'react-router-dom'

export  function Products({products}) {
  return (
    <div className=' HomePageProducts w-4/5 mx-auto'>
      <h2  className=' font-bold text-xl  mb-12'>Какую технику мы скупаем</h2>
      <div class=' conatiner grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mb-12'>
         {
            products.map((el) => <div key={el.id} >

            <div class="group relative  ">
                <img class="w-full object-cover h-56" src={'images/'+el.image} alt={el.title}  />
                <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-black-300 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                <Link key={el.id} to={'/post/'+ el.id} >
                  {el.title}
                </Link> 
                <h2 className="text-2xl text-white"> {el.title}</h2>
                </div>
              </div>
   
            </div>)
         }
      </div>

    </div>
  )
}
