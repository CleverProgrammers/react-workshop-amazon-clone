import React from 'react'
import CartItems from './CartItems'
import CartTotal from './CartTotal'
import './Cart.css'

function Cart({ cartItems }) {
    return (
        <div className='Cart'>
            <CartItems items={cartItems}/>
            <CartTotal items={cartItems} />
        </div>
    )
}

export default Cart
