import React, { useState } from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { auth, provider } from './firebase';
import { Link } from "react-router-dom";


function Header({cartItems}) {
    const [userName, setUserName] = useState();

    const signIn = () => {
        // sign in with google
        auth.signInWithPopup(provider)
            .then((result) => {
                console.log(result)
                setUserName(result.user.displayName)
            })
            .catch((error) => alert(error.message))
    }

    const handleSignOut = () => {
        // sign out
        auth.signOut().then(() => {
            setUserName()
        }).catch((error) => alert(error.message))
    }

    const getCount = () => {
        let count = 0;
        cartItems.forEach((item) => {
            count += item.product.quantity;
        })
        return count;
    }

    console.log(userName) // username stored by the app
    console.log(auth.currentUser) // firebase session management status 

    return (
        <div className="Header">
            <div className="Header-logo">
                <img src={process.env.PUBLIC_URL + '/logo.png'} />
            </div>

            <div className="Header-optionAddress">
                <LocationOnIcon />
                <div className="Header-option">
                    <span className="Header-optionLineOne">Hello</span>
                    <span className="Header-optionLineTwo">Select your address</span>
                </div>
            </div>

            <div className="Header-search">
                <input className="Header-searchInput" type="text" />
                <div className="Header-searchIconContainer">
                    <SearchIcon className="Header-searchIcon" />
                </div>
            </div>

            <div className="Header-navItems">
                <div className="Header-option">
                    {/* deciding if sing in or sign out button is shown */}
                    {
                        userName ? (
                            <div className='Header-signOut' onClick={handleSignOut}>
                                <div className="Header-optionLineOne">Hello, {userName}</div>
                                <div className="Header-optionLineTwo">Account & Lists</div>
                            </div>
                        ) : (
                                <button onClick={signIn}>Sign In</button>
                            )
                    }
                </div>

                <div className="Header-option">
                    <span className="Header-optionLineOne">Returns</span>
                    <span className="Header-optionLineTwo">& Orders</span>
                </div>
                
                <Link to='/cart'>
                    <div className="Header-optionCart">
                        <ShoppingBasketIcon />
                        <span className="Header-cartCount">{getCount()}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
