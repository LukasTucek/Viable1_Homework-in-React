import React from "react";
import './style.css';

const Header = ({title}) => {
    return (

        <div className="header">
            <div>{title}</div>
        </div>


    )
}


export default Header;