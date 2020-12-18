import React, { useEffect, useState } from 'react'
import './Home.css'
import Product from './Product'
import { db } from './firebase'

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        db.collection('products').onSnapshot(snapshot => {
          // every time a new post is added fire this code off
          setProducts(snapshot.docs.map(doc => ({
            id: doc.id,
            product: doc.data()
          })))
        })
      }, [])

    return (
        <div className="Home">
            <div className="Home-container">
                <div className="Home-banner" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/banner.jpg)`}}>
                </div>
                <div className="Home-content">
                    <div className="Home-row">
                        {
                            products.slice(0,2).map(({ id, product }) => (
                                <Product 
                                    id={id}
                                    title={product.name}
                                    price={product.price}
                                    rating={product.rating}
                                    image={product.image} />
                            ))
                        }
                    </div>
                    <div className="Home-row">
                        {
                            products.slice(2,5).map(({ id, product }) => (
                                <Product 
                                    id={id}
                                    title={product.name}
                                    price={product.price}
                                    rating={product.rating}
                                    image={product.image} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
