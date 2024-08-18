import React from 'react'
import { Rating } from '@smastrom/react-rating'
import { useState } from 'react'
import '@smastrom/react-rating/style.css'

export default function Star() {
    const [rating, setRating] = useState(0)

    const [state, setState] = useState({
      review: '',
      rating: 0 // Initial value
    })
  
    function handleChange(selectedValue) {
      // 1. Logs the selected rating (1, 2, 3...)
      console.log(selectedValue)
  
      // 2. Do something with or without the value...
  
      // 3. Update Rating UI
      setState((prevState) => ({
        ...prevState,
        rating: selectedValue
      }))
      console.log(state)
  
    }
  return (
    <div  class="w-80">
          <Rating onChange={handleChange} value={state.rating} />
    </div>
  )
}
