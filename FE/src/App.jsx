import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Placeorder from './Pages/Placeorder/Placeorder'
import Cart from './Pages/Cart/cart'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'
import Verify from'./Pages/Verify/Verify'
import Myorders from './Pages/Myorders/Myorders'

const App = () => {
  const[showpopup,setShowpopup]=useState(false);
  return (
    <>
    {showpopup?<LoginPopup setShowpopup={setShowpopup}/>:<></>}
      <div className='app'>
        <Navbar  setShowpopup={setShowpopup}/>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/cart' element={<Cart></Cart>} />
          <Route path='/placeorder' element={<Placeorder></Placeorder>} />
          <Route path='/verify' element={<Verify/>}/>
          <Route path='/myorders' element={<Myorders/>}/>
        </Routes>

      </div>
      <Footer></Footer>

    </>
  )
}

export default App