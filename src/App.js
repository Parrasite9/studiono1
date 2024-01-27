import './App.css';
// REACT ROUTER DOM ELEMENTS 
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// IMPORTED COMPONENTS 
import Home from './Components/Home'
import TeamMember from './Components/TeamMemberPage/TeamMember';
import AboutPage from './Components/HomePage/AboutPage';
import Privacy from './Components/Policies/Privacy';
import Terms from './Components/Policies/Terms';
import ContactUs from './Components/ContactUs';

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
          <Route path='/privacy-policy' element={<Privacy />} />
          <Route path='/terms-of-service' element={<Terms />} />
          <Route path='/contactUs' element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
