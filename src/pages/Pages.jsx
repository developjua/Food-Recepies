import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import {Route ,Routes,useLocation} from "react-router-dom"
import SearchResult from './SearchResult'
import Recipe from './Recipe'
import {AnimatePresence} from 'framer-motion'

export default function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
     <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Home/>}/>
      <Route path='/cuisine/:type' element={<Cuisine/>}/>
      <Route path='/searched/:search' element={<SearchResult/>}/>
      <Route path='/recipe/:name' element={<Recipe/>} />
    </Routes>   
    </AnimatePresence> 
  
  )
}
