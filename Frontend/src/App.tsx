// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Prizes from './Components/Prizes/Prizes';
import './App.css';
import Navbar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import FAQ from './Components/FAQ/FAQ';
// import Sponsers from './Components/Sponsers/Sponsers';
import Timeline from './Components/Timeline/Timeline';
import Intro from './Components/Introduction/Intro';
import Registration from './Components/TeamRegistration/TeamRegi';
import ContactUs from './Components/ContactUs/ContactUs';
import Card from './Components/Card/Card';
import Particles from './Components/Particles/ParticleDesign';
import "@fontsource/ibm-plex-mono"


function App() {
  return (
    <div className="content">
        <Navbar />       
      <Routes>
        <Route path="/team" element={<Registration />} />
        
        <Route path="/*" element={
          <div>     
            <Particles />     
            <Home />
          <Intro />
        {/* <Sponsers /> */}
        <Timeline/>
        <FAQ /> 
        <Prizes />
        <Card />
       <ContactUs />
          </div>
        } />     
      </Routes>
      <Footer />
    </div>
  );
}

export default App;