import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
// import Logo from '../images/logo.png';
const Header = () => {
    return (
        <div className='Header__container'>
            <div className="Header__leftContainer">
                <img src="assets/images/logo.png" alt="OLX-CLONE-LOGO" width="100px" />
            </div>
            <div className="Header__centerContainer">
                 <input 
                 type='text' 
                 placeholder="Find cars, mobile and gaming consoles" 
                 className="Header__centerContainer"
                 />
                 <SearchIcon classname='Header__centerIcon'/>
            </div>
            <div className="Header__rightContainer">
                <h4 className="Header__rightLinkText">Login</h4>
                <button className="Header__rightButton">SELL</button>
            </div>
        </div>
    )
}

export default Header

