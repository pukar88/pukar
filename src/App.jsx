import './App.css'
import About from './components/about'
import { Route, Routes } from 'react-router-dom'
import Location from './components/LOCATION.JSX'
import Contact from './components/contact/contact'
import Counter from './components/Counter/Counter'
import Counter2 from './components/Counter/Counter2'
import Navbar from './components/Navbar/Navbar'
import Project from'./components/projrct/project'
import Home from './components/Home/Home'
import Login from './components/Login'
import Product from './components/Product/Product'
function App() {
  function handleClick(){
    console.log("button is clicked")
  }



  return (
    <>
   <Navbar/> 
     {/* <div className='container'>
      {/* /* <h1>my protfolio</h1>
      <p>my name is Pukar Bartaula.</p>



      <button
      id='btn'
      onClick={handleClick}>
        click me</button> */ }


    {/* </div> */} 
    <Routes>
      <Route path='/contact' element={<Contact/>}/>
       <Route path='/' element={<Home/>}/>
        <Route path='Project' element={<Project/>}/>
         <Route path='/about' element={<About/>}/>
                  <Route path='/login' element={<Login/>}/>
                           <Route path='/Product' element={<Product/>}/>


    </Routes>
  
  
    </>
  )
}

export default App