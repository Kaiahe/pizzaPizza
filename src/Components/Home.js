import React from 'react';
import '../App.css';
import '../Css/Home.css';
import pizza from '../Images/pizza.jpeg';
import drivingCar from '../Images/drivingCar.png';
import {Link} from 'react-router-dom';



function Home(){

    return(
        
        <div className="container">

            <div className="news news1">
               <Link to='/Menu'  id="order-id"> <h3>Order your pizza or pasta here</h3> </Link>
    

            </div>
            <div className="news news2">
            <h3>Student?</h3>
            <p>Get 20% off!</p>
            <p>Get 20% off!</p>
            <p>Get 20% off!</p>
            <p>Get 20% off!</p>
            <p>Get 20% off!</p>
        
            </div>
            <div className="news news3">
            <h3>News</h3>
            <h4>Pizza Bellarito</h4>
            <p>With golden olives, and crispy Ritz crackers.</p>
            <img src={pizza} alt="pizza" id="pizza-bellarito"></img>
            </div>
            <div className="news news4">
            <h3>Free delivery</h3>
            <p>Order for 300kr and get home delivery for free</p>
            <img src={drivingCar} alt="driving-car" id="driving-car"></img>

            </div>
        
            
            
            
        </div>

    );
}

export default Home;
