import React from "react";
import { motion } from "framer-motion";
import { Globe, Plane, Users, BarChart } from "lucide-react";
import banner from "../../assets/numbersbg.png"

const Numbers = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2, ease: "easeOut" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 15 }
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#F3F6FD] to-[#E0E7FF]">
      <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={containerVariants}
  className="py-20 px-6"
  style={{
    backgroundImage: `url(${banner})`,
    backgroundSize: "contain",  // Ensures the image is fully visible without cropping
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top" // Moves the image up if needed
  }}
>

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-14">
  <div>
    <motion.h1
      variants={itemVariants}
      className="text-5xl font-bold mb-1 text-center text-[#1E3A8A]"
    >
      AAI By
    </motion.h1>
    <motion.h1
      variants={itemVariants}
      className="text-5xl font-bold mb-1 text-center text-[#0044ff]"
    >
      Numbers
    </motion.h1>
  </div>
  
  {/* Thin underline */}
  <div className="w-60 h-[3px] bg-[#1E3A8A] mx-auto"></div>

  <motion.p
    variants={itemVariants}
    className="text-lg mb-10 text-center text-[#1E3A8A]"
  >
    Streamlining Airports, Ensuring Seamless Flights
  </motion.p>
</div>


        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { icon: Globe, value: "110", label: "Operational Airports" },
            { icon: Plane, value: "220K+", label: "Domestic Aircraft Movements" },
            { icon: BarChart, value: "42K+", label: "International Aircraft Movements" },
            { icon: Users, value: "32Cr+", label: "Passengers" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.08, // Lift effect
                boxShadow: "0px 10px 30px rgba(79, 70, 229, 0.3)", // Glow effect
                backgroundColor: "#ffffff",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group bg-white/90 border border-indigo-300 shadow-md rounded-2xl p-8 relative overflow-hidden transition-all"
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex flex-col items-center text-center gap-4 relative z-10">
                <stat.icon className="h-14 w-14 text-black group-hover:text-indigo-300 transition-colors duration-300" />
                <h3 className="text-5xl font-extrabold text-indigo-700">{stat.value}</h3>
                <p className="text-lg text-gray-600">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
    </div>
  );
};

export default Numbers;
