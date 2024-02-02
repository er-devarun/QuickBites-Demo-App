import {IoMdClose} from 'react-icons/io'
import CartItemCard from './CartItemCard';
import {FaCartShopping} from 'react-icons/fa6'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function CartBox(){

    const cartItems = useSelector(store => store.cartItem);
    const [cart, setCart] = useState(true);
    const navigate = useNavigate();

    let totalCartItems = cartItems.reduce((totItems, currentItem) => totItems + currentItem.qty, 0);
    let totalCartAmount = cartItems.reduce((totAmount, currentItem) => totAmount + currentItem.price, 0);

    let handleCartBox = () => {
        setCart(!cart);
    }

    let handleCheckoutBtn = () => {
        navigate("/success");
    }

    return(
        <>
            <div className={`cart-box ${cart && 'cart-box-translate'}`}>
                <div className='cart-box-header'>
                    <span className='cart-heading'>My Order</span>
                    <IoMdClose className="close-cart-icon" onClick={handleCartBox}/>
                </div>

                { cartItems.length > 0 && cartItems.map((cartItem) => <CartItemCard key={cartItem.id} item={cartItem}/>)}

                <div className='cart-summary'>
                    <div className='cart-summary-info'>
                        <p className='tot-item'>Total Items: <span>{totalCartItems}</span></p>
                        <p className='tot-amount'>Total Amount: <span>₹ {totalCartAmount}/-</span></p>
                    </div>
                    <hr />
                        <button className='check-out-btn' onClick={handleCheckoutBtn}>Checkout</button>                
                </div>
            </div>
            <FaCartShopping className={`shopping-cart-icon ${cartItems.length > 0 && 'bounce'}`} onClick={handleCartBox}/>
        </>
    );
}

export default CartBox;