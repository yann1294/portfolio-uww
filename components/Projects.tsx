import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../sanity'
import { Project } from '../typings'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  projects: Project[]
}

const Projects = ({projects}: Props) => {
  return (
    <motion.div
     initial={{ opacity: 0}}
     whileInView={{ opacity: 1}}
     transition={{duration: 1.5}}
     className='relative z-0 flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden text-left md:flex-row justify-evenly'>

        <h3 className='absolute top-24 uppercase tracking-[20px] text-white font-extrabold text-2xl'>Projects</h3>

        <div className='relative z-20 flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory
                       scrollbar-thin scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F1EC40]'>
            {projects.map((project,i):any =>(
              // eslint-disable-next-line react/jsx-key
              <div key={project?._id} className='flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-20 space-y-5 snap-center md:p-44'>
                <motion.img 
                initial={{ y: -300, opacity: 0}}
                transition={{ duration: 1.2}}
                whileInView={{ opacity: 1, y:0}}
                viewport={{once: true}}
                src={urlFor(project?.image).url()} alt="project image" />
                <div className='max-w-6xl px-0 space-y-10 md:px-10'>
                  <h4 className='text-4xl font-semibold text-center'> <span className='underline decoration-[#F1EC40]/50'>Case Study {1 + i} 0f {projects.length}: </span>{" "} {project?.title}</h4>
                  <div className='flex items-center justify-center space-x-2'>
                  {
                      project?.technologies.map((technology)=>(
                        <Image
                          className='w-20 h-20'
                          key={technology._id}
                          src={urlFor(technology?.image).url()}
                          alt='project image'
                          width={70}
                          height={70}
                        />
                      ))
                  }
                  </div>
                  <p className='text-lg text-center md:text-left'>
                    {project?.summary}
                    {" "}
                    <Link href={project?.linkToBuild}><a className='underline text-blue'>Check it out here.</a></Link>
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'>

        </div>
    </motion.div>
  )
}

export default Projects