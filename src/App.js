import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState("");
  const [click, setClick] = useState();
  useEffect(() => {
    console.log("Fetching quotes");
    fetch("http://localhost:5000/quotes/random")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuotes(data);
      });
  }, [click]);

  return (
    <div className="container">
      <h1>GET INSPIRED</h1>
      <button onClick={() => setClick(!click)}>
        Click for a new quote below
      </button>
      <div className="card">
        <h4>{quotes.quote}</h4>
        <h5>- {quotes.author}</h5>
      </div>
    </div>
  );
}

export default App;
