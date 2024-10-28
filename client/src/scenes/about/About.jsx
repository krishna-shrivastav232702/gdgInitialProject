import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import myImage from "../../assets/krishna.jpeg"

const About = () => {
  return (
    <div className="py-40 bg-darkBlue  flex justify-center items-center">
      <div className="px-28 flex-shrink-0 ">
        <img src={myImage} className="w-60 h-auto object-cover rounded-2xl hover:scale-110 transition-transform duration-300 " />
      </div>

      <div className="px-4 lg:px-24 ">
        <h2 className="text-4xl font-bold mb-10 text-white">About Me</h2>
        <span className="text-2xl font-bold text-red-600 ">KRISHNA SHRIVASTAV - Web Developer</span>
        <p className=" mb-4 font-semibold text-lg mt-2 text-white">
          I'm a passionate web developer specializing in the MERN stack. Currently, I'm in my second year at NMIT in Bangalore, where I'm honing my skills and deepening my knowledge of web technologies.
        </p>
        <p className="mb-4 text-white">
          I enjoy creating dynamic and responsive web applications that enhance user experiences. My journey in tech has fueled my curiosity, and I'm always eager to explore new technologies and frameworks that can broaden my skill set.
          In addition to my technical skills, I strive to become a proficient problem solver. I believe that tackling challenges head-on is essential for personal and professional growth. Whether it's debugging a complex issue or finding innovative solutions to real-world problems, I embrace every opportunity to learn and improve.</p>
        <div className="flex space-x-4 mt-4">
          <a href="https://github.com/krishna-shrivastav232702" target="_blank" rel="noopener noreferrer">
            <FaGithub className="h-6 w-6 text-gray-800 hover:text-black transition text-white" />
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="h-6 w-6 text-pink-600 hover:text-pink-800 transition" />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="h-6 w-6 text-blue-400 hover:text-blue-600 transition" />
          </a>
          <a href="https://www.linkedin.com/in/krishna-shrivastav-a08b51265" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="h-6 w-6 text-blue-700 hover:text-blue-900 transition" />
          </a>
        </div>
      </div>

    </div >
  )
}

export default About