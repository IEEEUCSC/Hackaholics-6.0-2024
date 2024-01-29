import React from 'react';
import Footer from './Components/Footer/Footer';
import Prizes from './Components/Prizes/Prizes';
import './App.css';
import Navbar from './Components/NavBar/NavBar';
import FAQ from './Components/FAQ/FAQ';


function App() {
  return (
    <div className="content">
      <Navbar />
      <FAQ />
      <Prizes />
      <Footer />
    </div>
  );
}

export default App;
