import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Calendar, Users, Award, Play, CheckCircle,MapPin } from 'lucide-react';
import CountdownTimer from '../components/CountdownTimer';

import Vedio1 from '../assets/inertia4343.mov'
import techEventImage from "../assets/7.png"; 

import Wo1 from '../assets/Wo1.jpg';
import Wo3 from '../assets/Wo3.jpg';
import free from "../assets/free.jpg"
import workshop1 from "../assets/workshop1.jpg"
import logo from "../assets/2.png"

const Home = () => {

   const events = [
      {
        
        id: 1,
        title: "INERTIA X ESPORT TOURNAMENT (SQUAD,DUO,SOLO)",
        image: free,
        date: "21-22 FEB 2025",
        time: "TIME: 12:00 PM - 5:00 PM (2:00 PM to 3:00 PM BREAK)",
        location: "JASAN HALL",
        description:
          "🎮 Calling all gamers! Get ready for an adrenaline-pumping Free Fire & BGMI Esports Tournament at INERTIA 2025. Compete against the best, showcase your skills, and fight for glory in an electrifying battle royale showdown!",
        attendees: 400,
        link:"/freefire",
        price:200,
      },
      {
        id: 2,
        title: "WORKSHOP ON BRIDS'25",
        image: workshop1,
        date: "21-22 FEB 2025",
        time: "Disclose Soon..",
        location: "Jasan Hall",
        description:
          "Join us for an insightful BRIDS 25 workshop led by Dr. Praveen Kumar Sharma, a renowned Ph.D. holder from NIT Durgapur. This workshop will cover key concepts, latest research developments, and practical applications related to BIRDS 25, offering participants a unique learning experience.",
        attendees: 350,
        link:"/brids",
        price:350,
      },
      {
        id: 3,
        title: "Register for INERTIA 2025",
        image: logo,
        date: "February 22, 2025",
        time: "",
        location: "Assembly Hall",
        description:
          "INERTIA 2025 is the ultimate technology workshop uniting trailblazing industry experts, visionary innovators, and passionate tech enthusiasts. Across two dynamic days, immerse yourself in groundbreaking sessions, interactive workshops, and exceptional networking experiences that redefine the future of technology.",
        attendees: 600,
        link:"https://e-ticket-srt.netlify.app/form/67a99f5642cb8c5b180680f9",
        price:0,
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-900 to-sky-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-sky-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side */}
          <div className="text-white space-y-8">
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold leading-tight"
            >
              Where Innovation
              <span className="text-sky-400"> Meets Excellence</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300"
            >

              Be part of an exciting voyage of learning, discovery, and groundbreaking innovation at Inertia 2025!

            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-sky-500 hover:bg-sky-400 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 group"
              >
                <a href='#eve'><span>Registration Open</span></a>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
            </motion.div>
          </div>

          {/* Right Side */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.img
              // src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"
              src={techEventImage} 
              alt="Tech Event"
              className="rounded-lg shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.div
              className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center space-x-4 text-white">
                <Sparkles className="w-8 h-8 text-sky-400" />
                <div>
                  <p className="font-semibold"> Event</p>
                  <p className="text-sm text-gray-300">Feburary 21-22, 2025</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24 mb-32"
        >
          <CountdownTimer />
        </motion.div>

        <div className="pt-20 min-h-screen bg-gradient-to-b from-blue-900 to-sky-900" id='eve'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <motion.h1 className="text-4xl font-bold text-white mb-4">
            Registration Open For..
          </motion.h1>
          <motion.p className="text-gray-300 text-lg">
            Limited seats are available in the event.
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
              <div>
              <div className="p-6 flex flex-col items-center justify-between h-[28rem]">
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
                <a href={event.link}><button className='w-[20rem] cursor-pointer p-1 text-white font-bold bg-blue-500 rounded-sm'>Enroll Now</button></a>
              </div>




              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>

        {/* About Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-24"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <motion.h2 
                variants={itemVariants}
                className="text-4xl font-bold text-white"
              >
                About <span className="text-sky-400">INERTIA 2025</span>
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-gray-300 text-lg"
              >
             "INERTIA 2025 is the ultimate technology workshop uniting trailblazing industry 
             experts, visionary innovators, and passionate tech enthusiasts. Across two dynamic days, immerse yourself in groundbreaking sessions, interactive workshops, and exceptional 
             networking experiences that redefine the future of technology."
                Inertia 2025 is the ultimate tech fest where innovation gains momentum! Experience groundbreaking ideas,
                 hands-on workshops, and inspiring talks from industry leaders.
                 Whether you're a creator, coder, or tech enthusiast, this is your platform to showcase, learn, and connect.
              </motion.p>
              <motion.div 
                variants={itemVariants}
                className="space-y-4"
              >
                {[
                  "7+ Expert Speakers",
                  "Inspiring Guest Speakers",
                  "Interactive Workshops",
                  "Networking Sessions",
                  "Innovation Showcase",
                  "Top Sponsors & Collaborations"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-sky-400" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </motion.div>
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-3 gap-6 pt-6"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-sky-400">500+</div>
                  <div className="text-sm text-gray-300">Attendees</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-sky-400">7+</div>
                  <div className="text-sm text-gray-300">Speakers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-sky-400">6+</div>
                  <div className="text-sm text-gray-300">Workshops</div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              variants={itemVariants}
              className="relative aspect-video rounded-lg overflow-hidden bg-white/10 backdrop-blur-lg"
            > 
              
              <video
                className="absolute inset-0 w-full h-full"
                src={Vedio1}
                controls 

              ></video>
              {/* <div className="absolute inset-0 flex items-center justify-center bg-black/40 group hover:bg-black/30 transition-colors cursor-pointer">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-sky-500/90 text-white group-hover:bg-sky-400 transition-colors">
                  <Play className="w-6 h-6" />
                </div>
              </div> */}
            </motion.div>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 pb-20"
        >
          {[
            {
              icon: Calendar,
              title: "Workshops",
              description: "Interactive sessions led by industry experts"
            },
            {
              icon: Users,
              title: "Networking",
              description: "Connect with like-minded professionals"
            },
            {
              icon: Award,
              title: "Recognition",
              description: "Awards for outstanding achievements"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white hover:bg-white/20 transition-colors duration-300"
            >
              <feature.icon className="w-10 h-10 text-sky-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
