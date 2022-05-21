import React, { useEffect, useState } from 'react';
import './style.css';

const Avatar = () => {
    const [posts, setPosts] = useState(null);
    const [users, setUsers] = useState(null);
    const [comments, setComments] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => response.json())
            .then(data => setPosts(data)) 

        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(data => setUsers(data))

        fetch(`https://jsonplaceholder.typicode.com/comments`)
            .then(response => response.json())
            .then(data => setComments(data)) 
    }, []);
    



    //finding first letters ??????? jak to ošetřit?
    const firstLetter = (letterId) => {
        return comments.find((comment) => {
           if (comment.id === letterId) {
                return true
           } else {
                return false
           }
        }).email
    };



//kompo Avatar musí mít v returnu POUZE DYNAMICKY SE PROPISUJÍCÍ PÍSMENO 
//dle prvního písmena jednotlivých mailů :/

    return (

        <>
        { 
            (posts === null || users === null || comments === null)
            ? <p>loading data...</p> 
            :   <div>
                {posts.map(post => (
                    <div key={post.id}>
                        <p>{firstLetter(post.userId)}</p>
                    </div>
                ))}
                </div>
        }

        </>


    );
};

export default Avatar;


          //<>
         // {
          //  (comments === null) 
          //  ? <p>loading dataaaaaaaaaa</p>
           // : <ul className="avatar">
           //     {comments.map(comments => (
          //              <div>{comments.email}</div>
          //  ))}
          //  </ul>
     //  }
      //  </>
      //  );




    //const str="stack overflow";
    //const firstChar = str.charAt(0);




    //const getFirstLetters = (str) => {
    //    const firstLetter = str
    //      .split(' ')
    //      .map(word => word[0])
    //      .join('');
    //  
    //    return firstLetter;
    //  }

    //  console.log(getFirstLetters('One, Two, Three'));