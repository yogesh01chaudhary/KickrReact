import './App.css';
//--------------------------------React Hooks--------------------------------------//
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import "aos/dist/aos.css";



//--------------------------------Pages--------------------------------------//
<<<<<<< HEAD
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/footer/Footer';
import GetStart from './Component/getStart/GetStart';
=======
import Home from './Pages/Home';



>>>>>>> 9e9f8cd01929eb2ac8b9d5471ab262a3da23fbf2

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          
        </Routes>
<<<<<<< HEAD
        <GetStart />
        <Footer />
=======
>>>>>>> 9e9f8cd01929eb2ac8b9d5471ab262a3da23fbf2
      </BrowserRouter>
      
    </div>
  );
}

export default App;
