import React from 'react';
import './App.css';
import Navbar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Prizes from './Components/Prizes/Prizes';
import Footer from './Components/Footer/Footer';

function App() {
    return (
        <div className='content'>

            <Navbar />
            <Home />
            <Prizes />
            <Footer />
        </div>
    );
}

export default App;
