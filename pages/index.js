import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Legion Varus | home</title>
      <meta name="keywords" content="pilots" />
    </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>The residents of earth, a rare blue ball teeming with life, thought they were alone in the universe…until the arrival of the Galactics. Representatives of the Galactics, a federation of ancient species inhabiting star systems at the core of the galaxy with unfathomable technologies that, to earth’s residents, might as well have been magic, came to earth upon discovering that earth’s inhabitants had developed faster-than-light travel. To the Galactics, species with the ability to traverse the vast distances between star systems would either join the galactic family of species and contribute something of value or face extermination as a threat to, and a drain on, the Galactics. With little in the way of technology, resources or anything else of value to serve as tribute for the Galactics, the inhabitants of earth offered the only thing they had: themselves. Forming legions in the style of ancient Rome, earth’s inhabitants assumed the role of regional enforcer for the Galactics in the frontier region of space to which earth belonged. Biding their time, exploring neighboring star systems in search of new technologies and resources, struggling to sustain the people of earth, maintain order among their own, battling other species, sometimes for their own survival and sometimes at the direction of the Galactics, earth’s inhabitants entered a new and perilous time in their existence because survival among the species that comprise the “galactic family” was a zero sum game.</p>
        <Link href="/pilots">
          <a className={styles.btn}>See pilot list</a>
        </Link>
      </div>
    </>
  )
}
