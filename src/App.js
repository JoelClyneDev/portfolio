import React from 'react';
import logo from './logo.svg';
import './App.css';
import profilePicture from './Red.svg.png';



function App() {


    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth
    const profileAreaHeightForTranslation = 204 / 2;


    return ( 
    <div style={{
        height: 'auto',
        backgroundCOlor: '#1F2833',
        margin: '0%',
        overflow: 'hidden'
    }}>
        <div style={{
            
            display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: (windowHeight / 2), transform: 'translateY(-102px)', paddingBottom: (windowHeight / 2)
        }}>
            <div>
                <div className = "ProfileArea" style={{
                    color: '#66FCF1'}}>
                    <div className = "Introduction" >
                <h1> Name</h1> <p> Text about me (height) {windowHeight} (width) {windowWidth} </p> <h2> Cool Stuff I did </h2> 
                    </div>
                    <div>
                    <img className = "picture" src={profilePicture}></img>
                    </div> 
                </div>
            </div>
        </div>
        <div style={{
            color: '#C5C6C7', marginLeft: '10vh'
        }}>
            <h1>Projects</h1>
            <ul>
                <li>
                    Project 1
                </li>
                <li>
                    Project 2
                </li>
            </ul>
        </div>
    </div>
    );
}

export default App;