import React, {useState} from "react";
import { useForm } from "react-hook-form";
import './style.css';

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(name, email, text);
      setName("");
      setEmail("");
      setText("");
    }

      //alert(`Jméno: ${name} Email: ${email} Text: ${textArea}`)
    

    return (
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <textarea type="textarea" placeholder="Text" value={text} onChange={(e) => setText(e.target.value)} required />
        </label>
        <br />
        <input type="submit" value="SEND" />
      </form>
    )
  };

  export default Form;