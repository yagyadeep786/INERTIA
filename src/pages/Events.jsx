import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Tech WorkShop",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      date: "Feburary 21, 2025",
      time: "11:00 AM - 1:00 PM",
      location: "JASAN HALL",
      description: "Join industry leaders for a day of insights into emerging technologies and future trends.",
      attendees: 400
    },
    {
      id: 2,
      title: "Startup Launching",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      date: "Feburary 22, 2025",
      time: "10:00 AM - 1:00 PM",
      location: "Jasan Hall",
      description: "Introducing a new era of innovation! Join us as we launch new startup's of jabalpur, unveil groundbreaking ideas.",
      attendees: 200
    },
    {
      id: 3,
      title: " Culture Showcase",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=800&q=80",
      date: "Feburary 22, 2025",
      time: "3:00 PM - 6:00 PM",
      location: "Assembly Hall",
      description: "Get ready to lose yourself in the magic of melodies, electrifying dance moves, and soulful songs at Rhythm & Beats. Experience a vibrant fusion of cultures, emotions, and artistry as performers light up the stage with their passion.",
      attendees: 600
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
                <div className="space-y-3">
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
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Events;