import React, {useEffect, useState} from 'react';
import './style.css';
import Form from '../Form';

const Main = () => {

    const [posts, setPosts] = useState(null);
    const [comments, setComments] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => response.json())
            .then(data => setPosts(data)) 
        fetch(`https://jsonplaceholder.typicode.com/comments`)
            .then(response => response.json())
            .then(data => setComments(data)) 
    }, []);


    const postComments = (postId) => {
        comments.findAll(comment => {
            if (comment.postId === postId) {
                return true
            } else {
                return false
            }
        })};

    const commentsElements = postComments.map(komentar => <div>{komentar.email}</div>)
        return commentsElements;


   // const displayComments = (postId) => {
   //     return comments.find(comment => {
   //         if (comment.postId === postId) {
   //             return true 
   //         } else {
   //            return false
   //         }
   //             }).email
   //   };



    return (

    <div className="all-posts">
    {
        (posts === null || comments === null)
        ? <p>Načítám data z API...</p>
        : <ul>

            {posts.map(post => (
                <li key={post.id}>
                    <h2>
                        <span className="post-name">Název postu<br /></span>{post.title}
                    </h2>
                    <br />
                    <p>
                        <span className="post-copy">Popis<br /></span>{post.body}
                    </p>
                    <br />
                        <span className="post-copy">Komentáře<br /></span>
                    <br />

                    <Form />

                    <br />
                </li>

            ))}


{/* toto jsem si jen zkoušel, je to špatně */}
            {comments.map(comment => (
                <div key={comment.id}>
                    <p>
                        NAME: {comment.name} <br />
                        EMAIL: {comment.email} <br />
                        KOMENTÁŘE: {comment.body} <br />
                    </p>
                </div>

                
            ))}

        </ul>
    }
    </div>
    
    );
};


export default Main;