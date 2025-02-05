import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';
import dance from '../assets/dance.jpeg';
import nukkad from '../assets/nukkad.jpg';
import singing from '../assets/singing.jpeg';
import standup from '../assets/standup.jpeg';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "DANCE",
      image: dance,
      date: "March 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Tech Convention Center",
      description: "Groove to the beats, let your moves speak!💃🕺",
      attendees: 500
    },
    {
      id: 2,
      title: "STAND-UP COMEDY",
      image: standup,
      date: "April 2, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Digital Innovation Hub",
      description: "Laugh out loud—because life's too short for bad jokes! 🎤🤣",
      attendees: 300
    },
    {
      id: 3,
      title: "SINGING",
      image: singing,
      date: "April 20, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Blockchain Center",
      description: "Hit the high notes, steal the show—your stage, your voice! 🎶✨",
      attendees: 200
    },
    {
      id: 4,
      title: "NUKKAD / THEATRE ACT",
      image: nukkad,
      // date: "April 20, 2024",
      // time: "2:00 PM - 6:00 PM",
      // location: "Blockchain Center",
      description: "Street lights, strong voices—witness drama that sparks change! 🚀🎭",
      // attendees: 200
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
            Upcoming Events
          </motion.h1>
          <motion.p className="text-gray-300 text-lg">
            Join us at our upcoming events and be part of the tech revolution
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                <p className="text-gray-300 mb-4">{event.description}</p>
                {/* <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="w-5 h-5 mr-2 text-sky-400" />
                    <span>{event.date} • {event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-5 h-5 mr-2 text-sky-400" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users className="w-5 h-5 mr-2 text-sky-400" />
                    <span>{event.attendees} Attendees</span>
                  </div>
                </div> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Events;