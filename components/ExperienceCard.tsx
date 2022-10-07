import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import tech_logo from '../public/react.png'
import { urlFor } from '../sanity'
import { Experience } from '../typings'

type Props = {
  experience: Experience
}

function ExperienceCard({experience}: Props) {
  return (
    <article className='flex flex-col rounded-lg
                        items-center space-y-7 flex-shrink-0
                        w-[500px] md:w-[600px] xl:w-[900px]
                        snap-center bg-[#292929] p-10
                        hover:opacity-100 opacity-40 cursor-pointer
                        transition-opacity duration-200'>
        <motion.img
            initial={{
              y: -100,
              opacity: 0
            }}
            transition={{
              duration: 1.2
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className='w-52 h-52 rounded-full md:rounded-full xl:w-[200px] xl:[200px]
            object-cover object-center'
            src={urlFor(experience?.companyImage).url()}
        />
        <div className='px-0 md:px-10'>
          <h4 className='text-4xl font-light'>{experience?.jobTitle}</h4>
          <p className='mt-1 text-2xl font-bold'>{experience?.company}</p>
          <div className='flex my-2 space-x-2'>
            {experience.technologies.map((technology)=>(
                <Image key={technology?._id} className='w-10 h-10 rounded-full ' src={urlFor(technology?.image).url()} alt="tech logo" width={50} height={50} />
            ))}
          </div>
          <p className='py-5 text-gray-300 uppercase'>{
            new Date(experience?.dateStarted).toDateString()
          } - {
            new Date(experience?.dateEnded).toDateString()
          }
          </p>

          <ul className='ml-5 space-y-4 overflow-y-scroll text-lg list-disc h-60 scrollbar-thin scrollbar-track-black
                          scrollbar-thumb-[#F1EC40]/80 pr-5'
          >
            {experience.points.map((point,i) =>(
                <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
    </article>
  )
}

export default ExperienceCard