import './app.css'
import Aos from 'aos';
import "aos/dist/aos.css";
import React from 'react';
import { useEffect } from 'react';
function App() {
  
  useEffect(()=>{
    Aos.init({duration:1000})

    const ping = async() => {
      try{
      const response = await fetch('https://13.48.27.158:443/ping')

        if(response.ok){
          const data = await response.json();
          console.info(data)
        } else {
          console.error('HTTP error', response.status);
        }
      }catch(e){
        console.info(e.message)
      }
    }

    ping();
  },[])

  return (
    <div data-aos='fade-in' className='app'>
      <span className='nikolaBozin'>Nikola Bozin</span>
      <span className='softwareDeveloper'>Software Developer</span>
    </div>
  );
}

export default App;
