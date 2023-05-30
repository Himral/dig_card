import logo from './logo.svg';
import './App.css';
import React  from 'react';
import About from './components/About'
import Header from './components/Header'
import Buttons from './components/Buttons'
import Interests from './components/Interests'
import Socials from './components/Socials'
function App() {
  return (
    <div className="App">
      <div className='MainContent'>
          <Header/>
          <Buttons />
          <About/>
          <Interests/>
          
      </div>
      <Socials/>
    </div>
  );
}

export default App;
