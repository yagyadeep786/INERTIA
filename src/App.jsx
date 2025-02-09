import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Gallery from './pages/Gallery'
import Events from './pages/Events';
import Team from './pages/Team';
import Sponsors from './pages/Sponsors';
import Contact from './pages/Contact';
import Speaker from './pages/Speaker';
import Workshop from './pages/Workshop';
import EsportsTournament from './pages/EsportsTournament';
import WorkshopBRIDS25 from './pages/WorkshopBRIDS25';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/speaker" element={<Speaker />}/>
          <Route path="/workshop" element={<Workshop />}/>
          <Route path="/freefire" element={<EsportsTournament />} />
          <Route path="/brids" element={<WorkshopBRIDS25 />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;