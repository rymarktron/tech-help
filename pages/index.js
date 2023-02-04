import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from "react";

export default function Home() {
  var app_title = "Techknowledgy";

  //concacanate variable to send to prompt:
  var prepare = "Write step by step instructions on how to address this issue: ";
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(text);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{app_title}</title>
        <meta name="description" content="App for hack for the future event" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <Image
          src="laptop-logo.svg"
          alt="Logo"
          width={120}
          height={80}
        />
        <h1 className={styles.title}>
          {app_title}
        </h1>

        <p className={styles.description}>
          Welcome to {app_title}, a place to share how to use tech for all ages. 
          <br/>
          The reality is learning technology can be difficult. It is a site that can answer any question
          all in one place. 
          <br/>Have a question, write it below and 
          we&apos;ll give step-by-step instructions.
        </p>

        <p className={styles.description}>
          Some common questions:
          <br/>
          1. How do I check and change my Facebook account from public to private?
          <br/>
          2. My phone storage says it&apos;s full. What can I do?
          <br/>
          3. How do I Facetime someone with my iPhone?
        </p> 

        <div className={styles.description}>
          <h3>Enter a question:</h3>
          <form onSubmit={handleSubmit}>
            <textarea value={text} onChange={handleChange} />
            <br/>
            <button type="submit">Submit</button>
          </form>
        </div>
        
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
&#47;&#47;
<p>The value entered is: {prompt}</p>
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