import React from 'react'
import './techStack.css'
import next from '../../images/nextjs.png'


const TechStack = ({darkmode}) => {
    const images = ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", next,"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg","https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg","https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-plain.svg",'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'];
    return (
        <div className='techStacks'>
            <div className="techStackSlide">
            {images.map((item, index) => (
                <img
                className='techImg'
                    key={index}
                    src={item}
                    style={!darkmode && item === next ? {filter: "invert(100%)"} : {}}
                />
            ))}
            </div>
            <div className="techStackSlide">
            {images.map((item, index) => (
                <img
                className='techImg'
                    key={(index+1)*2}
                    src={item}
                    style={!darkmode && item === next ? {filter: "invert(100%)"} : {}}
                />
            ))}
            </div>
        </div>
    )
}

export default TechStack