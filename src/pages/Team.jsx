import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      description: "Full-stack developer with 8+ years of experience in building scalable web applications. Passionate about clean code and mentoring junior developers.",
      github: "https://github.com/sarahjohnson",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      email: "sarah.johnson@techevent.com"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      description: "Creative designer with a keen eye for detail and user experience. Specializes in creating intuitive and beautiful interfaces that users love.",
      github: "https://github.com/michaelchen",
      linkedin: "https://linkedin.com/in/michaelchen",
      email: "michael.chen@techevent.com"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80",
      description: "Experienced project manager with a track record of delivering successful tech events and workshops. Expert in agile methodologies.",
      github: "https://github.com/emilyrodriguez",
      linkedin: "https://linkedin.com/in/emilyrodriguez",
      email: "emily.rodriguez@techevent.com"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Technical Architect",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      description: "Solutions architect specializing in cloud infrastructure and scalable systems. Passionate about emerging technologies and innovation.",
      github: "https://github.com/davidkim",
      linkedin: "https://linkedin.com/in/davidkim",
      email: "david.kim@techevent.com"
    }
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
            Meet Our Team
          </motion.h1>
          <motion.p className="text-gray-300 text-lg">
            The passionate individuals behind our success
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
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-300 hover:text-sky-400 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
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
                      href={`mailto:${member.email}`}
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

export default Team;