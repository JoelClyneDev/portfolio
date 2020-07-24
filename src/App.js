import React from 'react';
import logo from './logo.svg';
import './App.css';
import profilePicture from './Red.svg.png';



function App() {

    return ( 
        <div>
    <div className = "ProfileArea" style={{color: 'blue'}}>
        <div className = "Introduction" >
        <h1> Name</h1> <p> Text about me </p> <h2> Cool Stuff I did </h2> 
        </div>
        <div>
        <img className = "picture" src={profilePicture}></img>
        </div> 
    </div>

    </div>
    );
}

export default App;