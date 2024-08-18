import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import '../scss/Slider.scss';

export default function PostSlider({slides}) {
  const [currentSlide, setCarrentSlides] = useState(1);
  const [visible,setVisible] = useState(true);

  useEffect(()=>{
    const interval = setInterval(()=>{
        nextSlide();
    }, 7000);

    return () => clearInterval(interval);
}, [currentSlide]);

const nextSlide = () =>{
    if(currentSlide !== slides.length){
        setCarrentSlides(currentSlide + 1);
    }else{
        setCarrentSlides(1);
    }

};
const prevSlide =() =>{
    if(currentSlide !== 1){
        setCarrentSlides(currentSlide - 1);
    }else{
        setCarrentSlides(slides.length);
    }

};

const moveCircle = (index) =>{
    setCarrentSlides(index);

};

  return (
 
     <div className="Slider">
     {
         slides.map((obj, index)=>{
             return(
              // <img  alt="image 1" className="h-full w-full object-cover" src={'/images/'+img}/>
                     <div 
                          style={{backgroundImage : `url('/images/${obj}')`}}
                          className={currentSlide === (index +1) ?'slide active': 'slide'}
                     >{obj}
                        
                         </div>
                 )
         })
      }
         <button onClick={nextSlide} className="btn-slide next">
         <i class="fa-solid fa-chevron-right"></i>
         </button>
         <button onClick={prevSlide} className="btn-slide prev">
         <i class="fa-solid fa-chevron-left"></i>
         </button>

         <div className="container-circle">
             {slides.map((obj,index) => (
                     <div
                     onClick={()=>moveCircle(index +1)}
                     className={currentSlide === (index + 1) ? 'circle active' :'circle'} 
                     />
                 ))

             }

         </div>
     
 </div>
  )
}
