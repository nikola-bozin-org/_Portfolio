import './app.css'
import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useState } from 'react';
import { useEffect } from 'react';
import Card from './components/Card/Card';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particleOptions } from './particles'
import Self from './components/Self/Self';
import { backendBulletpoints, backendUtility, frontendBulletpoints, frontendUtility, web3Bulletpoints, web3Utility, wordsToHighlight } from './miniDatabase';
import useIsMobile from './Hooks/useIsMobile'
import Scrollbar from './components/Scrollbar/Scrollbar';
import Info from './components/Info/Info';
import moon from './images/moon.png'
import sun from './images/sun.png'
import TechStack from './components/TechStack/TechStack';

function App() {
  const isMobile = useIsMobile();
  const [scrollPos, setScrollPos] = useState(0);
  const [darkmode, setDarkMode] = useState(false);
  
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 })
    const isDarkmode = localStorage.getItem('darkmode');
    if(isDarkmode==='true'){
      setDarkMode(true);
    }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      let currentScrollPos = window.scrollY;
      setScrollPos(currentScrollPos <= 150 ? currentScrollPos : 150);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(()=>{
    localStorage.setItem('darkmode',darkmode)
  },[darkmode])

  return (
    <>
      {!isMobile && <Scrollbar />}
      <div className='app'>
        <Particles id="tsparticles" options={particleOptions} init={particlesInit} />
        <div className='mainInfoContainer'>
          <span data-aos='fade-in' className='nikolaBozin'>Nikola Bozin</span>
          <span data-aos='fade-in' data-aos-delay={300} className='softwareDeveloper'>Software Developer</span>
        </div>
        <div
          
          className={`${darkmode ? 'darkmode darkmodeExpand' : 'darkmode'}`}
          style={{ left: `${10 - scrollPos * (200 / 150)}px` }}
        >
        </div>
        <div
          onClick={() => { setDarkMode(darkmode => !darkmode) }}
          className={`iconDiv ${darkmode?`wb`:``}`}
          style={{ left: `${10 - scrollPos * (200 / 150)}px` }}
        >
          {darkmode ? <img src={sun} alt="mode" className="moon" /> : <img src={moon} alt="mode" className="sun" />}
        </div>
        <div className="cardsAndSelfWrapper">
          <div className='cards'>
            <Card isMobile={isMobile} utilities={frontendUtility} wordsToHighlight={wordsToHighlight} flipAnimationName={'flip1'} title={'Frontend'} bulletpoints={frontendBulletpoints} />
            <Card isMobile={isMobile} utilities={backendUtility} wordsToHighlight={wordsToHighlight} flipAnimationName={'flip2'} title={'Backend'} bulletpoints={backendBulletpoints} />
            <Card isMobile={isMobile} utilities={web3Utility} wordsToHighlight={wordsToHighlight} flipAnimationName={'flip3'} title={'Web3'} bulletpoints={web3Bulletpoints} />
          </div>
          <Self />
            <TechStack darkmode={darkmode}/>
          <div className="sellingTexts">
            <h1 className="sell1">Problems solved instantly!</h1>
            <h1 className="sell2">Unrealistic done in a day!</h1>
            <h1 className="sell3">Supernatural by appointment.</h1>
          </div>
          <h1 className='inDev'>Currently building new portfolio <a className='inDevLink' target='_blank' href='https://n-ext.vercel.app'> website.</a></h1>
          <Info />
        </div>
      </div>
    </>
  );
}

export default App;
