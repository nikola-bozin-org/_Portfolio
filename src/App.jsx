import './app.css'
import Aos from 'aos';
import "aos/dist/aos.css";
import React from 'react';
import { useEffect } from 'react';
import Card from './Card/Card';


const frontendBulletpoints =[
  "JavaScript & TypeScript proficiency",
  "React - Quality, thoroughness and best practices during development",
  "Focus on creating responsive, user-centric interfaces & exceptional product polishing",
  "Strong skills in HTML5, CSS3 (Sass/SCSS)",
  "State managment - Redux, Zustand, Context",
  "Bridging frontend with backend APIs"
]

function App() {
  
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])

  return (
    <div className='app'>
      <span data-aos='fade-in' className='nikolaBozin'>Nikola Bozin</span>
      <span data-aos='fade-in' data-aos-delay={300} className='softwareDeveloper'>Software Developer</span>
      <div className='cards'>
        <Card title={'Frontend Developer'} bulletpoints={frontendBulletpoints}/>
        {/*<Card title={'Backend Developer'} />*/}
        {/*<Card title={'Web3 Developer'} />*/}
      </div>
    </div>
  );
}

export default App;
