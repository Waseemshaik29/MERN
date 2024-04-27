import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import Home1 from "./pages/Home1";
import Login from './pages/Login';
import Login1 from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import States from './pages/States';
import Logout from './pages/Logout';
import AndhraPradesh from './pages/States/AndhraPradesh';
import Telangana from './pages/States/Telangana';
import TamilNadu from './pages/States/TamilNadu';
import Kerala from './pages/States/Kerala';
import Karnataka from './pages/States/Karnataka';
import Odisha from './pages/States/Odisha';
import  Gujarat from './pages/States/Gujarat';
import Places from './pages/Places';
import Charminar from './pages/Places/Charminar';
import TajMahal from './pages/Places/TajMahal';
import RedFort from './pages/Places/RedFort';
import IndiaGate from './pages/Places/IndiaGate';
import Register from './pages/Register';
import './App.css';


function App() {
  return (
    <div classname='Front'>
    <body>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home1" element={<Home1/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Login1" element={<Login1/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
        <Route path="/resetPassword" element={<ResetPassword/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/states" element={<States/>}/>
        <Route path="/places" element={<Places/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/" element={<Logout/>}/>
        <Route path="/ap" element={<AndhraPradesh/>}/>
        <Route path="/tel" element={<Telangana/>}/>
        <Route path="/tn" element={<TamilNadu/>}/>
        <Route path="/ker" element={<Kerala/>}/>
        <Route path="/kar" element={<Karnataka/>}/>
        <Route path="/od" element={<Odisha/>}/>
        <Route path="/gu" element={<Gujarat/>}/>
        <Route path="/ch" element={<Charminar/>}/>
        <Route path="/tm" element={<TajMahal/>}/>
        <Route path="/rf" element={<RedFort/>}/>
        <Route path="/ig" element={<IndiaGate/>}/>
        
      </Routes>
      </BrowserRouter>
    </body>
    </div>
  );
}



export default App;