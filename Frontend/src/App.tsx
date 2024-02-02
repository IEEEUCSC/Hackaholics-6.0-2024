// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Prizes from './Components/Prizes/Prizes';
import './App.css';
import Navbar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import FAQ from './Components/FAQ/FAQ';
import Sponsers from './Components/Sponsers/Sponsers';
import Timeline from './Components/Timeline/Timeline';
import Intro from './Components/Introduction/Intro';
import Registration from './Components/TeamRegistration/TeamRegi';
import ContactUs from './Components/ContactUs/ContactUs';


function App() {
  return (
    <div className="content">
      <Router>
        <Navbar />       
      <Routes>
        <Route path="/team" element={<Registration />} />
        
        <Route path="/*" element={
          <div>          
            <Home />
          <Intro />
        {/* <Sponsers /> */}
        <Timeline/>
        <FAQ /> 
        <Prizes />
        <ContactUs />
          </div>
        } />     
      </Routes>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
