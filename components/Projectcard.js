'use client'

import Image from 'next/image'
import Link from 'next/link';
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
    className="flex flex-col relative justify-between align-baseline min-h-[640px] h-full sm:w-[443px] w-full border-t-2 border-r-2 border-b-2 border-black dark:border-white flex-none"
    onMouseOver={handleMouseOver} 
    onMouseOut={handleMouseOut} 
    >
      {isHovering && 
        <Image src={props.project.image} className="object-cover" alt={props.project.title} layout="fill"  /> 
      }
      <div className="">
        <p className="text-3xl p-10">{props.project.title}</p>
      </div>
      <div className="">
        <p className="pt-10 px-10">{props.project.description}</p>
        <p className="px-10 text-base">{props.project.tech}</p>
      </div>
      <div className="cursor-pointer border-2 border-black rounded-2xl m-10 hover:bg-black">
      <Link href={`/projects/${props.project.slug}`}>
          <span className="text-center p-2 hover:text-white">See project</span> 
        </Link>
      </div>
    </div>
  )
}

export default Projectcard
