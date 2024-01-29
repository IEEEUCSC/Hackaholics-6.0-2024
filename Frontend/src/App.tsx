import React from 'react';
import Footer from './Components/Footer/Footer';
import Navbar from '../src/Components/NavBar/NavBar';
import Home from './Components/Home/Home';
// import Test from './Components/Home/test'
import './App.css';

function App() {
  return (
   <div className='content'>
    <Navbar />
    <Home />
    <Footer />
 
    
   
   </div>
  );
}

export default App;
