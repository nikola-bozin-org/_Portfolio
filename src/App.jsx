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
import useIsMobile from './hooks/useIsMobile'
import Scrollbar from './components/Scrollbar/Scrollbar';
import Info from './components/Info/Info';
import moon from './images/moon.png'
import sun from './images/sun.png'

function App() {
  const isMobile = useIsMobile();

  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  const [darkmode, setDarkMode] = useState(false);

  return (
    <>
      {!isMobile && <Scrollbar />}
      <div className='app'>
        <Particles id="tsparticles" options={particleOptions} init={particlesInit} />
        <div className='mainInfoContainer'>
          <span data-aos='fade-in' className='nikolaBozin'>Nikola Bozin</span>
          <span data-aos='fade-in' data-aos-delay={300} className='softwareDeveloper'>Software Developer</span>
        </div>
        <div onClick={() => { setDarkMode(darkmode => !darkmode) }}
          className={`${darkmode ? 'darkmode darkmodeExpand' : 'darkmode'}`}>
        </div>
        <div className={`iconDiv`}>
          <img src={darkmode ? sun : moon} alt="mode" />
        </div>
        <div className="cardsAndSelfWrapper">
          <div className='cards'>
            <Card isMobile={isMobile} utilities={frontendUtility} wordsToHighlight={wordsToHighlight} flipAnimationName={'flip1'} title={'Frontend'} bulletpoints={frontendBulletpoints} />
            <Card isMobile={isMobile} utilities={backendUtility} wordsToHighlight={wordsToHighlight} flipAnimationName={'flip2'} title={'Backend'} bulletpoints={backendBulletpoints} />
            <Card isMobile={isMobile} utilities={web3Utility} wordsToHighlight={wordsToHighlight} flipAnimationName={'flip3'} title={'Web3'} bulletpoints={web3Bulletpoints} />
          </div>
          <Self />
          <div className="sellingTexts">
            <h1 className="sell1">Problems solved instantly!</h1>
            <h1 className="sell2">Unrealistic done in a day!</h1>
            <h1 className="sell3">Supernatural by appointment.</h1>
          </div>
          <Info />
        </div>
      </div>
    </>
  );
}

export default App;
