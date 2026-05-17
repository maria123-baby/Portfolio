
import Home from './components/Home/Home';
import Project from './components/Project/Project';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Skill from './components/Skill/Skill';
import Navbar from './components/Navbar/Navbar';
import './App.css'
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  
  return (
       <Router>
        <Navbar/>
        <Routes>
           <Route exact path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
           <Route path='/Skill' element={<Skill/>}/>
           <Route path='/Project' element={<Project/>}/>
           <Route path='/Contact' element={<Contact/>}/>

        </Routes>
       </Router>
  )}
export default App;
