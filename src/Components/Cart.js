import React from 'react';

function Cart(props){
    const {cartItems, onAdd, onRemove} = props;
    return(
        <div>
            <h2>Cart items</h2>
            <div> {cartItems.length === 0 &&<div>Cart is empty</div>}</div>
            {cartItems.map((item) => (
                <div key={item.id} className="row">
                    <p className="cart-item">{item.name}</p>
                    <div className="cart-item">
                        <button onClick={()=>onAdd(item)} className="add">+</button>
                        <button onClick={()=>onRemove(item)} className="remove">-</button>
                    </div>
                    <div>
                        {item.qty} x {item.price}kr
                    </div>

                </div>
                

            ))}
        </div>
    );
}

export default Cart;