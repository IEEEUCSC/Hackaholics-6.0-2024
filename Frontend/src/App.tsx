import React from 'react';
import Footer from './Components/Footer/Footer';
import Prizes from './Components/Prizes/Prizes';
import './App.css';
import Navbar from './Components/NavBar/NavBar';
import FAQ from './Components/FAQ/FAQ';
import Sponsers from './Components/Sponsers/Sponsers';


function App() {
  return (
    <div className="content">
      <Navbar />
      <Sponsers />
      <FAQ />
      <Prizes />
      <Footer />
    </div>
  );
}

export default App;
