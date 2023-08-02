import './App.css';
import HeaderBanner from './Carousel/HeaderBanner';
import {BrowserRouter as Router  ,Routes , Route} from "react-router-dom"
import Navbar from './Components/Navbar';
import OccasionHome from './Components/OccasionHome';
import Venue from './Pages/Venue';
import Customer from './Pages/Customer';
import SyloSelect from './Pages/SyloSelect';
import Budget from './Pages/Budget';
import Footer from './Components/Footer';
function App() {
  return (
    <Router>
    <Navbar/>
    <HeaderBanner/>
    <OccasionHome/>
    <Venue/>
    <SyloSelect/>
    <Customer/>
    <Budget/>
    <Footer/>
    </Router>
      
  );
}

export default App;
