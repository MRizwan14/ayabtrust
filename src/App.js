import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Activities from './Activities';
import Ongoing from './Ongoing';
import Upcoming from './Upcoming';
import GetHelp from './GetHelp';
import OfferHelp from './OfferHelp';
import Donate from './Donate';
import Volunteer from './Volunteer';
import Blog from './Blog';
import ContactUs from './ContactUs';
import Footer from './Footer'
import Donors from './Donors';
import Volunteers from './Volunteers';

function App() {
  return (
    <div className="App" style={{backgroundColor : ""}}>
      <Router>
      
      <Header/> 

      <Routes>

      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/activities' element={<Activities/>}/>
      {/* <Route exact path='/ongoing' element={<Ongoing/>}/>
      <Route exact path='/upcoming' element={<Upcoming/>}/>       */}
      <Route exact path='/get-help' element={<GetHelp/>}/>
      <Route exact path='/offer-help' element={<OfferHelp/>}/>
      <Route exact path='/donate' element={<Donate/>}/>
      <Route exact path='/volunteer' element={<Volunteer/>}/>
      <Route exact path='/blog' element={<Blog/>}/>
      <Route exact path='/contact-us' element={<ContactUs/>}/>
      <Route exact path='/donors' element={<Donors/>}/>
      <Route exact path='/volunteers' element={<Volunteers/>}/>

      </Routes>
      <Footer/>
      </Router>


      
      <div>
        
      </div>
      
    </div>
  );  
}

export default App;
