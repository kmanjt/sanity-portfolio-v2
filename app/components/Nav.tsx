import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { Social } from "../../typings";
import { SocialIcon } from 'react-social-icons';

type Props = {
  socials: Social[];
}

function Header({socials}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
    <motion.div 
    initial={{ x: -500, opacity: 0, scale: 0.5 }}
    animate={{ x: 0, opacity: 1, scale: 1 }}
    transition={{ duration: 1.5 }}
    className='flex flex-row items-center'>
    
    {socials.map((social) => (
      <SocialIcon key={social._id} 
      url={social.url} fgColor="gray" bgColor="transparent"/>
    ))}

    </motion.div>
    
    </header>
  )
}

export default Header