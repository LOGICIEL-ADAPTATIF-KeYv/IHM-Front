import './App.css';
import Navbar from './components/Navbar';
import CreateObject from'./components/CreateObject';
import Object from './components/Object';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <div className='main-container'>
      <CreateObject className='createObject'/>
      <Object className='Object'/>
      </div>
    </div>
  );
}

export default App;
