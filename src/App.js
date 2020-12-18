import React, { useEffect, useState } from 'react'
import './App.css';
import Header from './Header'
import Home from './Home';
import Cart from './Cart'
import { db } from './firebase'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
    <Router>
      <div className="App">
        <Header cartItems={cartItems} />
        <Switch>
          <Route path="/cart">
            <Cart cartItems={cartItems} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch> 
    
      </div>
    </Router>
  );
}

export default App;
