import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Search from "../components/search";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="UTF-8"/>
        <title>SuperConvert</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          SuperConvert
        </h1>

        {/* <div style={{ width: "100%" }}>
          <Search />
        </div> */}

        <div className={styles.grid}>
          <Link href="/base64Decode">
            <a className={styles.card}>
              <h3>Decode Base64 &rarr;</h3>
              <p>Have to deal with <i>Base64</i> format? Then this site is made for you! Use our super handy online tool to decode your data.</p>
            </a>
          </Link>

          {/* <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/juliandavidmr"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <strong>{' '}@juliandavidmr</strong>
        </a>
      </footer>
    </div>
  )
}
