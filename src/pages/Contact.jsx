import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
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
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold text-white mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-lg"
          >
            Have questions? We'd love to hear from you.
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white/10 backdrop-blur-lg rounded-lg p-8"
          >
            <form className="space-y-6">
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-sky-400/30 text-white focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-colors"
                  placeholder="Your name"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-sky-400/30 text-white focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-colors"
                  placeholder="your@email.com"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-sky-400/30 text-white focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-colors"
                  placeholder="Your message"
                />
              </motion.div>
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-sky-500 hover:bg-sky-400 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 group"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6 flex items-start space-x-4"
            >
              <Mail className="w-6 h-6 text-sky-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white">Email</h3>
                <p className="text-gray-300">contact@techevent.com</p>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6 flex items-start space-x-4"
            >
              <Phone className="w-6 h-6 text-sky-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white">Phone</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6 flex items-start space-x-4"
            >
              <MapPin className="w-6 h-6 text-sky-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white">Address</h3>
                <p className="text-gray-300">
                  123 Innovation Street<br />
                  Tech City, TC 12345
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;