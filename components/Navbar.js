import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useState, useEffect } from 'react'

function Navbar() {

  const {systemTheme, theme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  },[])

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <SunIcon className='w-5 h-5' role="button" onClick={() => setTheme
        ('light')} />
      )
    }
    else {
      return (
        <MoonIcon className='w-5 h-5' role="button" onClick={() => setTheme
        ('dark')} />
      )
    }
  }


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
              {renderThemeChanger()}
            </div>
        </div>
    </div>
  )
}

export default Navbar