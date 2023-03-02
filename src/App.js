import './App.css';
//--------------------------------React Hooks--------------------------------------//
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import "aos/dist/aos.css";



//--------------------------------Pages--------------------------------------//
import Home from './Pages/Home';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
