import React, {useRef} from 'react';
import './App.css';
import profilePicture from './images/profilePicture.png';
import circuitBgImage from './images/circuitBackground.png'
import './strings/websiteText';
import { PROJECT_1_TEXT, PROJECT_2_TEXT, PROJECT_3_TEXT, WEBSITE_TEXT } from './strings/websiteText';
import linkedInIcon from './images/linkedINIcon.png'
import githubICon from './images/githubIcon.png'






function App() {

// for scrolling to projects button

//for scrolling to an element stated in the ref



const scrollToProjects = (ref) => window.scrollTo(0, ref.current.offsetTop);
const projectRef = useRef(null)
const executeScroll = () => scrollToProjects(projectRef)
const windowHeight = window.innerHeight;


    return ( 
    <div style={{
        height: 'auto',
        backgroundCOlor: '#1F2833',
        margin: '0%',
        overflow: 'hidden',
        backgroundImage: `url(${circuitBgImage})`, backgroundRepeat: "repeat",
    }}>

        
        <div style={{display: 'grid', justifyContent: 'center', alignItems: 'center', paddingTop: ((windowHeight / 2) - 236 ),  paddingBottom: (windowHeight / 2),  overflow: 'hidden' }}>
            <div style={{color: '#66FCF1', maxWidth: '50vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>  
                <div className = "Introduction">
                    <h1 style={{fontFamily: 'Disket-Mono', fontSize: "60px"}}> 
                        {WEBSITE_TEXT.NAME}</h1> 
                    <p style={{fontFamily: 'Kernel-Panic', fontSize: "30px", marginBottom: "10px", color: "#C5C6C7"}}> {WEBSITE_TEXT.ABOUT_ME}</p> 
                </div>
                <div>
                    <img className = "picture" src={profilePicture} alt="Joel Clyne"></img>
                </div>                    
            </div>
            <div style={{display: 'grid', alignItems: 'center', justifyContent: 'center', borderBottom: "2px solid #45A29E", paddingBottom: '20px'}}>
                <button onClick={executeScroll} style={{backgroundColor: "transparent", color: "#66FCF1", border: "2px solid #66FCF1", fontSize: "20px", fontFamily: "Disket-Mono"}}>
                    {WEBSITE_TEXT.PROJECT_BUTTON}</button>{''}
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', paddingTop: '10px'}}>
                <img className='icon' src={linkedInIcon} style={{paddingLeft: '40px'}} alt='LinkedIn Icon' onClick={() => window.open("https://www.linkedin.com/in/joel-clyne/", "_blank")}></img>
                <div style={{display: 'grid', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                    <text style={{fontFamily: 'honor', fontSize: '25px', color: "#66FCF1"}}>Email</text>
                    <text style={{fontFamily: 'kernel-Panic', fontSize: '35px', color: "#C5C6C7"}}>joel.clyne2@gmail.com</text>
                </div>
                <img className='icon' src={githubICon} style={{paddingRight: '40px'}} alt='GitHub Icon' onClick={() => window.open("https://github.com/JoelClyneDev/", "_blank")}></img>
            </div>
        </div>
        <div ref={projectRef} id='projects' style={{color: '#C5C6C7', paddingLeft: '10vh', overflow: 'hidden', maxWidth: '90vw'}}>
            <h1 style={{fontFamily: "Disket-Mono", fontSize: "60px", color: '#66FCF1', marginBottom: '15px', paddingBottom: '15px', borderBottom: "2px solid #66FCF1"}}>Projects</h1>
            <div className = "projectDiv" style={{fontSize: '35px', color: '#45A29E', borderBottom: "2px solid #66FCF1"}}>
                <h2 style={{marginTop: '0px', marginBottom: '10px'}}>{PROJECT_1_TEXT.TITLE}</h2>
                <h3 style={{marginTop: '10px', marginBottom: '10px'}}>{PROJECT_1_TEXT.TECH_USED}</h3>
                <ul className = "bodyText" style={{fontSize: '30px', color: "#C5C6C7",marginBottom: '10px', marginTop: '10px'}}>
                    <li>{PROJECT_1_TEXT.BULLET_POINT_1}</li>
                    <li>{PROJECT_1_TEXT.BULLET_POINT_2} </li>
                    <li>{PROJECT_1_TEXT.BULLET_POINT_3}</li>
                    <li>{PROJECT_1_TEXT.BULLET_POINT_4}</li>
                </ul>
            </div>
            <div className = "projectDiv" style={{fontSize: '35px', color: '#45A29E', borderBottom: "2px solid #66FCF1"}}>
                <h2 style={{marginTop: '30px', marginBottom: '10px'}}>{PROJECT_2_TEXT.TITLE}</h2>
                <h3 style={{marginTop: '10px', marginBottom: '10px'}}>{PROJECT_2_TEXT.TECH_USED}</h3>
                <ul className = "bodyText" style={{fontSize: '30px', color: "#C5C6C7"}}>
                    <li>{PROJECT_2_TEXT.BULLET_POINT_1}</li>
                    <li>{PROJECT_2_TEXT.BULLET_POINT_2} </li>
                    <a href = "https://play.google.com/store/apps/details?id=com.JCTechApps.ReversoBudgeter" target = "_self">
                    <li style={{color: "#C5C6C7"}}>{PROJECT_2_TEXT.BULLET_POINT_3}</li>
                    </a>
                </ul>
            </div>
            <div className = "projectDiv" style={{fontSize: '35px', color: '#45A29E'}}>
                <h2 style={{marginTop: '30px', marginBottom: '10px'}}>{PROJECT_3_TEXT.TITLE}</h2>
                <h3 style={{marginTop: '10px', marginBottom: '10px'}}>{PROJECT_3_TEXT.TECH_USED}</h3>
                <ul className = "bodyText" style={{fontSize: '30px', color: "#C5C6C7"}}>
                    <li>{PROJECT_3_TEXT.BULLET_POINT_1}</li>
                    <li>{PROJECT_3_TEXT.BULLET_POINT_2} </li>
                    <li>{PROJECT_3_TEXT.BULLET_POINT_3}</li>
                    <li>{PROJECT_3_TEXT.BULLET_POINT_4}</li>
                    <li>{PROJECT_3_TEXT.BULLET_POINT_5}</li>
                </ul>
            </div>
        </div>    
    </div>
    );
}

/*
<div>
    <h2>{}</h2>
    <h3>{}</h3>
    <ul style={{listStyleType: "none"}}>
            <li>{}</li>
            <li>{} </li>
            <li>{}</li>
            <li>{}</li>
        </ul>
    </div>
*/

export default App;