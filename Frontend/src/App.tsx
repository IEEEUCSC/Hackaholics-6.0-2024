import React from 'react';
import Footer from './Components/Footer/Footer';
import Prizes from './Components/Prizes/Prizes';
import FAQ from './Components/FAQ/FAQ';
import './App.css';

function App() {
  return (
   <div className='content'>
    <FAQ />
    <Prizes />
    <Footer />
   </div>
  );
}

export default App;
