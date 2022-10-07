import { motion } from 'framer-motion'
import React from 'react'
import { Experience } from '../typings'
import ExperienceCard from './ExperienceCard'

type Props = {
    experiences: Experience[]
}

function WorkExperience({experiences}: Props) {
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
    className='relative flex flex-col items-center h-screen max-w-full px-10 mx-auto overflow-hidden text-center md:text-left md:flex-row justify-evenly'
    >

        <h3 className='absolute top-24 uppercase font-extrabold tracking-[20px] text-white text-2xl'>Experience</h3>
        <div className='flex w-full p-10 space-x-5 overflow-x-scroll snap-x snap-mandatory
                        scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F1EC40]'>
            {/* ExperienceCard */}
            {experiences.map((experience)=>(
                <ExperienceCard
                    key={experience._id}
                    experience={experience}
                />
            ))}
        </div>

    </motion.div>
  )
}

export default WorkExperience