import React, {useState} from 'react';
import './style.css';

const DeleteComment = () => {

    const [comments, setComments] = useState([]);

    const handleDelete = () => {
        console.log('Delete')
        const updatedList = comments.filter((comments) => comments.id !== id);
        setComments(updatedList);
    }


    return (

        <div>   
            <ul>
            {comments.map(comment => (
                <li>
                    <button type="button" onClick={() => handleDelete()}>x</button>
                </li>
            ))}

            
            </ul>

        </div>


    );
}

export default DeleteComment;