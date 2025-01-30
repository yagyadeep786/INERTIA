import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Mail, MapPin, ExternalLink } from 'lucide-react';

const Sponsors = () => {
  const sponsors = [
    {
      id: 1,
      name: "TechCorp Solutions",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      description: "A leading provider of enterprise software solutions, specializing in cloud computing and artificial intelligence. Supporting innovation and technological advancement in the developer community.",
      website: "www.techcorp.com",
      email: "partnerships@techcorp.com",
      address: "123 Innovation Drive, Silicon Valley, CA",
      tier: "Platinum"
    },
    {
      id: 2,
      name: "Future Labs",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      description: "An innovative research and development company focused on emerging technologies. Committed to fostering the next generation of tech leaders through education and mentorship.",
      website: "www.futurelabs.tech",
      email: "contact@futurelabs.tech",
      address: "456 Tech Park Avenue, Boston, MA",
      tier: "Gold"
    },
    {
      id: 3,
      name: "Digital Dynamics",
      image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=800&q=80",
      description: "A global digital transformation consultancy helping businesses innovate and grow. Passionate about supporting tech events and fostering community collaboration.",
      website: "www.digitaldynamics.io",
      email: "sponsors@digitaldynamics.io",
      address: "789 Digital Boulevard, Austin, TX",
      tier: "Silver"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
            Our Sponsors
          </motion.h1>
          <motion.p className="text-gray-300 text-lg">
            Meet the organizations making innovation possible
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {sponsors.map((sponsor) => (
            <motion.div
              key={sponsor.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-full min-h-[300px]">
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-4 py-2 bg-sky-500 text-white rounded-full text-sm font-semibold">
                      {sponsor.tier} Sponsor
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{sponsor.name}</h3>
                      <p className="text-gray-300">{sponsor.description}</p>
                    </div>
                    <div className="space-y-4">
                      <motion.a
                        href={`https://${sponsor.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-300 hover:text-sky-400 transition-colors"
                      >
                        <Globe className="w-5 h-5 mr-2 text-sky-400" />
                        <span>{sponsor.website}</span>
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </motion.a>
                      <div className="flex items-center text-gray-300">
                        <Mail className="w-5 h-5 mr-2 text-sky-400" />
                        <span>{sponsor.email}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <MapPin className="w-5 h-5 mr-2 text-sky-400" />
                        <span>{sponsor.address}</span>
                      </div>
                    </div>
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

export default Sponsors;