import Head from 'next/head'
import Image from 'next/image'

import styles from '@/styles/Home.module.css'
import Header from '../app/components/Nav'
import Hero from '../app/components/Hero'
import About from '../app/components/About'
import WorkExperience from '../app/components/WorkExperience'
import Skills from '../app/components/Skills'
import Projects from '../app/components/Projects'

import Link from 'next/link'
import { GetStaticProps } from 'next'
import { PageInfo, Experience, Skill, Project, Social } from '../typings'

import { BsFillArrowUpSquareFill } from 'react-icons/bs'

import {sanityClient} from '../lib/sanity.client'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}


export default function Home({pageInfo, experiences, skills, projects, socials}: Props) {
  return (
    <div className='bg-[#ecf0f3] text-[#1f2937] h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#5a87c5]/80
     scroll-smooth overflow-x-hidden'>
      <Head>
        <title>Kevin | CS Student/Developer</title>
        <meta name="description" content="I'm a Computer Science student and an aspiring Fullstack Developer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header socials={socials}/>

      {/* Hero */}
      <section id="hero" className='snap-center'>
      <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience */}
      <section id="experience" className='snap-center'>
        <WorkExperience experiences={experiences}/>
      </section>

      {/* Skills */}
      <section id="skills" className='snap-start'>
        <Skills skills={skills}/>
      </section>

      {/* Projects */}
      <section id="projects" className='snap-start'>
        <Projects projects={projects}/>
      </section>

      {/* Contact */}


      {/* Footer */}
      
      <footer className='sticky bottom-5 w-full'>
        <div className='flex items-center justify-center'>
        <Link href='#hero'>
          
          <BsFillArrowUpSquareFill className='w-10 h-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'/>
          </Link>
        </div>
      </footer>
    

    </div>
  )
}

const client = sanityClient

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo = await client.fetch(`*[_type == 'pageInfo'][0]`)
  const experiences = await client.fetch(`
  *[_type == 'experience'] {
  ...,
    technologies[]->
  }
  `)
  const skills = await client.fetch(`*[_type == 'skill']`)
  const projects = await client.fetch(`
  *[_type == "project"] {
    ...,
    technologies[]->
}`)
  const socials = await client.fetch(`*[_type == 'social']`)

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials

    },
    revalidate: 10
  }

}
