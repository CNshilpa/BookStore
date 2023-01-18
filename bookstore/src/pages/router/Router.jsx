import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import MyCart from '../../components/mycart/MyCart'
import OrderPlaced from '../../components/orderplaced/OrderPlaced'
import WishList from '../../components/wishlist/WishList'
import HomePage from '../home/HomePage'
import Lander from '../lander/Lander'

function Routers() {
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path='/' element={<Lander/>}/>
                <Route path='/homePage' element={<HomePage/>}/> 
                <Route path='/myCart' element={<MyCart/>}/>  
                <Route path='/orderPlaced' element={<OrderPlaced/>}/> 
                <Route path='/wishList' element={<WishList/>}/>  
            </Routes>
        </Router>
    </div>
  )
}

export default Routers