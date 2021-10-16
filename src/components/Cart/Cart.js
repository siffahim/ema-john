import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    console.log(cart)
    let price = 0;
    let shipping = 0;
    let total = 0;
    let tax = 0;
    let totalQuentity = 0;

    for (const product of cart) {
        if (!product.quentity) {
            product.quentity = 1;
        }
        price += product.price * product.quentity;
        shipping += product.shipping;
        totalQuentity += product.quentity;
    }
    tax = (price + shipping) * 0.10;

    total = price + shipping + tax;
    
    return (
        <div>
            <div className='cart-content'>
                <h2>Order Summery</h2>
                <button className='cart'>
                    <i className="fas fa-shopping-cart icon"></i>
                    <span className='item'>+{totalQuentity}</span>
                </button>
            </div>
            <table cellPadding='3px'>
                <tr>
                    <td>items:</td>
                    <td className='money'>${totalQuentity}</td>
                </tr>
                <tr>
                    <td>Price:</td>
                    <td className='money'>${price.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Shipping & Handling:</td>
                    <td className='money'>${shipping.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Tax:</td>
                    <td className='money'>${tax.toFixed(2)}</td>
                </tr>
                <tr>
                    <td><h3>Total Order:</h3></td>
                    <td className='money'><h3>${total.toFixed(2)}</h3></td>
                </tr>
            </table>
            <button className='btn-regular'>Review your Order</button>
        </div>
    );
};

export default Cart;