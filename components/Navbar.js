export default function Navbar() {
    return (
        <div className="flex flex-row justify-between py-2 px-16 sticky top-0;">
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