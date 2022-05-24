import React from 'react';
import './style.css';

const Avatar = ({name}) => {

    return (

        <div className="avatar">
            <p>{name[0]}</p>
        </div>


    );
}

export default Avatar;