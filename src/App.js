import React from 'react'
import Home from './component/home/Home'
import Navs from "./component/navbar/Navs";
import About from './component/about/About'
import Skill from './component/skill/Skill'
import Contact from "./component/contact/Contact";
import Project from './component/project/Project';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const App = () => {
  return (
    <>


  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About nav={<Navs/>}/>}/>
      <Route path="/Skills" element={<Skill nav={<Navs/>}/>}/>
      <Route path="/ContactMe" element={<Contact nav={<Navs/>}/>}/>
      <Route path="/Projects" element={<Project nav={<Navs/>}/>}/>
    </Routes>
  </BrowserRouter>


    
    </>
  )
}

export default App