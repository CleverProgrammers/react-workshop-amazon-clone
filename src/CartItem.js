import React from 'react'

function CartItem(props) {
    return (
        <div className="CartItem">
            <div className="CartItem-image">
                <img src={process.env.PUBLIC_URL + '/items/' + props.item.image} alt=""/>
            </div>
            <div className="CartItem-info">
                <div className="info-title">
                    <h2>{props.item.title}</h2>
                </div>
                <div className="info-stock">
                    {props.item.stock}
                </div>
                <div className="item-actions">
                    <div className="item-quantity">
                        <select 
                            onChange={(e)=> props.changeItemQuantity(e, props.id)} 
                            value={props.item.quantity}
                            >
                            <option value="1">Qty: 1</option>
                            <option value="2">Qty: 2</option>
                            <option value="3">Qty: 3</option>
                            <option value="4">Qty: 4</option>
                            <option value="5">Qty: 5</option>
                            <option value="6">Qty: 6</option>
                            <option value="7">Qty: 7</option>
                            <option value="8">Qty: 8</option>
                            <option value="9">Qty: 9</option>
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
