import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users } from "lucide-react";
import Wo1 from '../assets/Wo1.jpg';
import Wo3 from '../assets/Wo3.jpg';
import Wo5 from '../assets/Wo5.jpg';
import Wo6 from '../assets/Wo6.png';

const Workshop = () => {
  const events = [
    {
      id: 1,
      title: "Aero Fabrication",
      image: Wo1,
      date: "February 21, 2025",
      time: "11:00 AM - 1:00 PM",
      location: "JASHAN HALL",
      description:
        "This workshop covers the basics of aerodynamics and aircraft design. Participants learn to design, fabricate, and test small-scale aircraft models, drones, or gliders using lightweight materials",
      attendees: 400,
    },
    {
      id: 2,
      title: "Electronics and Robotics",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      date: "February 22, 2025",
      time: "10:00 AM - 1:00 PM",
      location: "JASHAN Hall",
      description:
        "This workshop introduces the fundamentals of electronics and robotics, including circuit design, microcontrollers (Arduino, Raspberry Pi), and sensors.",
      attendees: 200,
    },
    {
      id: 3,
      title: "CAD and 3D Printing",
      image: Wo3,
      date: "February 22, 2025",
      time: "3:00 PM - 6:00 PM",
      location: "Assembly Hall",
      description:
        "Participants learn Computer-Aided Design (CAD) software like AutoCAD, SolidWorks, or Fusion 360 to create 3D models. The workshop also covers 3D printing techniques, material selection, and hands-on experience in designing and printing functional prototypes.",
      attendees: 600,
    },
    {
      id: 4,
      title: "Programming",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=800&q=80",
      date: "February 22, 2025",
      time: "10:00 AM - 1:00 PM",
      location: "Assembly Hall",
      description:
        "This workshop focuses on coding fundamentals in languages like Python, Java, or C++. It may cover algorithms, problem-solving techniques, web development, or artificial intelligence, depending on the focus. Hands-on projects help participants enhance their coding skills.",
      attendees: 200,
    },
    {
      id: 5,
      title: "Astronomy",
      image: Wo5,
      date: "February 22, 2025",
      time: "10:00 AM - 1:00 PM",
      location: "Assembly Hall",
      description:
        "This session explores celestial bodies, telescope handling, astrophotography, and concepts like black holes, exoplanets, and the universe's expansion.",
      attendees: 200,
    },
    {
      id: 6,
      title: "Racing",
      image: Wo6,
      date: "February 22, 2025",
      time: "10:00 AM - 1:00 PM",
      location: "Assembly Hall",
      description:
        "This workshop is designed for automobile enthusiasts, covering topics like vehicle dynamics, aerodynamics, and racing strategies. It may involve designing and testing small-scale race cars, go-kart fabrication, or simulation-based racing experiences.",
      attendees: 200,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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
            Upcoming Workshop
          </motion.h1>
          <motion.p className="text-gray-300 text-lg">
            Join us at our upcoming Workshop and be part of the tech revolution
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
              className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden h-[40rem] box-border"
            >
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-6 flex flex-col justify-between h-[28rem]">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-300">
                      <Calendar className="w-5 h-5 mr-2 text-sky-400" />
                      <span>
                        {event.date} • {event.time}
                      </span>
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
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Workshop;
