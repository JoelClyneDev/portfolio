import React, {useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import profilePicture from './Red.svg.png';
import './strings/websiteText';
import WEBSITE_TEXT from './strings/websiteText';



function App() {

// for scrolling to projects button

//for scrolling to an element stated in the ref
const scrollToProjects = (ref) => window.scrollTo(0, ref.current.offsetTop);
const projectRef = useRef(null)
const executeScroll = () => scrollToProjects(projectRef)

    

    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth
    const profileAreaHeightForTranslation = 204 / 2;
    const textInput = WEBSITE_TEXT;
    console.log(textInput.NAME)


    return ( 
    <div style={{
        height: 'auto',
        backgroundCOlor: '#1F2833',
        margin: '0%',
        overflow: 'hidden'
    }}>
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: (windowHeight / 2), transform: 'translateY(-308.5px)', paddingBottom: (windowHeight / 2)
        }}>
            <div>
                <div className = "ProfileArea" style={{
                    color: '#66FCF1', maxWidth: '50vw'}}>
                    <div className = "Introduction" >
                <h1 style={{
                    fontFamily: 'Disket-Mono', fontSize: "60px"}}> 
                    {WEBSITE_TEXT.NAME}</h1> 
                <p style={{fontFamily: 'Kernel-Panic', fontSize: "30px"}}> {WEBSITE_TEXT.ABOUT_ME}</p> 
                <button onClick={executeScroll} style={{
                    backgroundColor: "transparent", color: "#66FCF1", border: "2px solid #66FCF1"
                }}>
                    {WEBSITE_TEXT.PROJECT_BUTTON}</button>{' '}
                    </div>
                    <div>
                    <img className = "picture" src={profilePicture}></img>
                    </div> 
                </div>
            </div>
        </div>
        <div ref={projectRef}  style={{
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