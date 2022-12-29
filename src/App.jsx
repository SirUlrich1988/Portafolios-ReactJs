import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Navbar from './components/navigate/Navbar'
import Home from './components/pages/Home'
import AboutMe from './components/pages/AboutMe'
import Skills from './components/pages/Skills'
import Proyects from './components/pages/Proyects'
import Contact from './components/pages/Contact'
import './App.css'


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/aboutMe' element={<AboutMe/>} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/proyects' element={<Proyects/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
