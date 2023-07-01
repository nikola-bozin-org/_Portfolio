import './app.css'
import Aos from 'aos';
import "aos/dist/aos.css";
import React from 'react';
import { useEffect } from 'react';
import Card from './Card/Card';
import Fillbar from './Fillbar/Fillbar'


const frontendBulletpoints = [
  "JavaScript & TypeScript proficiency",
  "React - Quality, thoroughness, and best practices during development",
  "Focus on creating responsive, user-centric interfaces & exceptional product polishing",
  "Strong skills in HTML5, CSS3 (Sass/SCSS)",
  "State management - Redux, Zustand, Context",
  "Bridging frontend with backend APIs"
]
const backendBulletpoints = [
  "Nodejs & express expertise.",
  "Maintaining efficient, reliable and secure services.",
  "Structured data oriented development.",
  "Proficiency in creating efficient API endpoints using MongoDB as database",
  "Experience with implementing authentication and authorization strategies, such as JWT, OAuth"
]

const web3Bulletpoints = [
  "Developing Solidity Smart Contracts and testing them thoroughly",
  "Utilizing ChainLink to create Hybrid Smart Contracts",
  "Implementing OpenZeppelin libraries for advanced Smart Contracts",
  "Knowledge implementing EIP standards",
  "Building on Substrate based chains using Rust",
]

const frontendUtility = [

]

const backendUtility = [

]

const web3Utility = [

]


//fe utility
//eljs connecting mainprocessor with render processor
//framer motion, aos, resize observer, react native, electron,nextjs skeleton screen

//be utility
//docker, websockets, graphQL, nginx, certbot, pm2, 

//web3 utility
//Ethers, nextjs, polkadot ink!, metamask, truffle, ipfs, web3js

const wordsToHighlight = ["Substrate","Rust", "EIP", "OpenZeppelin", "ChainLink", "testing", "Smart","Contracts", "Solidity","JWT","OAuth", "authorization","authentication", "MongoDB", "oriented", "data", "reliable ", "secure","efficient", "express","Nodejs","APIs","Bridging","Context","Zustand","Redux","HTML5","CSS3","React","JavaScript", "TypeScript", "responsive","thoroughness","best","practices", "user-centric", "Quality"];


function App() {
  
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])

  return (
    <div className='app'>
      <span data-aos='fade-in' className='nikolaBozin'>Nikola Bozin</span>
      <span data-aos='fade-in' data-aos-delay={300} className='softwareDeveloper'>Software Developer</span>
      <div className='cards'>
        <Card utilities={frontendUtility} wordsToHighlight={wordsToHighlight} flipAnimationName={'flip1'} title={'Frontend Developer'} bulletpoints={frontendBulletpoints}/>
        <Card utilities={backendUtility} wordsToHighlight={wordsToHighlight} flipAnimationName={'flip2'} title={'Backend Developer'} bulletpoints={backendBulletpoints}/>
        <Card utilities={web3Utility} wordsToHighlight={wordsToHighlight} flipAnimationName={'flip3'} title={'Web3 Developer'} bulletpoints={web3Bulletpoints} />
      </div>
      {/*<Fillbar percentage={50} />*/}
    </div>
  );
}

export default App;
