import { motion } from 'framer-motion';

export default function LuxeCard() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-800 to-black">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative w-[600px] h-[400px] bg-black rounded-xl shadow-lg overflow-hidden"
      >
        {/* Pulsing border animation */}
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.2, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Card content with glossy effect */}
        <div className="relative h-full p-6 flex flex-col justify-center items-center">
          {/* Glossy overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
          
          {/* Triangle Badge */}
          <div className="relative flex flex-col items-center">
            <svg 
              width="120" 
              height="120" 
              viewBox="0 0 100 100" 
              className="fill-white"
            >
              <path d="M50 0 L100 100 H0 Z" />
            </svg>
            <h1 className="absolute text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              L
            </h1>
            <span className="absolute text-lg font-light text-white mt-16">LUXEPASS</span>
          </div>

          {/* Card details */}
          <div className="flex flex-col justify-between h-full mt-8">
            <div className="flex items-center justify-center">
              <span className="text-gray-400 font-light">PREMIUM ACCESS</span>
            </div>
          </div>

          {/* Holographic effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-50" 
               style={{
                 backgroundSize: '200% 200%',
                 animation: 'holographic 3s linear infinite'
               }}
          />
        </div>
      </motion.div>
    </div>
  );
}