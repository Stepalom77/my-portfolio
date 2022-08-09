import React from 'react';
import './App.css';
import NavigationBar from './components/navbar';
import HomeApp from './components/home';
import About from './components/aboutMe';

const App: React.FC = () => {
  return (
    <>
    <div className="App">
      <nav>
        <NavigationBar/>
      </nav>
        <HomeApp/>
        <About/>

    </div>
    </>
  );
  
}

export default App;
