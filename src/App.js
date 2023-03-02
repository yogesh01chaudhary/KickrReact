import './App.css';
import "aos/dist/aos.css";


//--------------------------------React Hooks--------------------------------------//
import { BrowserRouter,Routes, Route } from 'react-router-dom';


//--------------------------------Pages--------------------------------------//
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/footer/Footer';
import GetStart from './Component/getStart/GetStart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}></Route>
          
        </Routes>
        <GetStart />
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
