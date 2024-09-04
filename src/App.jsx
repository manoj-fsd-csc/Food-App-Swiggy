 import React from 'react'
import LandingPage from './vendorDashboard/pages/LandingPage'
import { Routes,Route } from 'react-router-dom'
import "./App.css"
import NotFound from './vendorDashboard/components/NotFound'
import Welcome from './vendorDashboard/forms/Welcome'

 
 const App = () => {
   return (
     <div>     
      <Routes>
        <Route path='/Welcome' element = {<Welcome/>}/>
        <Route path='/' element = {<LandingPage/>}/>
         <Route path='/*' element = {<NotFound/>}/>
      </Routes>
       
     </div>
   )
 }
 
 export default App