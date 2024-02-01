import Footer from './Components/Footer/Footer';
import Prizes from './Components/Prizes/Prizes';
import './App.css';
import Navbar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home'
import FAQ from './Components/FAQ/FAQ';
import Sponsers from './Components/Sponsers/Sponsers';
import Timeline from './Components/Timeline/Timeline';
import Home from './Components/Home/Home';
import Intro from './Components/Introduction/Intro';


function App() {
  return (
    <div className="content">
      <Navbar />
      <Home />
      <Intro />
      <Sponsers />
      <Timeline/>
      <FAQ /> 
      <Prizes />
      <Footer />
    </div>
  );
}

export default App;
