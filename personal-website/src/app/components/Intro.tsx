import React from 'react';
import Image from "next/image";

const Intro = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
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
        Hello! I'm Kiersten Reina, a software engineer with three years of experience in full-stack development  
        with an interest in front-end and design-focused roles. My technical expertise includes AWS, 
        JavaScript, Angular, and React. I excel at problem-solving with a methodical approach and 
        thrive in fast-paced, agile environments. As a collaborative team player, I prioritize 
        delivering high-quality code that aligns with stakeholder requirements and enhances user experiences. 
        I take pride in producing work that is both efficient and impactful.
        </p>
        <p className="text-sm text-center sm:text-left font-[family-name:var(--font-montserrat)]"> 
          I am currently based in New Hampshire and enjoy spending my free time hiking, 
        playing roller derby, and crocheting.</p>
      </div>
    </div>
  );
};

export default Intro;