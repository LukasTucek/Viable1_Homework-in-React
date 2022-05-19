import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

//import components
import Header from './components/Header';
import Main from './components/Main';
const App = () => (
  
  <div className="container">

    <Header title="Viable One - FE test" />
    <Main />

  </div>


);

//new root API (React 18)
const container = document.querySelector('#app');
const root = createRoot(container);
root.render(<App />);
