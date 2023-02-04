import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from "react";

export default function Home() {
  //Use state and begin with empty.
  const [prompt, setPrompt] = useState("");

  //Function that changes
  const handleChange = (event) => {
    setPrompt(event.target.value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Tech For Me</title>
        <meta name="description" content="App for hack for the future event" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          ExplainMy.Tech
        </h1>

        <p className={styles.description}>
          &#47;&#47;Welcome to explainmy.tech, a place to share how to use tech for all ages. 
          The reality is learning technology can be difficult. It is a site that can answer any question
          all in one place. Have a question, write it below and 
          we&apos;ll give step-by-step instructions.
        </p>

        <p>Some common questions:
        </p>

        <ol type="A">
          <li>How do I change my Facebook account to private</li>
          <li>My phone storage says full. How can I transfer the photos out?</li>
          <li>Milk</li>
        </ol>  

        <p>Enter an issue you are experiencing with below:</p>

        <div>
          <input type="text" onChange={handleChange} />
          <p>The value entered is: {prompt}</p>
        </div>
        
        <p>Find in-depth information about Next.js features and API.</p>

        <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Render &rarr;</h2>
        </a>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

/*
<div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Step 1 &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Step 2 &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Step 3&rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Step 4 &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
*/