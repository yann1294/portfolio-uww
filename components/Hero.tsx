import Image from 'next/image'
import React from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import thumbnail_Black_on_White from '../public/thumbnail_Black_on_White.png'
import Link from 'next/link'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    pageInfo: PageInfo
}

function Hero({pageInfo}: Props) {
    const [text, count] = useTypewriter({
        words: [
            `We are ${pageInfo?.name}`,
            "We Love bright ideas",
            "<DevelopingFastAndSecurely/>"
        ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center'>
        <BackgroundCircles/>
        <Image 
        className='relative object-cover w-32 h-32 mx-auto rounded-full'
        alt='hero-image' src={urlFor(pageInfo?.heroImage).url()}
        width={200} height={200}
        />
        <div className='z-20'>
            <h2 className='pb-2 text-sm tracking-widest text-gray-500 uppercase'>{pageInfo?.role}</h2>
        
        <h1 className='px-10 text-5xl font-semibold lg:text-6xl'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='#F1EC40'/>
        </h1>
        <div className='pt-5'>
                <Link href='#about'><button className='heroButton'>About</button></Link>
                <Link href='#experience'><button className='heroButton'>Experience</button></Link>
                <Link href='#skills'><button className='heroButton'>Skills</button></Link>
                <Link href='#projects'><button className='heroButton'>Projects</button></Link>
        </div>
        </div>
    </div>
  )
}

export default Hero