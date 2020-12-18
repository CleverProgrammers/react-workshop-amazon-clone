import React from 'react'
import CartItem from './CartItem'
import './CartItems.css'

function CartItems(props) {

    const changeItemQuantity = (e, index) => {
        // const newItems = [...props.items]
        // newItems[index].quantity = e.target.value;
        // props.setCartItems(newItems);
    }

    return (
        <div className="CartItems">
            <h1>Shopping Cart</h1>
            <hr />
            <div className="CartItems-items">   
                { props.items.map((item, index) => {
                    return <CartItem 
                        key={index} 
                        id={item.id}
                        item={item.product}
                        changeItemQuantity={changeItemQuantity}
                    />
                }) }
            </div>
        </div>
    )
}

export default CartItems
