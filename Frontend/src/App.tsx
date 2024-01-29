import React from 'react';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/NavBar/NavBar';
import Prizes from './Components/Prizes/Prizes';
import './App.css';

function App() {
  return (
   <div className='content'>
    <Navbar/>
    <Prizes />
    <Footer />
   </div>
  );
}

export default App;
