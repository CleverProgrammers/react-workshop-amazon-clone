import React, { useState, useEffect } from 'react'
import './Product.css'
import { db } from './firebase'

function Product({id, title, price, rating, image }) {

    console.log(price)

    const addToCart=()=>{
        const cartItem = db.collection("cartItems").doc(id);
        cartItem.get()
        .then((doc)=>{
            if(doc.exists){
                cartItem.update({
                    quantity: doc.data().quantity + 1
                })
            } else {
                db.collection('cartItems').doc(id).set({
                    name: title,
                    image: image,
                    price: price,
                    quantity: 1
                })
            }
        })
    }

    return (
        <div className="Product">
            <div className="Product-info">
                <span>{title}</span>
                <span className="Product-price">${price}</span>
                <div className="Product-rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
            </div>
            <img src={image} alt="" />

            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product
