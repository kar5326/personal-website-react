'use client'

import React from 'react';
import Education from "./components/education";
import Experience from './components/Experience';
import Footer from "./components/footer";
import Header from "./components/header";
import Intro from './components/Intro';

export default function Home() {


  
  return (
    
    <div className="background grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Header/>
      <Intro/>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start mt-10">
        
        <Experience />
        <Education />
        
        
      </main>
      <div className=" row-start-3 text-left max-w-prose">
      
        
      </div>
      <Footer/>

    </div>
  );
}
