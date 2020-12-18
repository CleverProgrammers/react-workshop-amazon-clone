import React, { useState, useEffect } from 'react'
import './Product.css'
import { db } from './firebase'

function Product({id, title, price, rating, image }) {
    const [ product, setProduct ] = useState()

    // useEffect(() => {
    //     setProduct(db.collection('products').doc(id))

    // }, [])

    const addToCart=()=>{
        const cartItem = db.collection("cartItems").doc(id);
        cartItem.get()
        .then((doc)=>{
            if(doc.exists){
                cartItem.update({
                    quantity: doc.data().quantity + 1
                })
            } else {
                console.log('create new')
                
                db.collection('cartItems').doc(id).set({
                    name: title,
                    image: image,
                    price: price,
                    quantity: 1
                })
            }
        })
        // let cartSize;
        
        // const testCart = db.collection("cartItems").where("productId", "==", product);
        
        // testCart.get().then((querySnapshot)=>{
        //     cartSize = querySnapshot.size;
        //     console.log(cartSize);
        // })

        // if (cartSize > 0) {
            
        //     let updatedCartSize = cartSize + 1
            
        //     db.collection('cart').document(id).update({
        //         quantity: updatedCartSize
        //     })

        // } else {
        //     db.collection('cartItmes').doc(id).add({
        //         name: title,
        //         image: image,
        //         price: price,
        //         quantity: 1
        //     })
        // }
    }

    return (
        <div className="Product">
            <div className="Product-info">
                <span>{title}</span>
                <span>{price}</span>
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
