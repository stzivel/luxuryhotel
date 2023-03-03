import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import About from './components/aboutus/About';
import Rooms from './components/rooms/Rooms';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <Rooms/>
      <About/>
      
    </div>
  );
}

export default App;
