'use client'
import Image from "next/image";
import React from 'react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger the fade-in animation after the component is mounted
    setFadeIn(true);
  }, []);

  
  return (
    
    <div className="background grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className={`${fadeIn ? 'fadeIn' : ''} header font-[family-name:var(--font-montserrat)]  `} >
        Hello, Welcome to My Page!
    </h1>
      <main className="flex flex-col sm:flex-row gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert rounded-full"
          src="/headshot.jpg"
          alt="Personal headshot"
          width={180}
          height={38}
          priority
        />

        <div  className="flex flex-col max-w-prose">
          <p className="text-sm text-center mb-3 sm:text-left font-[family-name:var(--font-montserrat)]">
          I am a software engineer with two years of experience in full-stack development, 
          specializing in front-end and design-focused roles. My technical expertise includes AWS, 
          JavaScript, Angular, and React. I excel at problem-solving with a methodical approach and 
          thrive in fast-paced, agile environments. As a collaborative team player, I prioritize 
          delivering high-quality code that aligns with stakeholder requirements and enhances user experiences. 
          I take pride in producing work that is both efficient and impactful.
          </p>
          <p className="text-sm text-center sm:text-left font-[family-name:var(--font-montserrat)]"> 
            I am currently based in New Hampshire and enjoy spending my free time hiking, 
          playing roller derby, and crocheting.</p>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/kar5326"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github-mark.svg"
            alt="Github logo"
            width={16}
            height={16}
          />
          Github
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/kiersten-reina"
          target="_blank"
          rel="noopener noreferrer"
          >
          <Image
            aria-hidden
            src="/LI-In-Bug.png"
            alt="Linkedin logo"
            width={16}
            height={16}
          />
          Linkedin
        </a>
      </footer>
    </div>
  );
}
