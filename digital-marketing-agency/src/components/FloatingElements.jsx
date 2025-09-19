import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  const elements = [
    { id: 1, size: 'w-4 h-4', color: 'bg-primary-500', delay: 0, duration: 4 },
    { id: 2, size: 'w-6 h-6', color: 'bg-secondary-500', delay: 1, duration: 5 },
    { id: 3, size: 'w-3 h-3', color: 'bg-accent-500', delay: 2, duration: 3 },
    { id: 4, size: 'w-5 h-5', color: 'bg-primary-400', delay: 0.5, duration: 4.5 },
    { id: 5, size: 'w-4 h-4', color: 'bg-secondary-400', delay: 1.5, duration: 3.5 },
    { id: 6, size: 'w-6 h-6', color: 'bg-accent-400', delay: 2.5, duration: 5.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute ${element.size} ${element.color} rounded-full opacity-20`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;