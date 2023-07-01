import './app.css'
import Aos from 'aos';
import "aos/dist/aos.css";
import React from 'react';
import { useEffect } from 'react';
import Card from './Card/Card';
import Fillbar from './Fillbar/Fillbar'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {particleOptions} from './particles'
console.info(particleOptions)

const frontendBulletpoints = [
  "JavaScript & TypeScript proficiency",
  "React - Quality, thoroughness, and best practices during development",
  "Focus on creating responsive, user-centric interfaces & exceptional product polishing",
  "Strong skills in HTML5, CSS3",
  "State management - Redux, Zustand, Context",
  "Bridging frontend with backend APIs"
]
const backendBulletpoints = [
  "Nodejs & express expertise.",
  "Maintaining efficient, reliable and secure servers",
  "Structured data oriented development",
  "Proficiency in creating efficient API endpoints.",
  "Using MongoDB as database",
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
  "Knowledge of ElectronJS, React Native, NextJS for Desktop, Mobile and SSR development",
  "Using Framer Motion, Aos, Intersection Observer for animations",
  "Building with Skeleton Screens for better UX",
  "React hooks as a first-class citizen for code reusability and cleanliness"
]

const backendUtility = [
  "Utilizing Docker for unified development without complications",
  "Implementing Websockets for requirements of real-time communication",
  "Using Nginx as a reverse proxy for backend services in combination with CertBot for free SSL",
  "Managing processes using PM2",
  "Cloud Platform deployment (AWS, Digital Ocean)",
  "GraphQL Awareness"
]

const web3Utility = [
  "Integrating Web3 wallets interactions in the browser (Metamask, Polkadot, ...)",
  "Developing with EthersJS & Web3JS for EVM compatible blockchains",
  "Understanding of Polkadot Ecosystem and Ink! Smart Contracts development",
  "Using Truffle & Hardhat as local development environments",
  "Leveraging IPFS for decentralized storage solutions",
]
//web3 utility
//Ethers, polkadot ink!, metamask, truffle, ipfs, web3js

const wordsToHighlight = ["reliable","EthersJS","Web3JS","EVM","Ink!","Truffle","Hardhat","IPFS", "Web3","Metamask","Polkadot","GraphQL", "PM2","Cloud","Platform","Nginx","CertBot","Docker","Websockets","real-time","reusability","cleanliness","hooks","Skeleton","Screens","Framer","Motion","Aos","Intersection","Observer","NextJS","ElectronJS","Native", "Substrate","Rust", "EIP", "OpenZeppelin", "ChainLink", "testing", "Smart","Contracts", "Solidity","JWT","OAuth", "authorization","authentication", "MongoDB", "oriented", "data", "reliable ", "secure","efficient", "express","Nodejs","APIs","Bridging","Context","Zustand","Redux","HTML5","CSS3","React","JavaScript", "TypeScript", "responsive","thoroughness","best","practices", "user-centric", "Quality"];
const isMobile = window.innerWidth<768;


function App() {

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    console.log(container);
}, []);
  
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])

  return (
    <div className='app'>
       <Particles id="tsparticles" options={particleOptions}  init={particlesInit} loaded={particlesLoaded} />
      <span data-aos='fade-in' className='nikolaBozin'>Nikola Bozin</span>
      <span data-aos='fade-in' data-aos-delay={300} className='softwareDeveloper'>Software Developer</span>
      <div className='cards'>
        <Card isMobile={isMobile} utilities={frontendUtility} wordsToHighlight={wordsToHighlight} flipAnimationName={'flip1'} title={'Frontend'} bulletpoints={frontendBulletpoints}/>
        <Card isMobile={isMobile} utilities={backendUtility} wordsToHighlight={wordsToHighlight} flipAnimationName={'flip2'} title={'Backend'} bulletpoints={backendBulletpoints}/>
        <Card isMobile={isMobile} utilities={web3Utility} wordsToHighlight={wordsToHighlight} flipAnimationName={'flip3'} title={'Web3'} bulletpoints={web3Bulletpoints} />
      </div>
      {/*<Fillbar percentage={50} />*/}
    </div>
  );
}

export default App;
