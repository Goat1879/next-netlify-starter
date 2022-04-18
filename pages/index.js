import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Legion Varus | home</title>
        <meta name="keywords" content="pilots" />
      </Head>
      <div>
        <p className={styles.legion}>
          Legion Varus
        </p>
        
      </div>
    </>
  );
}
