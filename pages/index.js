import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from "react";
import Link from 'next/link';
import axios from 'axios';

export default function Home() {
  var app_title = "Techknowledgy";

  //concacanate variable to send to prompt:
  const prepare = "Write numbered instructions on how to address this question";
  const [text, setText] = useState('');

  //ask user level of experience. 
  const [experience, setExperience] = useState(null);
  const [textResponse, setTextResponse] = useState('');

  const answers1 = [
    "Connect your phone to a computer using a USB cable.",
    'On the phone, unlock it and allow the computer to access it as a media device.',
    'On the computer, open the file explorer and find your phone.',
    'Locate the photos on your phone. The location may vary depending on the phone&apos;s operating system, but commonly it is in the "DCIM" folder.',
    'Select the photos you want to transfer.',
    'Copy the selected photos to your computer&apos;s hard drive',
    'You can choose to save them to a specific folder or the default Pictures folder',
    'Once the transfer is complete, safely disconnect your phone from the computer.',
    'Verify that the photos have been transferred to your computer by opening the folder where they were saved.'
  ];

  const handleSubmit = async (event) => {
    for (let i = 0; i < answers1.length; i++) {
      document.write(answers1[i]);
    }    
  }

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
            <textarea 
              rows="4" cols="50" 
              value={text} 
              onChange={(event) => setText(event.target.value)} 
              placeholder={"Write your question here."}  
              />
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
          Made with 💜 and{' '}
          <span className={styles.logo}>
            <Image src="/laptop-logo.svg" alt="Vercel Logo" width={30} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

/*  useEffect(() => {
    const fetchData = async () => {
      const res = await callOpenAiApi(prompt);
      alert(res);
    };
    fetchData();
  }, []);

  const callOpenAiApi = async (prompt) => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/text-davinci-003/jobs',
        {
          prompt: prompt
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
          }
        }
      );
      return JSON.stringify(response.data);
    } catch (error) {
      console.error(error);
      return error;
    }
  };

    const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    //create prompt
    if (experience != null)
    {
      let blurb = `${prepare} with analogies meant for a ${experience} in tech: ${text}`;
    }
      let blurb = `${prepare}: ${text}`;
    

    const res = await callOpenAiApi(blurb);
    alert(res);
  };
*/