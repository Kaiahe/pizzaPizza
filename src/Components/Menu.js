import React from 'react';
import '../App.css';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import Shoppingcart from './Shoppingcart';


function Menu({menuItem}) {
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState('menu')

    //Add to cart function
    const onAdd = (product) => {
        console.log('we are in cart');
        setCart([...cart, {...product}])
      }  

      //Removes item from cart
    const removeFromCart = (productToRemove) => {
        setCart(cart.filter(product => product !== productToRemove))
    }

      //Router?
    const navigateTo = (nextPage) => {
        setPage(nextPage);
    }


    const renderMenuItems = () => (
        <>
        <div className="item">
            {menuItem.map((item) => {
                return <div className="item-container" key={item.id}>
                     <img className="menu-img" src={item.image} alt=""/>
                <h3 className="item-title">{item.title} </h3>
                <p className="item-price">{item.price} kr</p>
                <button onClick={()=>onAdd(item)} className="add-btn">Add to cart</button> 
                
                </div>;
            })}
            </div>
            </>
    );

    const renderCart = () => (
        <>
        <div className="item">
            Cart
            {cart.map((item) => {
                return <div className="item-container" key={item.id}>
                     <img className="menu-img" src={item.image} alt=""/>
                <h3 className="item-title">{item.title} </h3>
                <p className="item-price">{item.price} kr</p>
                <button onClick={()=>removeFromCart(item)} className="remove-btn">Remove</button> 
                
                </div>;
            })}
            </div>
            </>
    );

    
    return (
        <div className="cart">
           {/*  Bør bruke router i stedenfor denne funksjonen navigateTo */}
           
                <button onClick = {() => navigateTo('cart')}>Go to cart ({cart.length})</button>
                
                <button onClick = {() => navigateTo('menu')}>Go to menu </button>
                {page === 'menu' && renderMenuItems()}
                {page === 'cart' && renderCart()}
                
        </div>

    )
}

export default Menu;
