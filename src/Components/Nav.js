import React, {useState} from "react";
import {Link} from 'react-router-dom';
import shoppingCart from '../Images/Shoppingcart.png';
import Logo from '../Images/logo.png';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Sidebar} from './Sidebar';
import '../Css/Nav.css';
import Menu from './Menu';



function Nav(){
    const [sidebar, setSideBar] = useState(false);

    const showSidebar = () => setSideBar(!sidebar);

    return(
        
        <>
    <nav className="nav-main">
     <div className="burger-bar">
        <Link to="#" className="menu-bars icon-nav">
             <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
     </div>
     <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
         <ul className="nav-menu-items" onClick={showSidebar}>
             <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                     <AiIcons.AiOutlineClose/>
                 </Link>
            </li>
            {Sidebar.map((item,index)=>{
                return(
                    <li key={index} className={item.className}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                );
            })}
        </ul>
</nav>


    
                <ul className="nav-links">
                    <Link to='/' ><img src={Logo} alt="Logo" id="images-logo"/>
                    </Link>
                    
                    <Link  to='/Shoppingcart'>
                        <img src={shoppingCart} alt="Shopping-cart" id="images-shopping"/>
                       
                    </Link>
                    
                  
                </ul>

            </nav>
         </>   
    );
}

export default Nav