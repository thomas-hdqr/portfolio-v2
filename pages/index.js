import Head from 'next/head'
import Hero from '../components/Hero'
import Work from '../components/Work'
import Aboutme from '../components/Aboutme'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Thomas Haudiquer - Frontend Developer</title>
        <meta name="Thomas Haudiquer - Frontend Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero /> 
        <Work />
        <Aboutme />
      </main>
      <footer>
        <Contact />
      </footer>
    </div>
  )
}
