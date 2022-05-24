import React, {useState, useEffect} from 'react';
import './style.css';

const DeleteComment = ({onDelete}) => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments/')
            .then(response => response.json())
            .then(data => setComments(data)) 
    }, []);


    //const handleDelete = (id) => {
     //   console.log('Delete')
    //    const updatedList = comments.filter((comments) => comments.id !== id);
    //    setComments(updatedList);
    //}


    return (

        <div>   

            <button type="button" onClick={() => handleDelete(id)}>x</button>

        
        </div>


    );
}

export default DeleteComment;