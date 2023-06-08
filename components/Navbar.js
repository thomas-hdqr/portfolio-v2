function Navbar() {

  return (
    <div className="hidden sm:flex flex-row justify-between sticky">
        <div className="">
            <p><a href="https://thomashaudiquer.com">Thomas Haudiquer</a></p>
        </div>
        <div className="navbar-menu flex flex-row">
            <p className=""><a href="#work">work</a></p>
            <p>,</p>
            &nbsp;
            <p><a href="#about">about</a></p>
            <p>,</p>
            &nbsp;
            <p><a href="#contact">contact</a></p>
            <div className="ml-5 self-center">
            </div>
        </div>
    </div>
  )
}

export default Navbar