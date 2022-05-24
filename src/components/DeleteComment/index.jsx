import React, {useState} from 'react';
import './style.css';

const DeleteComment = () => {

    //const [list, setList] = useState([]);

    const handleDelete = () => {
        console.log('Delete')
        //const updatedList = list.filter((comments) => comments.id !== id);
        //setList(updatedList);
    }


    return (

        <div>
            
            <button type="button" onClick={() => handleDelete()}>x</button>
           

        </div>


    );
}

export default DeleteComment;