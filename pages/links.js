import styles from '../styles/Home.module.css'
import Image from 'next/image'

function Links() {
  return (
    <div className="text-center sm:px-40 sm:py-20 py-5 h-screen bg-yellow-400">

        {/* Profile */}
        <div className="overflow-hidden rounded-2xl">
            <Image src="/polaroid-low-resolution.png" alt="Thomas Haudiquer" width="200" height="200"className="rounded-full max-w-full h-auto" />
        </div>
        <h1 className="sm:text-5xl text-2xl font-bold">Thomas Haudiquer</h1>
        <h2 className="sm:text-3xl text-xl font-normal">Frontend developer</h2>


        {/* Contact icons */}
        <div className="pt-5 flex flex-row justify-center space-x-5">
            <div>
                <a href="https://github.com/"target="_blank" rel="noopener noreferrer">
                    <Image src='/twitter.png' alt="Twitter" width="20" height="20" className="" />
                </a>
            </div>
            <div>
                <a href="https://github.com/"target="_blank" rel="noopener noreferrer">
                    <Image src='/github.png' alt="Github" width="20" height="20" className="" />
                </a>
            </div>
            <div>
                <a href="https://github.com/"target="_blank" rel="noopener noreferrer">
                    <Image src='/email.png' alt="email" width="20" height="20" className="" />
                </a>
            </div>
            <div>
                <a href="https://github.com/"target="_blank" rel="noopener noreferrer">
                    <Image src='/whatsapp.png' alt="Whatsapp" width="20" height="20" className="" />
                </a>
            </div>
        </div>


        {/* Links */}
        <div className="">
            <div className="bg-red-500 mx-20 my-6 py-4 cursor-pointer border-2 border-black hover:scale-105 transform transition duration-300 ease-out">
                 <p className="text-xl font-bold">Buy Me A Coffee ☕️</p>
            </div>
            <div className="bg-red-500 mx-20 my-6 py-4 cursor-pointer border-2 border-black hover:scale-105 transform transition duration-300 ease-out">
                 <p className="text-xl font-bold">Buy Me A Coffee ☕️</p>
            </div>
            <div className="bg-red-500 mx-20 my-6 py-4 cursor-pointer border-2 border-black hover:scale-105 transform transition duration-300 ease-out">
                 <p className="text-xl font-bold">Buy Me A Coffee ☕️</p>
            </div>
            <div className="bg-red-500 mx-20 my-6 py-4 cursor-pointer border-2 border-black hover:scale-105 transform transition duration-300 ease-out">
                 <p className="text-xl font-bold">Buy Me A Coffee ☕️</p>
            </div>
        </div>

    </div>

  )
}

export default Links