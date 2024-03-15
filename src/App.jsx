
import './App.css'
import Banner from './components/Banner/Banner'
import Blogs from './components/Blogs/Blogs'
import Carts from './components/Carts/Carts'
import Navbar from './components/Navbar/Navbar'

function App() {

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
          <div>
            <Blogs></Blogs>
            <Carts></Carts>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
