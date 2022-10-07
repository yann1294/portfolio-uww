import React from 'react'
import Image from 'next/image'
import Original_on_Transparent from '../public/Original_on_Transparent.png'
import Instagram_Profile_Picture from '../public/Instagram_Profile_Picture.jpg'
import { motion } from 'framer-motion'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    pageInfo: PageInfo
}

function About({pageInfo}: Props) {
  return (
    <motion.div
    initial={{
        opacity:0
    }}
    whileInView={{
        opacity: 1
    }}
    transition={{
        duration: 1.5
    }}
    className='relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-white font-extrabold text-2xl'>About</h3>
        <motion.img
          className='
          -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full
          object-cover md:rounded-lg md:w-64 md:h-96
          xl:w-[500px] xl:h-[600px]' 
        initial={{
            x: -200,
            opacity:0
        }}
        transition={{
            duration: 1.2
        }}
        whileInView={{
            x: 0,
            opacity: 1
        }}
        viewport={{
            once: true
        }}
        src={urlFor(pageInfo?.profilePic).url()}
        />
         

        <div className='px-0 space-y-10 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F1EC40]/60'>little</span>{" "} 
            background
            </h4>
            <p className='text-base'>
                {pageInfo?.backgroundInformation}
            </p>
        </div>

    </motion.div>
  )
}

export default About