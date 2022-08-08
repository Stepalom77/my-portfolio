import React from 'react';
import './App.css';
import NavigationBar from './components/navbar';
import HomeApp from './components/home';

const App: React.FC = () => {
  return (
    <>
    <div className="App">
      <nav>
        <NavigationBar/>
      </nav> 
      <div>
        <HomeApp/>
      </div>
    </div>
    </>
  );
  
}

export default App;
