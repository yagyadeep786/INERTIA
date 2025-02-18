import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MapPin, ExternalLink } from 'lucide-react';
import Sponse1 from '../assets/funingo.jpg';
import Sponse2 from '../assets/Triumph-Motorcycles-Logo.png'
import Sponse3 from '../assets/sponse3.jpeg';
import Sponse4 from '../assets/rkbook.jpg';
import Sponse5 from '../assets/nallaAngel.jpg';
const Sponsors = () => {
  const sponsors = [
    {
      id: 1,
      name: "FUNINGO",
      image: Sponse1,
      description: "We are thrilled to have Funingo Adventure Arena as our official entertainment partner, the ultimate destination for thrill-seekers and fun enthusiasts. Known for its dynamic range of adventure activities.",
      website: "https://www.funingo.fun/",
      address: "Jabalpur-Nagpur Rd, Manegaon, M.P",
    },
    {
      id: 2,
      name: "TRIUMPH MOTORS",
      image: Sponse2,
      description: "Frontier Triumph Jabalpur is part of Frontier Motors group and provides customers with first-class service in and around Jabalpur, Madhya Pradesh. This stylish store is conveniently located near Madan Mahal Railway station, providing customers with the full range of Triumph services including new bike sales, service, parts, clothing, and accessories.",
      website: "https://www.triumphmotorcycles.in",
      address: "140/1 Amanpur Mouja, Near Dasmesh Dwar, Nagpur Rd, Madan Mahal",
    },
    {
      id: 3,
      name: "RK BOOKS and STATIONERS",
      image: Sponse4,
      description: "All kinds of books and stationery. Govt. General order supplier. Enagic Independent Distributor. 8, LNY market main road Ranjhi",
      website: "https://www.instagram.com/rkb.jbp/?hl=en",
      address: "Ranjhi Jabalpur ",
    },
    {
      id: 4,
      name: "AGRAWAL AUTO CAD",
      image: Sponse3,
      description: "Best autocade training center in all madhya Pradesh only is Agrawal Computer Education in jabalpur",
      website: "https://apnabusinesscard.com/Agrawal-Computer-Education",
      address: "Gol bazar , Jabalpur",
    },
    {
      id: 5,
      name: "Nalla Angel",
      image: Sponse5,
      description: "eSports:popular well known Youtuber , Nalla Angel (yt 1.8m )",
      website: "https://www.instagram.com/nalla__angel?igsh=MThuYnlteXBlbXc2eQ==",
      address: "Youtuber",
    },
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
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-300 hover:text-sky-400 transition-colors"
                      >
                        <Globe className="w-5 h-5 mr-2 text-sky-400" />
                        <span>{sponsor.website}</span>
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </motion.a>
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
