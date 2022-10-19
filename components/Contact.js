import React from 'react'

function Contact() {
  return (
    <div id="contact" className="px-20 h-screen pt-20">
        <div className="">
            <h2 className="text-7xl">Want to work together?</h2>
            <div className="pt-20">
              <a className="text-9xl break-words" href="mailto:thomashaudiquer@gmail.com">thomashaudiquer@<br/>gmail.com</a>
            </div>
        </div>
        <div className="footer-menu flex flex-row justify-center pt-48">
            <p><a href="https://github.com/" target="_blank" rel="noopener noreferrer">linkedin</a></p>
            <p>,</p>
            &nbsp;
            <p><a href="https://github.com/" target="_blank" rel="noopener noreferrer">twitter</a></p>
            <p>,</p>
            &nbsp;
            <p><a href="https://github.com/" target="_blank" rel="noopener noreferrer">github</a></p>
            <p>,</p>
            &nbsp;
            <p><a href="https://github.com/" target="_blank" rel="noopener noreferrer">codepen</a></p>
        </div>
    </div>
  )
}

export default Contact