import React from 'react';
import './App.css';
import {BrowserRouter as Router,
  Routes,
  Route,} from 'react-router-dom';
import NavigationBar from './components/navbar';
import HomeApp from './components/home';
import About from './components/aboutMe';
import Projects from './components/projects';
import Contact from './components/contactMe';

const App: React.FC = () => {
  return (
    <Router>
      <>
      <div className="App">
      <nav>
      <NavigationBar/>
      </nav>
      <Routes>
      <Route path="/" element={<HomeApp/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Routes> 
    </div>
      </>
    </Router>
  );
  
}

export default App;
