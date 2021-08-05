import './components/topbar/Topbar'
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro'
import Portafolio from './components/portafolio/Portafolio'
import Works from './components/works/Works'
import Testimonials from './components/testimonials/Terstimonials'
import Contact from './components/contact/Contact'
import Menu from './components/menu/Menu'
import './App.scss'
import {useState} from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Topbar>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro></Intro>
        <Portafolio></Portafolio>
        <Works></Works>
        <Testimonials></Testimonials>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
