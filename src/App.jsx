import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import BriefCase from './components/briefcase/BriefCase'
import Navbar from './components/navigate/Navbar'
import AboutMe from './components/pages/AboutMe'
import Skills from './components/pages/Skills'
import Proyects from './components/pages/Proyects'
import Contact from './components/pages/Contact'


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
      </Router>
    </div>
  )
}

export default App
