import React from 'react';
import './App.css';
import MessageCard from "./components/MessageCard";
import WishCard from "./components/WishCard";

function App() {
  return (
    <div className="App">
        <nav>
            <a href="/">React JS Cards with Styles</a>
        </nav>

        <MessageCard/>
        <WishCard/>
    </div>
  );
}

export default App;
