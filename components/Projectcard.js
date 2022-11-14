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
    className="flex flex-col justify-between align-baseline min-h-[640px] h-full sm:w-[443px] w-full border-t-2 border-r-2 border-b-2 border-black flex-none relative scrollbar-hide"
    onMouseOver={handleMouseOver} 
    onMouseOut={handleMouseOut} 
    onClick={() => {props.project.link}}
    >
      {isHovering && 
        <Image src={props.project.image} className="object-cover" alt={props.project.title} layout="fill"  /> 
      }
      <p className="text-3xl p-10">{props.project.title}</p>
      <div>
        <p className="pt-10 px-10">{props.project.description}</p>
        <p className="px-10 text-base">{props.project.tech}</p>
      </div>
      <div className="cursor-pointer border-2 border-black rounded-2xl m-10 hover:bg-black">
          <a href={props.project.link} target="_blank" rel="noopener noreferrer"><p className="text-center p-2 hover:text-white">See project</p></a> 
      </div>
    </div>
  )
}

export default Projectcard
