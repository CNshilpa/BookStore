import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import SignIn from '../../components/signin/signin'
import SignUp from '../../components/signup/SignUp'
import BookDetails from '../bookdetails/BookDetails'
import HomePage from '../home/HomePage'
import Lander from '../lander/Lander'

function Routers() {
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path='/' element={<Lander/>}/>
                <Route path='/signin' element={<SignIn/>}/> 
                <Route path='/signup' element={<SignUp/>}/> 
                <Route path='/homePage' element={<HomePage/>}/> 
                <Route path='/bookDetails' element={<BookDetails/>}/>  
            </Routes>
        </Router>
    </div>
  )
}

export default Routers