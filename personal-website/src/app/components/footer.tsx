import React from 'react';
import Image from "next/image";

const Footer = () => {
  return (
    <div> 
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center font-[family-name:var(--font-montserrat)]">
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
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/ReinaResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Resume
        </a>
      </footer> </div>
  );
};

export default Footer;

