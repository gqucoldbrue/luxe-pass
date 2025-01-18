'use client'

import { Triangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function CreditCard() {
  const [sparklePosition, setSparklePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSparklePosition({
        x: Math.random() * 100,
        y: Math.random() * 100
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const embossedTextStyle = {
    background: 'linear-gradient(135deg, #FFFFFF 0%, #A1A1AA 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 2px 2px rgba(0,0,0,0.5)'
  };

  return (
    <motion.div
      className="relative w-full max-w-[400px] aspect-[1.586/1] rounded-2xl mx-auto"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ y: -10 }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 shadow-[0_0_0_1px_rgba(255,255,255,0.1)]" 
        style={{
          boxShadow: `
            0 25px 50px -12px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(255, 255, 255, 0.1)
          `
        }}
      >
        <motion.div
          className="absolute w-32 h-32 pointer-events-none"
          animate={{
            x: `${sparklePosition.x}%`,
            y: `${sparklePosition.y}%`,
          }}
          transition={{
            duration: 3,
            ease: "easeInOut"
          }}
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
            filter: 'blur(8px)',
          }}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-16 h-16">
            <Triangle 
              className="w-16 h-16 rotate-180" 
              style={{
                filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.5))',
                color: '#E5E5E5'
              }}
            />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold" 
              style={{
                ...embossedTextStyle,
                textShadow: `
                  2px 2px 4px rgba(0,0,0,0.3),
                  0 0 20px rgba(255,255,255,0.2)
                `
              }}>
              L
            </span>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-8 flex justify-between items-center">
          <span className="text-xl tracking-wider font-semibold uppercase" style={embossedTextStyle}>
            Luxepass
          </span>
          <span className="text-xl tracking-wide font-semibold uppercase" style={embossedTextStyle}>
            Your Name
          </span>
        </div>
      </div>
    </motion.div>
  );
}