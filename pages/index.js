import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Work from '../components/Work'
import Aboutme from '../components/Aboutme'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thomas Haudiquer - Front-end Developer</title>
        <meta name="Thomas Haudiquer - Front-end Developer" content="Generated by create next app" />
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
