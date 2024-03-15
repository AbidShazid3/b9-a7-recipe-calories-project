
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <div className='container mx-auto md:p-2 lg:px-7'>
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
    </>
  )
}

export default App
