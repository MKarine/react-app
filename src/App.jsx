import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './Pages/HomePage'
import { PostDetailPage } from './Pages/PostDetailPage';
import { Header } from './Componenets/Header';

// import { Footer } from './Componenets/Footer';


export  function App() {
 

  const [navbar, setNavbar] = useState ([
    {id:1, title:'Home', route: '/'}

  ])


   

  const [posts, setPosts] = useState([]);
  // const navigate = useNavigate();


  useEffect(()=>{
    loadPosts();
 
  }, []);


  const loadPosts = async()=>{
    const response = await axios.get('http://localhost:3000/posts/');
    setPosts(response.data);
  }

  return (
    <div className='App'>
       
     {navbar && <Header navbar= {navbar}/>}  
      <main>
        <Routes>
          <Route path='/' element = {<HomePage products= {posts}/>}/>
          <Route path='/post/:id' element={<PostDetailPage/>} />
          <Route path='*' element = {<Navigate to='/'/>}/>
        </Routes>

      </main>
     

    </div>
  )
}
