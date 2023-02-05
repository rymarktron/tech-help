import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from "react";
import Link from 'next/link';

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

  //ask user level of experience. 
  const [experience, setExperience] = useState(null);

  return (
    <div className={styles.container}>
      <Head>
        <title>{app_title}</title>
        <meta name="description" content="App for hack for the future event" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <Link href = "https://www.techknowledgy.tech/"><Image
          src="laptop-logo.svg"
          alt="Logo"
          width={120}
          height={80}
        />
        </Link>

        <div className={styles.title}>
          <h1>
            {app_title}
          </h1>
        </div>

        <p className={styles.description}>
          Welcome to {app_title}, a place to share how to use tech for all ages. 
          The reality is learning technology can be difficult. It is a site that can answer any question
          all in one place. Have a question, write it below and 
          we&apos;ll give step-by-step instructions. 
          <br/>
          <br/>
          Some common questions asked here are:
          <br/>
          1. How do I check and change my Facebook account from public to private?
          <br/>
          2. My phone storage says it&apos;s full. What can I do?
          <br/>
          3. How do I Facetime someone with my iPhone?
          <br/>
          You can ask anything
        </p>

        <div className={styles.form}>
          <h3>How would you describe your experience with technology?</h3>
          <h5>Beginner is never used before, intermediate is used but still unfamiliar.
          Expert is know what you are doing but would like some guidance</h5>
          <button onClick={() => setExperience('Beginner')}>Beginner</button>
          <button onClick={() => setExperience('Intermediate')}>Intermediate</button>
          <button onClick={() => setExperience('Expert')}>Expert</button>
          { experience && <p>Your experience with technology is: <b>{experience}</b></p> }
        </div>

        <br/>

        <div className={styles.form}>
          <h3>Enter your question below and click submit when done:</h3>
          <form onSubmit={handleSubmit}>
            <textarea rows="4" cols="50" value={text} onChange={handleChange} />
            <br/>
            <button 
              type="submit" 
              
            
            >
              Submit
            </button>
          </form>
        </div>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with 💜 and{' '}
          <span className={styles.logo}>
            <Image src="/laptop-logo.svg" alt="Vercel Logo" width={30} height={16} />
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