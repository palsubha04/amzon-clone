import React from 'react';
import '../style/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvide';
import { auth } from '../firebase';

function Header() {
    const [{basket, user}, dispatch] = useStateValue(); 

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to = '/'>
                <img 
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="Amazon"
                />
            </Link>
            
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="header__option">
                    
                        <span className="header_optionLineOne">Hello Guest</span>
                        <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>                    
                
                <div className="header__option">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header_optionLineOne"> Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
            </div>
            <Link to='/checkout'>
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>
            </Link>          
        </div>
    );
};

export default Header;
