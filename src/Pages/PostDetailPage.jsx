
import { useParams } from 'react-router-dom'
import axios from "axios"
import { useState, useEffect } from 'react'
import { useRef } from "react";
import React from 'react'
import { useNavigate } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";
import PostSlider from '../Componenets/PostSlider';
import Star from '../Componenets/Star';
import { Footer } from '../Componenets/Footer';

export  function PostDetailPage() {


  const {id}=useParams();
  const [post, setPost] = useState([]);
  const [slides, setSlides] = useState([]);
  const [liks, setLiks] = useState([]);
  const btnRef = useRef();

  useEffect(()=>{
    loadPost();
 
  }, []);


  const loadPost = async()=>{
    const response = await axios.get('http://localhost:3000/posts/'+id);
    setPost(response.data);
    setSlides(response.data.slide_imgs);
  }


  const navigate = useNavigate();

  // const changeHandlder  = (target)=>{
  //   setPost({...post, [likes]:"2"});
  // }


  const submitHandler = async (e)=>{
    e.preventDefault();
    e.target.style.color = '#ccc'
      console.log(e);
      const liks= Number(post.likes)+1;
      const postnew ={
      "title": post.title,
      "content":post.content,
      "slide_imgs": [
        "img1.jpg",
        "img2.jpg",
        "img1.jpg"
      ],
      "image": post.image,
      "likes": liks,
      "reting":post.reting,
      "count_voits":post.count_voits
        }
    // setPost({...post, likes:"3"});
    console.log(postnew);
     await axios.put('http://localhost:3000/posts/'+id, postnew);
    loadPost();
    btnRef.current.setAttribute("disabled", "disabled");
  }

  
    return (
    <div> 
    <PostSlider slides = {slides}/> 
    <h2>{post.title}</h2>
    <p>{post.content}</p>
    <p>{post.likes}</p>
   
    <button  ref={btnRef} onClick={submitHandler}><i className="fa fa-thumbs-up" aria-hidden="true"></i></button>
    <Star />
    <Footer/>
    </div>
    
  )
}
