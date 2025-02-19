import { motion } from "framer-motion";
import { useState } from "react";
import first from "../../assets/Offerings/1.webp";
import second from "../../assets/Offerings/2.webp";
import third from "../../assets/Offerings/3.jpeg";
import fourth from "../../assets/Offerings/4.webp";
import fifth from "../../assets/Offerings/5.jpg";

const Offerings = () => {
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const cards = [
    { id: 1, title: "Air Navigation", image: first },
    { id: 2, title: "Airport Operations Management", image: second },
    { id: 3, title: "Aviation Training", image: third },
    { id: 4, title: "Commercial Facilities", image: fourth },
    { id: 5, title: "ATC Airports", image: fifth },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 15 }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2, ease: "easeOut" }
    }
  };


  return (
    <div className="bg-gradient-to-t from-[#F3F6FD] to-[#E0E7FF]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
      <motion.section
        className="min-h-screen py-20 px-4 flex flex-col items-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center mb-20">
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-bold mb-1 text-[#1E3A8A]"
          >
            Our
          </motion.h1>
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-bold mb-1 text-[#0044ff]"
          >
            Offerings
          </motion.h1>
          <div className="w-[300px] h-[3px] bg-[#1E3A8A] mx-auto mt-3"></div>
          <motion.p
            variants={itemVariants}
            className="text-lg text-[#1E3A8A]"
          >
            Enhancing Aviation Services with Excellence
          </motion.p>
        </div>
        <motion.div
          className="flex space-x-6 px-10 w-full justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.6 },
            },
          }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className="relative h-80 w-64 flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl bg-white shadow-xl"
              onMouseEnter={() => setHoveredCardId(card.id)}
              onMouseLeave={() => setHoveredCardId(null)}
              animate={{
                scale: hoveredCardId === card.id ? 1.2 : hoveredCardId ? 0.85 : 1,
                zIndex: hoveredCardId === card.id ? 10 : 1,
                filter: hoveredCardId && hoveredCardId !== card.id ? "blur(3px)" : "none",
                opacity: hoveredCardId && hoveredCardId !== card.id ? 0.6 : 1,
                y: hoveredCardId === card.id ? -20 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                mass: 0.8,
              }}
            >
              <div className="relative h-full w-full">
                <motion.img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover"
                  animate={{
                    scale: hoveredCardId === card.id ? 1.1 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                  <h3 className="text-xl font-bold">{card.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      </motion.div>
    </div>
  );
};

export default Offerings;
