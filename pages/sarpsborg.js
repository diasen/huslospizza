import Head from 'next/head';
import styles from '../css/Home.module.css';
import Return from '../components/return/Return';

import Header from '../components/header/Header';
import Sarpsborgheading from '../components/sarpsborg/Sarpsborgheading';
import Sarpsborgabout from '../components/sarpsborg/Sarpsborgabout';
import Footer from '../components/footer/Footer';

export default function Sarpsborg() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Husløs pizza Sarpsborg</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Header />
        <Return />
        <Sarpsborgheading />
        <Sarpsborgabout />
      </main>

      <Footer />
    </div>
  );
}
