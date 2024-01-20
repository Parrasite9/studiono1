import './App.css';
// REACT ROUTER DOM ELEMENTS 
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// IMPORTED COMPONENTS 
import Home from './Components/Home'
import TeamMember from './Components/TeamMemberPage/TeamMember';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* ROUTES HOLDS ALL THE ROUTING DATA  */}
        <Routes>
          {/* ROUTE HOLDS DATA OF EACH INDIVIDUAL ROUTE */}
          <Route path='/' element={<Home />} />
          <Route path='/meet-our-team/:id' element={<TeamMember />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
