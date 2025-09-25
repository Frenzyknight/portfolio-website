"use client";
import React from 'react'
import Image from "next/image";
import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react'
import { motion } from "motion/react"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='flex justify-between items-center p-4 md:px-10 md:py-2 lg:px-16 lg:py-4'>
        <div id='logo-icon' className='flex gap-3 items-center justify-between'>
            <Image src="/logo 1.png" alt="Generic logo of letter P" width={40} height={40} />
            <span className='text-sm md:text-base lg:text-xl font-bold font-sora'>Gaurav Ganju</span>
        </div> 
        <button className='md:hidden z-10'>
            <Hamburger size={28} toggled={isOpen} toggle={setIsOpen} />
        </button>
        <nav className={`${isOpen ? 'flex' : 'hidden'} md:flex md:bg-white h-full justify-center md:static md:py-8 py-16 w-full md:w-fit absolute top-0 right-0 z-5 bg-black/30 backdrop-blur-lg`}>
            <ul className='md:flex-row flex flex-col justify-center md:gap-4 gap-6 font-sora font-semibold text-xl md:text-base lg:text-xl text-center text-white md:text-black cursor-pointer'>
                <motion.a href='#about' whileHover={{scale:1.1}}><li>About Me</li></motion.a>
                <motion.a href='#skills' whileHover={{scale:1.1}}><li>Skills</li></motion.a>
                <motion.a href='#project' whileHover={{scale:1.1}}><li>Projects</li></motion.a>
                <motion.a href='#contact' whileHover={{scale:1.1}}><li>Contact Me</li></motion.a>
                <motion.a href='/resume.pdf' download="Gaurav_Ganju_Resume.pdf" whileHover={{scale:1.1}}><li className='md:hidden'>Resume</li></motion.a>
            </ul>
        </nav>
        <motion.a whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} href='/resume.pdf' download="Gaurav_Ganju_Resume.pdf" className='hidden md:text-base text-sm lg:text-xl md:flex gap-2 font-sora font-semibold md:py-4 md:px-5 rounded-sm text-white bg-black'>
            Resume
            <Image src="/download.png" alt="download icon" width={20} height={20} className='object-contain' />
        </motion.a>
    </header>
  )
}