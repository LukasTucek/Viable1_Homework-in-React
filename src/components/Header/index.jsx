import React from "react";
import './style.css';
import headerIcon from '../../img/header-icon.svg';

const Header = ({title}) => {
    return (

        <div className="header">
                {title}
                <br />
                <img src={headerIcon} alt="header-icon" className="header-icon" />
        </div>


    )
}


export default Header;