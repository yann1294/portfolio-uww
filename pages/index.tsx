import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import Image from 'next/image'
import thumbnail_Black_on_White from '../public/thumbnail_Black_on_White.png'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'
import { fetchProjects } from '../utils/fetchProjects'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({pageInfo, experiences, skills, projects, socials}:Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen
          snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
          scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F1EC40]'>
      <Head>
        <title>UWW Amazing Portfolio</title>
      </Head>
                  {/* Header */}
      
      <Header socials={socials}/>

                  {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo}/>
      </section>
                  {/* About */}
      <section className='snap-center' id='about'>
      <About pageInfo={pageInfo}/>
      </section>
                  {/* Experience */}
      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences}/>
      </section>
                  {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills skills={skills}/>
      </section>

      <section id='projects' className='snap-start'>
        <Projects projects={projects}/>
      </section>
      

                  {/* Contact Me */}
      <section id='contact' className='snap-start'>
        <ContactMe/>
      </section>

      <Link href='#hero'>
        <footer className='sticky w-full cursor-pointer bottom-5'>
          <div className='flex items-center justify-center'>
            <Image 
            className='w-10 h-10 rounded-full cursor-pointer filter grayscale hover:grayscale-0' 
            src={thumbnail_Black_on_White} 
            width={50}
            height={50}
            alt='Footer image'
            />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async() => {

  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] =await fetchExperiences();
  const skills: Skill[] =await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] =await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    },
    revalidate: 60,
  }

}