import './App.css';
// REACT ROUTER DOM ELEMENTS 
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// IMPORTED COMPONENTS 
import Home from './Components/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* ROUTES HOLDS ALL THE ROUTING DATA  */}
        <Routes>
          {/* ROUTE HOLDS DATA OF EACH INDIVIDUAL ROUTE */}
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
