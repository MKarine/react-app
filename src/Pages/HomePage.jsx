import React from 'react'
import { Products } from '../Componenets/Products'
import { Footer } from '../Componenets/Footer'
import { useState} from 'react'
import axios from 'axios';
export function HomePage({products}) {
  

  return (
    <div className='HomePage'>
      <Products products = {products}/>
      <Footer/>
    </div>
 
  )
}
