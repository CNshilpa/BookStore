import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import SignIn from '../../components/signin/signin'
import SignUp from '../../components/signup/SignUp'
import Lander from '../lander/Lander'

function Routers() {
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path='/' element={<Lander/>}/>
                <Route path='/signin' element={<SignIn/>}/> 
                <Route path='/signup' element={<SignUp/>}/>    
            </Routes>
        </Router>
    </div>
  )
}

export default Routers