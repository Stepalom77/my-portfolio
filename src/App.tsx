import React from 'react';
import './App.css';
import NavigationBar from './components/navbar';

const App: React.FC = () => {
  return (
    <div className="App">
      <nav>
        <NavigationBar/>
      </nav> 
    </div>
  );
}

export default App;
