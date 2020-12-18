import React, { useEffect, useState } from 'react'
import './App.css';
import Header from './Header'
import Home from './Home';
import { db } from './firebase'

function App() {

  const [ cartItems, setCartItems ] = useState([])

  useEffect(() => {
    db.collection('cartItems').onSnapshot(snapshot => {
      // every time a new post is added fire this code off
      setCartItems(snapshot.docs.map(doc => ({
        id: doc.id,
        product: doc.data()
      })))
    })
  }, [])

  return (
    <div className="App">
      <Header
        cartItems={cartItems} />
      <Home />
      
    </div>
  );
}

export default App;
