import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Header({ cartItems }) {

    const getCount = () => {
        let count = 0;
        cartItems.forEach((item) => {
            count += item.product.quantity;
        })
        return count;
    }

    return (
        <div className="Header">
            <div className="Header-logo">
                <img src={process.env.PUBLIC_URL + '/logo.png'}/>
            </div>

            <div className="Header-optionAddress">
                <LocationOnIcon />
                <div className="Header-option">
                    <span className="Header-optionLineOne">Hello</span>
                    <span className="Header-optionLineTwo">Select your address</span>
                </div>
            </div>

            <div className="Header-search">
                <input className="Header-searchInput" type="text"/>
                <div className="Header-searchIconContainer">
                    <SearchIcon className="Header-searchIcon" />
                </div>
            </div>

            <div className="Header-navItems">
                <div className="Header-option">
                    <span className="Header-optionLineOne">Hello, Nazariy</span>
                    <span className="Header-optionLineTwo">Account & Lists</span>
                </div>

                <div className="Header-option">
                    <span className="Header-optionLineOne">Returns</span>
                    <span className="Header-optionLineTwo">& Orders</span>
                </div>

                <div className="Header-optionCart">
                    <ShoppingBasketIcon />
                    <span className="Header-cartCount">{getCount()}</span>
                </div>
            </div>
        </div>
    )
}

export default Header
