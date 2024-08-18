import React from 'react'

export  function SendPhoneNumber() {
  return (
   <div className='SendPhoneNumber w-full h-[600px] bg-center bg-no-repeat bg-cover relative mx-auto mt-20'
   style={{backgroundImage: `url('${process.env.PUBLIC_URL + '/images/homepage.jpg'}')`}}>
   <h1 className=' absolute -translate-y-2/4  -translate-x-2/4 left-2/4 top-20 text-[--white] text-3xl'>Выкуп и ремонт техники Apple</h1>
   <div className='absolute -translate-y-2/4  -translate-x-2/4 top-2/4 p-10  left-2/4 bg-[--black] rounded-md'>
     <p className='text-base font-bold m-0 text-[--white]'>Хотите продать или купить б/у цифровую технику Apple?</p>
     <p className='text-base font-bold m-0 text-[--white]'>Оставьте свой номер телефона, мы вам перезвоним</p>
     <form>
       <div className=' flex justify-between my-4  mx-0'>
       <input className='py-2 px-3 rounded-md' type='text' placeholder='Name' ></input>
       <input className='py-2 px-3 rounded-md' type='tel' placeholder='+7(___)___ - ____-____' ></input>
       </div>
       <button className='block mx-auto py-1 px-6 rounded-md bg-white' type='submit'>SEND</button>
     </form>
   </div>
 </div>
  )
}
