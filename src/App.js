import './App.css'
import Members from './components/Members';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Contact from './components/Contact';
import Profile from './components/Profile';
import { Route, Routes } from 'react-router';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
          
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/aboutus' element={<About />} />
          <Route path='/members' element={<Members/>}/>
          <Route path='/events' element={<Events />} />
          <Route path='/contactus' element={<Contact/>} />
          <Route path='/profile' element={ <Profile />} />  
          <Route path='/login' element={ <Login />} />   
        </Routes>
     

    </div>
  );
}

export default App;
