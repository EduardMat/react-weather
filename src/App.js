import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";
import Link from "./Link";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <button class="btn btn-primary">Hello</button>
    <Weather defaultCity ="London"/>
    <Link />
    
     </div>   
    </div>
  );
}

