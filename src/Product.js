import React from 'react'
import './Product.css'

function Product({id, title, price, rating, image}) {
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

            <button>Add to Basket</button>
        </div>
    )
}

export default Product
