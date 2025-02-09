import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import devanshi from '../assets/devanshi.jpg';
import dipansh from '../assets/dipanshprofile.png';
import yagdeep from '../assets/yagyadeep.jpg';
import nihal from "../assets/nihal.jpg";
import T0  from '../assets/T0.jpg';
import T1  from '../assets/T00.jpg';
import T2  from '../assets/T2 (1).png';
import T3  from '../assets/T3.png';
import T4  from '../assets/T1 (3).png';
import T5  from '../assets/T9.png';
import T6  from '../assets/T7.png';
import Pandey  from '../assets/PANDEY.png';
import cse_hod from "../assets/cse_hod.png";

const Team = () => {
  const teamMembers = [
    {
      id: 0,
      name: "Prof. Jitendra Singh Thakur Sir (HOD of CSE)",
      role: "Mentor",
      image: cse_hod, 
    },
    {
      id: 1,
      name: "Yagyadeep Ahirwar",
      role: "Team Leader",
      image: yagdeep, 
      description: "Full-stack developer with experience in building scalable web applications. Passionate about clean code.",
      github: "",
      linkedin: "https://www.linkedin.com/in/yagyadeep-ahirwar-dev/",
      email: ""
    },
    {
      id: 2,
      name: "Devanshi Jain",
      role: "Backend Developer",
      image: devanshi, 
      description: "Creative designer with a keen eye for detail and user experience.",
      github: "",
      linkedin: "https://www.linkedin.com/in/devanshi-jain-9b2318268/",
      email: ""
    },
    {
      id: 3,
      name: "Dipansh Gupta",
      role: "MERN Stack Developer",
      image: dipansh, 
      description: "Experienced project manager with a track record of successful tech events.",
      github: "",
      linkedin: "https://www.linkedin.com/in/dipansh-gupta-1006842a4/",
      email: ""
    },
    {
      id: 4,
      name: "Nihal Patidar",
      role: "Frontend Developer",
      image: nihal, 
      description: "Expert in agile methodologies with experience in project management.",
      github: "",
      linkedin: "https://www.linkedin.com/in/nihal-patidar/",
      email: ""
    },
    // {
    //   id: 5,
    //   name: "Kavya Sharma",
    //   role: "Backend Developer",
    //   image: "",
    //   description: "Creating the visual and interactive parts of a website.",
    //   github: "",
    //   linkedin: "",
    //   email: ""
    // },
    
  ];

  const coordinatorTeam = [
    {
      id: 1,
      name: "Dr.Sanjay Soni",
      role: "Mentor",
      image: T0
    },
    {
      id: 2,
      name: "Dr.Anubha Maheswari",
      role: "Mentor",
      image: T1
    },
    {
      id: 3,
      name: "Gurdeep Singh Oberoi",
      role: "Convener",
      image: T2
    },
    {
      id: 4,
      name: "Shubhanshu Pandey",
      role: "Co-Convener",
      image: T4
    },
    {
      id: 5,
      name: "Ansal Yadav",
      role: "Public Relation Head",
      image: T3
    },
    {
      id: 6,
      name: "Harsh Pandey",
      role: "Management Head",
      image: Pandey
    },
    {
      id: 7,
      name: "Harsh Seth",
      role: "Treasurer",
      image: T5
    },
    {
      id: 8,
      name: "Harsh Yadav",
      role: "Security head",
      image: T6
    },
    
   
    

  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-blue-900 to-sky-900">
      {/* Coordinator Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div className="text-center mb-12">
          <motion.h1 className="text-4xl font-bold text-white mb-4">Coordinator</motion.h1>
          <motion.p className="text-gray-300 text-lg">Orchestrating Success, Elevating Events!</motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {coordinatorTeam.map((member) => (
            <div key={member.id} className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden p-6 flex items-center">
              <img
                src={member.image || 'https://via.placeholder.com/150'}
                alt={member.name}
                className="w-20 h-20 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <span className="px-3 py-1 bg-sky-500 text-white rounded-full text-sm font-medium">{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div className="text-center mb-12">
          <motion.h1 className="text-4xl font-bold text-white mb-4">Meet Our TECH Team</motion.h1>
          <motion.p className="text-gray-300 text-lg">The passionate Technical individuals behind the Website</motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
           <div key={member.id} className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden p-6 flex items-center">
           <img
             src={member.image || 'https://via.placeholder.com/150'}
             alt={member.name}
             className="w-20 h-20 rounded-full object-cover mr-4"
           />
           <div>
             <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
             <span className="px-3 py-1 bg-sky-500 text-white rounded-full text-sm font-medium">{member.role}</span>
           </div>
         </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
