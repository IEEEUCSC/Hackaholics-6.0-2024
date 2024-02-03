// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Prizes from './Components/Prizes/Prizes';
import './App.css';
import Navbar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import FAQ from './Components/FAQ/FAQ';
import Timeline from './Components/Timeline/Timeline';
import Intro from './Components/Introduction/Intro';
import Registration from './Components/TeamRegistration/TeamRegi';
import ContactUs from './Components/ContactUs/ContactUs';
import Sponsers from './Components/Sponsers/Sponsers';
import Card from './Components/Card/Card';
import ParticleDesign from './Components/Particles/ParticleDesign';


function App() {
  return (
    <div className="content">
      <Navbar />
 
  
          <div>
            <Home />
            <ParticleDesign />
            <Intro />
            <Timeline />
            <FAQ />
            <Prizes />
            <Card />
            <Sponsers />
            <ContactUs />
          </div>



      <Footer />
    </div>
  );
}

export default App;