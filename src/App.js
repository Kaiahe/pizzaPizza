import './App.css';
import React from 'react';
import Home from './Components/Home';
/*import Menu from './Components/Menu';*/
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Shoppingcart from './Components/Shoppingcart';
import Confirmation from './Components/Confirmation';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import MenuRender from './Components/MenuRender';



function App() {



 return (
   <div className="page-container">
     <div className="content-wrap">
    <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>} />
          
          <Route path="/Menu" element={<MenuRender/>} />
          <Route path="/Shoppingcart" element={<Shoppingcart/>}/>
          <Route path="/Confirmation" element={<Confirmation/>}/>
       </Routes>
    </Router>
    </div>
     <Footer/>
    </div>
       /*<Route path="/Menu" element={<Menu/>}/> */
    
  );
}

export default App;
