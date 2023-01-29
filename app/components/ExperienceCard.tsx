import { Experience } from '../../typings';
import { motion } from 'framer-motion';
import React from 'react';
import { urlFor } from '../../lib/sanity.client'

type Props = {
  experience: Experience;
}

function ExperienceCard({experience}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#FAF9F6] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}

      src={urlFor(experience?.companyImage).url()}
      className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' />
    <div className='px-0 md:px-10'>
      <h3 className='text-2xl font-bold'>{experience.jobTitle}</h3>
      <h4 className='text-xl'>{experience.company}</h4>
      <div className='flex space-x-2 my-2'>
        {experience.technologies.map((technology) => (
        <img
        key={technology._id}
        className="h-10 w-10 rounded-full"
        src={urlFor(technology.image).url()}
        />
        ))

        }
        
      </div>
      <p className='uppercase py-5 text-gray-500'>{new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}</p>
      <ul className='list-disc space-y-4 ml-5 text-lg h-64 overflow-y-scroll scrollbar-thin scrollbar-track-black/80 scrollbar-thumb-[#5a87c5]/80'>
        {experience.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
    </article>
  )
}

export default ExperienceCard