import Head from 'next/head';
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home = () => {


  return (
    <div className={styles.container}>
      <Head>
        <title>Fawaz Sullia's portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h2>Still working on this...</h2>
        <p>In the meantime, checkout my <Link href="/blog">blog</Link></p>
      </main>
</div>
  );
};

export default Home;


