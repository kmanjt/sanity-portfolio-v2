import React from 'react';
import { motion } from 'framer-motion';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles'; 
import Link from 'next/link';
import { PageInfo } from '../../typings'
import { urlFor } from '../../lib/sanity.client'

type Props = {
    pageInfo: PageInfo;
}

function Hero({pageInfo}: Props) {
    const [text, count] = useTypewriter({
        words: [`Hi, I'm ${pageInfo?.name}.`, 'Developer.', 'Designer.', 'Creator.'],
        loop: true,
        delaySpeed: 2000,
    });

    
    return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img src={urlFor(pageInfo?.heroImage).url()} alt='kevin' className='relative rounded-full h-32 w-32 mx-auto object-cover'/>
    <div className='z-20'>
        <h2 className='text-sm uppercase font-semibold text-gray-500 pb-2 tracking-[10px]'>{pageInfo?.role}</h2>

    <h1 className='text-4xl lg:text-5xl font-semibold px-10'>
    <span className='mr-3'>{text}</span><Cursor />
    </h1>


    <div className="pt-5">
        <Link href="#about">
    <button className='heroButton m-2'>About</button></Link>
    <Link href="#experience"><button className='heroButton m-2'>Experience</button></Link>
    <Link href="#skills">
    <button className='heroButton m-2'>Skills</button></Link>
    <Link href="#projects">
    <button className='heroButton m-2'>Projects</button>  </Link>

          </div>

    </div>
    </div>
  )
}

export default Hero