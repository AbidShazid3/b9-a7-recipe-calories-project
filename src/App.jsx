
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Blogs from './components/Blogs/Blogs'
import Carts from './components/Carts/Carts'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleWantCook =(blog)=>{
    console.log('cook click');
    setBookmarks([...bookmarks, blog]);
  }


  return (
    <>
      <div className='container mx-auto md:p-2 lg:px-7'>
        <Navbar></Navbar>
        <Banner></Banner>
        <div>
          <div className='text-center mt-24'>
            <h1 className='text-4xl font-semibold mb-2'>Our Recipes</h1>
            <p>The recipes you’ll find here are inspired by local, seasonal ingredients, made from scratch, and either <br /> created by us or adapted from recipes that have inspired us.</p>
          </div>
          <div className='md:flex lg:flex mt-10 gap-7'>
            <Blogs handleWantCook={handleWantCook}></Blogs>
            <Carts bookmarks={bookmarks}></Carts>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
