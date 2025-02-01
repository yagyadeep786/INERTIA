import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const CountdownTimer = () => {
  // today date
  let todayDate = new Date();
  let eventDate = new Date("2025-02-22"); // Assuming the event date is December 15, 2024
  let diffTime = Math.abs(eventDate - todayDate);
  let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  let diffHours= Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let diffMinutes= Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
  let diffSeconds= Math.floor((diffTime % (1000 * 60)) / 1000);
  const [timeLeft, setTimeLeft] = useState({
    days: diffDays,
    hours: diffHours,
    minutes: diffMinutes,
    seconds: diffSeconds
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-white/5 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-sky-500/10">
      <div className="flex items-center justify-center space-x-2 mb-6">
        <Clock className="w-6 h-6 text-sky-400" />
        <h2 className="text-2xl font-bold text-white">Event Countdown</h2>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Seconds', value: timeLeft.seconds }
        ].map((item) => (
          <motion.div
            key={item.label}
            className="text-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-gradient-to-b from-sky-900/50 to-blue-900/50 rounded-lg p-4 backdrop-blur-sm border border-sky-500/20">
              <div className="text-4xl font-bold text-white mb-2">
                {item.value.toString().padStart(2, '0')}
              </div>
              <div className="text-sky-400 text-sm font-medium">
                {item.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;