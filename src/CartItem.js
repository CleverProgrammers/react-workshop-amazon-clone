import React from 'react'
import './CartItem.css'

function CartItem(props) {


    let options = []

    for (let i = 1; i < Math.max(props.item.quantity+1, 20); i++) {
        options.push(<option value={i}>Qty: {i}</option>)
    }

    return (
        <div className="CartItem">
            <div className="CartItem-image">
                <img src={props.item.image} alt=""/>
            </div>
            <div className="CartItem-info">
                <div className="info-title">
                    <h2>{props.item.name}</h2>
                </div>
                <div className="item-actions">
                    <div className="item-quantity">
                        <select 
                            onChange={(e)=> props.changeItemQuantity(e, props.id)} 
                            value={props.item.quantity}
                            >
                            {options}
                        </select>
                    </div>
                    <span className="item-actions-divider">|</span>
                    <div className="item-delete" onClick={props.deleteItem.bind(this, props.id)}>
                        Delete
                    </div>
                </div>
            </div>
            <div className="item-price">
                ${props.item.price}
            </div>
        </div>
    )
}

export default CartItem
