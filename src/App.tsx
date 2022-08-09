import React from 'react';
import './App.css';
import NavigationBar from './components/navbar';
import HomeApp from './components/home';
import About from './components/aboutMe';
import Projects from './components/projects';
import Contact from './components/contactMe';

const App: React.FC = () => {
  return (
    <>
    <div className="App">
      <nav>
      <NavigationBar/>
      </nav>
        <HomeApp/>
        <About/>
        <Projects/>
        <Contact/>
    </div>
    </>
  );
  
}

export default App;
