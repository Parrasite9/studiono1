import './App.css';
// REACT ROUTER DOM ELEMENTS 
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// IMPORTED COMPONENTS 
import Home from './Components/Home'
import TeamMember from './Components/TeamMemberPage/TeamMember';
import AboutPage from './Components/HomePage/AboutPage';
import Privacy from './Components/Policies/Privacy';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* ROUTES HOLDS ALL THE ROUTING DATA  */}
        <Routes>
          {/* ROUTE HOLDS DATA OF EACH INDIVIDUAL ROUTE */}
          <Route path='/' element={<Home />} />
          <Route path='/meet-our-team/:id' element={<TeamMember />} />
          <Route path='/about-us' element={<AboutPage />} />
          <Route path='privacy-policy' element={<Privacy />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
