
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Blogs from './components/Blogs/Blogs'
import Carts from './components/Carts/Carts'
import Navbar from './components/Navbar/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleWantCook = (blog) => {
    const isExist = bookmarks.find(item => item.recipe_id === blog.recipe_id);
    if (!isExist) {
      setBookmarks([...bookmarks, blog]);
    }
    else {
      toast("Already exist");
    }

  }

  const handleCartDelete= id=>{
    const newCart = bookmarks.filter(item=> item.recipe_id != id);
    setBookmarks(newCart);
  }


  return (
    <>
      <div className='container mx-auto p-2 md:p-2 lg:px-7'>
        <Navbar></Navbar>
        <Banner></Banner>
        <div>
          <div className='text-center mt-24'>
            <h1 className='text-4xl font-semibold mb-2'>Our Recipes</h1>
            <p>The recipes you’ll find here are inspired by local, seasonal ingredients, made from scratch, and either <br /> created by us or adapted from recipes that have inspired us.</p>
          </div>
          <div className='md:flex lg:flex mt-10 gap-7'>
            <Blogs handleWantCook={handleWantCook}></Blogs>
            <Carts bookmarks={bookmarks} handleCartDelete={handleCartDelete}></Carts>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  )
}

export default App
