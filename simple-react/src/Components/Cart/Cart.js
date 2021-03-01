import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    let totalPrice = cart.reduce((total, player) => total + player.price, 0);
    console.log(totalPrice);
    return (
        <div className="card text-center">
            <div className="card-header">
                Selected Players
            </div>
            <div className="card-body">
                <h5 className="card-title">Players picked: {props.cart.length}</h5>
                <p className="card-text">Players:{cart.name}</p>
                <p className="card-text">Total Price: {totalPrice}</p>
                <a href="#" class="btn btn-primary">Purchase</a>
            </div>
            <div class="card-footer text-muted">
                Good Luck!
            </div>
        </div>
    );
};

export default Cart;