import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Lottie from "lottie-react";
import youtube from "../../assets/social/youtube.json";
import facebook from "../../assets/social/facebook.json";
import twitter from "../../assets/social/twitter.json";
import instagram from "../../assets/social/instagram.json";

const socialMedia = [
    { 
      name: "YouTube", 
      gradient: "from-red-100 via-red-50 to-red-100",
      animation: youtube,
      followers: "234k",
      handle: "@airportsindia",
      buttonGradient: "from-red-400 to-red-500",
      borderColor: "border-red-200"
    },
    { 
      name: "Facebook", 
      gradient: "from-blue-100 via-blue-50 to-blue-100",
      animation: facebook,
      followers: "189k",
      handle: "@AAI_Official",
      buttonGradient: "from-blue-400 to-blue-600",
      borderColor: "border-blue-200"
    },
    { 
      name: "Twitter", 
      gradient: "from-sky-100 via-sky-50 to-sky-100",
      animation: twitter,
      followers: "156k",
      handle: "@aai_airports",
      buttonGradient: "from-sky-400 to-sky-500",
      borderColor: "border-sky-200"
    },
    { 
      name: "Instagram", 
      gradient: "from-purple-100 via-pink-50 to-orange-100",
      animation: instagram,
      followers: "298k",
      handle: "@airportsindia",
      buttonGradient: "from-purple-400 to-pink-500",
      borderColor: "border-purple-200"
    },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.2
    } 
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 50,
    scale: 0.8,
    rotate: -5
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6
    }
  },
  hover: {
    y: -10,
    scale: 1.05,
    rotate: 0,
    transition: { duration: 0.3 }
  }
};

const ShineAnimation = () => (
  <style dangerouslySetInnerHTML={{
    __html: `
      @keyframes shine {
        0% { left: -100%; }
        100% { left: 200%; }
      }
      .animate-shine {
        animation: shine 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
      }
    `
  }} />
);

export default function SocialHub() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <div ref={ref} className="bg-gradient-to-b from-[#F3F6FD] to-[#E0E7FF] py-12">
      <ShineAnimation />
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-20">
          <div className="flex gap-2 justify-center items-center">
            <motion.h1
              variants={itemVariants}
              className="text-5xl font-bold mb-1 text-[#1E3A8A]"
            >
              Social
            </motion.h1>
            <motion.h1
              variants={itemVariants}
              className="text-5xl font-bold mb-1 text-[#0044ff]"
            >
              Hub
            </motion.h1>
          </div>
          <div className="w-[350px] h-[3px] bg-[#1E3A8A] mx-auto mt-3"></div>
          <motion.p
            variants={itemVariants}
            className="text-lg text-[#1E3A8A]"
          >
            Enhancing Aviation Services with Excellence
          </motion.p>
        </div>
        
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4"
        >
          {socialMedia.map((platform, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="relative group rounded-3xl p-1 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} rounded-3xl`} />
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-30" />
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -left-full -top-16 w-48 h-48 bg-gradient-to-r from-white/50 to-transparent transform rotate-45 group-hover:animate-shine" />
              </div>

              <div className={`relative p-6 h-full bg-white/10 rounded-2xl shadow-lg backdrop-blur-lg border ${platform.borderColor}/30`}>
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl mb-6 mx-auto shadow-md bg-white/20 backdrop-blur-sm"
                >
                  <Lottie animationData={platform.animation} style={{ width: 50, height: 50 }} />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {platform.name}
                </h3>
                
                <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm border border-gray-100 shadow-inner">
                  <p className="text-sm text-cyan-600 font-mono font-semibold mb-1">
                    {platform.handle}
                  </p>
                  <p className="text-2xl font-bold text-gray-800 mb-4">
                    {platform.followers}
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 px-6 bg-gradient-to-r ${platform.buttonGradient} rounded-lg font-semibold text-white relative overflow-hidden shadow-md`}
                  >
                    <span className="relative z-10">Follow Now</span>
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}