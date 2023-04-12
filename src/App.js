import logo from './logo.svg';
import './App.css';
import About from './components/About'
import Header from './components/Header'
import Buttons from './components/Buttons'
import Interests from './components/Interests'
function App() {
  return (
    <div className="App">
      <div className='MainContent'>
          <Header/>
          <Buttons />
          <About/>
          <Interests/>
      </div>
      
    </div>
  );
}

export default App;
