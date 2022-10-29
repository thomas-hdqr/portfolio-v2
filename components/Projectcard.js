import Image from 'next/image'

import React, { useState } from 'react'



function Projectcard(props) {


  // For the hover effect
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div 
    className="flex flex-col min-h-[640px] h-full w-[443px] border-2 border-black flex-none relative scrollbar-hide"
    onMouseOver={handleMouseOver} 
    onMouseOut={handleMouseOut} 
    onClick={() => {props.project.link}}
    >
      {isHovering && 
        <Image src={props.project.image} alt={props.project.title} layout="fill" objectFit='cover'  /> 
      }
      <p className="text-3xl p-10">{props.project.title}</p>
      <p className="pt-10 px-10">{props.project.description}</p>
      <p className="px-10 text-base">{props.project.tech}</p>
      <div className="cursor-pointer border-2 border-black rounded-2xl m-10">
          <a href={props.project.link} target="_blank" rel="noopener noreferrer"><p className="text-center p-2">See project</p></a> 
      </div>
    </div>
  )
}

export default Projectcard
