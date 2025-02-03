import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import WorkshopImage1 from "../assets/4.png"; 
import WorkshopImage2 from "../assets/3.png";
import WorkshopImage3 from "../assets/5.png";
import eventVideo from "../assets/inertiaVideo.mp4";
import InertiaImage from "../assets/9.png";
const Gallery = () => {
  const workshops = [
    // {
    //   id: 1,
    //   title: "Introduction to React Development",
    //   image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    //   image: WorkshopImage1,
    //   date: "March 20, 2024",
    //   time: "10:00 AM - 2:00 PM",
    //   location: "Virtual Workshop",
    //   description: "Learn the fundamentals of React and build your first application with hands-on exercises.",
    //   instructor: "Sarah Johnson",
    //   seats: 30
    // },
    // {
    //   id: 2,
    //   title: "Advanced Cloud Architecture",
    //   image: WorkshopImage2,
    //   // image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    //   date: "April 5, 2024",
    //   time: "9:00 AM - 5:00 PM",
    //   location: "Tech Hub - Room 201",
    //   description: "Deep dive into cloud architecture patterns and best practices for scalable applications.",
    //   instructor: "Michael Chen",
    //   seats: 25
    // },
    // {
    //   id: 3,
    //   title: "UI/UX Design Masterclass",
    //   image: WorkshopImage3,
    //   // image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    //   date: "April 15, 2024",
    //   time: "1:00 PM - 5:00 PM",
    //   location: "Design Studio",
    //   description: "Master the principles of modern UI/UX design and create stunning user interfaces.",
    //   instructor: "Emma Davis",
    //   seats: 20
    // }
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
        {/* <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <motion.h1 className="text-4xl font-bold text-white mb-4">
            Welcome to INERTIA 2025
          </motion.h1>
          <motion.p className="text-gray-300 text-lg">
            Inertia – Innovate, Compete, Celebrate!
          </motion.p>
        </motion.div>

        <video  width="100vw"
  height="100vh" controls>
  <source src={eventVideo} type="video/mp4" />
  Your browser does not support the video tag.
</video> */}
<div className="flex h-screen w-full">
  {/* Left Section: Welcome & Tagline */}
 
  <img  
    src={InertiaImage}  
    alt="Inertia Logo" 
    className="absolute left-6 top-1/3 transform -translate-y-1/2 w-1/2 h-1/2"
  />

  <div className="w-1/2 flex flex-col justify-center relative px-8">
    <motion.div 
      variants={containerVariants}  
      initial="hidden"  
      animate="visible"
      className="text-left"
    >
      <motion.h1 className="text-5xl font-bold text-white mb-3">
        Welcome to INERTIA 2025
      </motion.h1>
      <motion.p className="text-gray-300 text-lg">
        Inertia – Innovate, Compete, Celebrate!
      </motion.p>
    </motion.div>

    
  </div>

  {/* Right Section: Full-Height Video */}
  <div className="w-1/2 h-full pt-0">
    <video className="w-full h-full object-cover pt-0" controls>
      <source src={eventVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>



        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {workshops.map((workshop) => (
            <motion.div
              key={workshop.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{workshop.title}</h3>
                <p className="text-gray-300 mb-4">{workshop.description}</p>
                <div className="space-y-3 mb-6">
                  {/* <div className="flex items-center text-gray-300">
                    <Calendar className="w-5 h-5 mr-2 text-sky-400" />
                    <span>{workshop.date}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-5 h-5 mr-2 text-sky-400" />
                    <span>{workshop.time}</span>
                  </div> */}
                  {/* <div className="flex items-center text-gray-300">
                    <MapPin className="w-5 h-5 mr-2 text-sky-400" />//
                    <span>{workshop.location}</span>
                  </div> */}
                </div>
                {/* <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-sky-500 hover:bg-sky-400 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 group"
                >
                  <span>Enroll Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;