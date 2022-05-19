import React, {useState} from "react";
import { useForm } from "react-hook-form";
import ReactDOM from 'react-dom/client';
import './style.css';

export default function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [textArea, setTextArea] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Jméno: ${name} Email: ${email} Text: ${textArea}`)
    }

    return (
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <textarea type="textarea" placeholder="Text" value={textArea} onChange={(e) => setTextArea(e.target.value)} required />
        </label>
        <br />
        <input type="submit" value="SEND" onClick="" />
      </form>
    )
  };