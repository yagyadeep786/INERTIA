import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import devanshi from '../assets/devanshi.jpg';
import dipansh from '../assets/dipanshprofile.png';
import ajay from '../assets/aajay.jpeg';
import sushil from '../assets/Sushil.png';
const Speaker = () => {
  const teamMembers = [
    {
      id: 1,
      name: " Ajai Chowdhary ",
      role: "HCL",
      image: ajay, 
      description: "Ajai Chowdhry is one of the six founding members of HCL. He is currently the Chairman-Board of Governors at National Institute of Foundry and Forge Technology, Ranchi, International Institute of Information Technology, and Naya Raipur. Chowdhry is also a member of India Semiconductor Mission's advisory board.",
      github: "",
      linkedin: "",
      email: ""
    },
    {
      id: 2,
      name: " Sushil Kumar Sharma ",
      role: "NTPC",
      image: sushil, 
       description: "A Sustainability Leader with 41+ years experience in Data Science, AI, Project Management, Energy Management, Energy Scenarios, Energy Transition, Renewable Energy, Green & Clean Fuels,  Sustainable Supply Chain, Biodiversity, CCUS, NetZero, Stakeholders Management, and Business Excellence. ",
      github: "",
      linkedin: "https://www.linkedin.com/in/sksharma08/",
      email: ""
    },
   
   
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-blue-900 to-sky-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <motion.h1 className="text-4xl font-bold text-white mb-4">
            Speakers
          </motion.h1>
          <motion.p className="text-gray-300 text-lg">
          CJoin us for a journey of inspiration, innovation, and impact—because your next big idea starts here!" 🚀
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative h-full min-h-[300px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <span className="px-3 py-1 bg-sky-500 text-white rounded-full text-sm font-medium">
                      {member.role}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-6">{member.description}</p>
                  <div className="flex space-x-4">
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-300 hover:text-sky-400 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={member.email}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-300 hover:text-sky-400 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Speaker;