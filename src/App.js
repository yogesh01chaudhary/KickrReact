import './App.css';


//--------------------------------React Hooks--------------------------------------//
import { BrowserRouter,Routes, Route } from 'react-router-dom';


//--------------------------------Pages--------------------------------------//
import Navbar from './Component/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
