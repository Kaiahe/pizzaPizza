import React from "react";
import {Link} from 'react-router-dom';
import '../App.css';
import '../Css/Shoppingcart.css';
import Vipps from '../Images/vipps.png';
import Truck from '../Images/truck.svg';
import PayPal from '../Images/PayPal.png';
import mapPin from '../Images/mapPin.svg';
import creditcard from '../Images/creditcard.svg';
import Menu from '../Components/Menu'



function Shoppingcart({cart, removeFromCart}) {

  

  return (
    
   
    <div class="grid-container">
        
        {/* <div className="item">
            Cart
            {cart.map((item) => {
                return <div className="item-container" key={item.id}>
                     <img className="menu-img" src={item.image} alt=""/>
                <h3 className="item-title">{item.title} </h3>
                <p className="item-price">{item.price} kr</p>
                <button onClick={()=>removeFromCart(item)} className="remove-btn">Remove</button> 
                
                </div>;
            })}
            </div> */}
            
            
        
        
      

        <div id="chooseMe">
          <h1>Choose an option</h1>
        </div>
        <div id="delivery-option1">
        <img id="pickup" src={mapPin} alt="map-pin"/>
          <h2>I'm picking it up myself</h2>
          <h3>0kr</h3>
          
        </div>

        <div id="delivery-option2">
        <img id="truck" src={Truck} alt="delivery-truck"/>
          <h2>Home delivery</h2>
          <h3>50kr</h3>
        </div>
        <div id="button1">
        <button id="buttonsRed">Back to shoppingcart</button>
        </div>

        

      <div id="delivery">
     <h2 id="deliveryID">Delivery address</h2>
     <p>Name:
     <input id="nameInput" type="text"></input>
     </p>
     

     <p>Street and housenumber:
     <input id="streetInput" type="text"></input>
     </p>
     

     <p>Zip code:
     <input id="zipInput" type="text"></input>
     </p>
     

     <p>City:
     <input id="cityInput" type="text"></input>
     </p>

     
     

   </div>
   <div id="button2">
       <button id="buttonsRed">Back To Delivery Options</button>
     </div>

   <div id="payment">
     <h2 id="payment-id">Payment</h2>
     <h3 id="payment-method">Payment methods:</h3>
     <p id="pId1">
       <input type="checkbox" id="checkbox-round"></input>
       Credit card:
     <img id="payment-picture1" src={creditcard} alt="credit-card" />
     </p>
     <p id="pId2"><input type="checkbox" id="checkbox-round"></input>
       Vipps:
     <img id="payment-picture2" src={Vipps} width="40px" height="20px" alt="vipps"/>
     </p>
     <p id="pId3"> <input type="checkbox" id="checkbox-round"></input>
       Paypal:
     <img id="payment-picture3" src={PayPal} width="40px" height="20px" alt="paypal"/>
     </p>

     
 </div>
 <div id="button3">
   <button id="buttonsRed">Back to delivery</button>
 </div>
 
 <div id="delivery-info1">
   <h3>Total amount: 100kr</h3>
   <h3>Delivery address</h3>
   <p>Name: *</p>
   <p>Street and housenumber: *</p>
   <p>Zip code: *</p>
   <p>City: *</p>
   <button id="buttons">Payment</button>
 </div>

 <div id="delivery-info2">
   <h3>Total amount: 100kr</h3>
   <h3>Delivery address</h3>
   <p>Name: *</p>
   <p>Street and housenumber: *</p>
   <p>Zip code: *</p>
   <p>City: *</p>
   
   <Link to="/Confirmation">
      <button className="buttons" type="button" id="check">Complete checkout</button>
    </Link>
 </div>
 </div>
  );
}

export default Shoppingcart;
