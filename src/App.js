import React, {useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import profilePicture from './ProfessionalPfpEditedBackgroundCircleVersion.png';
import circuitBgImage from './coolerTechWallpaperOpacityReverseBlack.png'
import './strings/websiteText';
import { PROJECT_1_TEXT, PROJECT_2_TEXT, PROJECT_3_TEXT, WEBSITE_TEXT } from './strings/websiteText';
import upsideDownBgImage from './coolerTechWallpaperOpacityUpsideDown.png'




function App() {

// for scrolling to projects button

//for scrolling to an element stated in the ref
const scrollToProjects = (ref) => window.scrollTo(0, ref.current.offsetTop);
const projectRef = useRef(null)
const executeScroll = () => scrollToProjects(projectRef)
const bgURL = './coolerTechWallpaperOpacity2.png';

    

    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth
    const profileAreaHeightForTranslation = 204 / 2;
    console.log(windowHeight)


    return ( 
    <div style={{
        height: 'auto',
        backgroundCOlor: '#1F2833',
        margin: '0%',
        overflow: 'hidden',
        backgroundImage: `url(${circuitBgImage})`, backgroundRepeat: "repeat-y",
    }}>
        
        <div style={{
             display: 'grid', justifyContent: 'center', alignItems: 'center', paddingTop: ((windowHeight / 2) - 173),  paddingBottom: (windowHeight / 2),  overflow: 'hidden'
        }}>
                <div className = "ProfileArea" style={{
                    color: '#66FCF1', maxWidth: '50vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        
                    <div className = "Introduction">
                    <h1 style={{
                        fontFamily: 'Disket-Mono', fontSize: "60px"}}> 
                        {WEBSITE_TEXT.NAME}</h1> 
                    <p style={{fontFamily: 'Kernel-Panic', fontSize: "30px", marginBottom: "10px", color: "#C5C6C7"}}> {WEBSITE_TEXT.ABOUT_ME}</p> 
                
                        </div>
                        <div>
                        <img className = "picture" src={profilePicture}></img>
                        </div> 
                    
                </div>
                <div style={{
                     display: 'grid', alignItems: 'center', justifyContent: 'center'

                }}>
                <button onClick={executeScroll} style={{
                    backgroundColor: "transparent", color: "#66FCF1", border: "2px solid #66FCF1", fontSize: "20px", fontFamily: "Disket-Mono"
                }}>
                    {WEBSITE_TEXT.PROJECT_BUTTON}</button>{''}
        </div>
        </div>
        <div ref={projectRef}  style={{
            color: '#C5C6C7', paddingLeft: '10vh', overflow: 'hidden'
        }}>
            <h1>Projects</h1>
            <div>
            <h2>{PROJECT_1_TEXT.TITLE}</h2>
            <h3>{PROJECT_1_TEXT.TECH_USED}</h3>
            <ul style={{listStyleType: "none"}}>
                    <li>{PROJECT_1_TEXT.BULLET_POINT_1}</li>
                    <li>{PROJECT_1_TEXT.BULLET_POINT_2} </li>
                    <li>{PROJECT_1_TEXT.BULLET_POINT_3}</li>
                    <li>{PROJECT_1_TEXT.BULLET_POINT_4}</li>
              </ul>
            </div>
            <div>
    <h2>{PROJECT_2_TEXT.TITLE}</h2>
    <h3>{PROJECT_2_TEXT.TECH_USED}</h3>
    <ul style={{listStyleType: "none"}}>
            <li>{PROJECT_2_TEXT.BULLET_POINT_1}</li>
            <li>{PROJECT_2_TEXT.BULLET_POINT_2} </li>
            <li>{PROJECT_2_TEXT.BULLET_POINT_3}</li>
        </ul>
    </div>
    <div>
    <h2>{PROJECT_3_TEXT.TITLE}</h2>
    <h3>{PROJECT_3_TEXT.TECH_USED}</h3>
    <ul style={{listStyleType: "none"}}>
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