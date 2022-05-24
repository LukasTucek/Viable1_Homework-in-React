import React, {useState, useEffect} from "react";
import './style.css';

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    useEffect(() => {
      newComment();
    }, [])

    //const newComment = () => {
    //  fetch('https://jsonplaceholder.typicode.com/comments')
    //  .then(response => response.json())
    //  .then(data => ...(data)) 
    //}


    
    const handleSubmit = (e) => {
      e.preventDefault(); //zakázání refresh stránky
      console.log(name, email, text);
      setName("");
      setEmail("");
      setText("");
    }

    return (

    <div>
      
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <textarea type="textarea" placeholder="Text" value={text} onChange={(e) => setText(e.target.value)} required />
          <input type="submit" value="SEND" />
        </label>
      </form>

    </div>

    )
  };


  export default Form;