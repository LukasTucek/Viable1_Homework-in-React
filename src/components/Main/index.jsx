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

    //const displayComments = (postId) => {
    //    console.log(postId);
    //    const postComments = comments.findAll(comment => {
     //       if (comment.postId === postId) {
     //           return console.log('funguje')
     //      } else {
    //           return console.log('nefunguje')
    //       }});
  
//};

    return (

    <div className="all-posts">
    {
        (posts === null || comments === null)
        ? <p>Načítám data z API...</p>
        :   <ul>

            {posts.map(post => {
                const postComments = comments.filter((comment) => comment.postId === post.id)
                
                return (
                    
                <li key={post.id}>
                    <h2>
                        <span className="post-name">Název postu<br /></span>
                        {post.title}
                    </h2>
                    <br />
                    <p>
                        <span className="post-name">Popis<br /></span>
                        {post.body}
                    </p>
                    <br />
                        <span className="post-name">Komentáře<br /></span>
                    <div>
                        <div>{post.name}</div>
                        {postComments.map((comment) => 
                            <ul>
                                <li>
                                    <div className="comment-body" key={comment.id}>{comment.body}</div>
                                </li>
                                <li>
                                    <div className="comment-name" key={comment.id}>{comment.name}</div>
                                </li>
                            </ul>
                        )}
                    </div>
                    
                    <Form />

                    <br />
                </li>
           )})}

            </ul>
    }
    </div>
    
    );
};


export default Main;