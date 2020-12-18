import React from 'react'
import CartItem from './CartItem'
import './CartItems.css'

function CartItems(props) {

    const changeItemQuantity = (e, index) => {
        // const newItems = [...props.items]
        // newItems[index].quantity = e.target.value;
        // props.setCartItems(newItems);
    }

    const deleteItem = (indexToDelete) => {
        // const newItems = props.items.filter((value, index)=>{
        //     return index !== indexToDelete;
        // })
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
                        id={index}
                        item={item.product}
                        changeItemQuantity={changeItemQuantity}
                        deleteItem={deleteItem}
                    />
                }) }
            </div>
        </div>
    )
}

export default CartItems
