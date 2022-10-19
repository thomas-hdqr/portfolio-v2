import React from 'react'

function Navbar() {
  return (
    <div className="flex flex-row justify-between sticky">
        <div className="">
            <p>Thomas Haudiquer</p>
        </div>
        <div className="navbar-menu flex flex-row">
            <p><a href="#work">work</a></p>
            <p>,</p>
            &nbsp;
            <p><a href="#about">about</a></p>
            <p>,</p>
            &nbsp;
            <p><a href="#contact">contact</a></p>
        </div>
    </div>
  )
}

export default Navbar