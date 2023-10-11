import './App.css'
import landing from "./assets/2acd881287e38f5e4d973300b7989ecc.jpg"
import Content from './components/Content'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
function App() {


  return (
    <>
      <div className='relative  w-screen h-screen '>
        <img src={landing} className='w-screen h-screen object-cover ' />

        <div className='h-screen w-screen absolute left-0 top-0 bg-gradient-to-t from-[#121212] from-5% overlay'></div>

        <Navbar />
        <Content />
      </div>
      
        <Menu />
     
    </>
  )
}

export default App
