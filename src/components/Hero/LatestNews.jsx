import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import first from "../../assets/News/1.jpeg";
import second from "../../assets/News/2.webp";
import third from "../../assets/News/3.webp";
import fourth from "../../assets/News/4.jpeg";
import fifth from "../../assets/News/5.webp";

const LatestNews = () => {
  const controls = useAnimation();
  const scrollControls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.6
  });

  const slides = [
    { id: 1, title: "Breaking News 1", image: first },
    { id: 2, title: "Breaking News 2", image: second },
    { id: 3, title: "Breaking News 3", image: third },
    { id: 4, title: "Breaking News 4", image: fourth },
    { id: 5, title: "Breaking News 5", image: fifth },
  ];

  const newsList = [
    { id: 1, title: "Technology advances in AI sector", time: "2 hours ago" },
    { id: 2, title: "New environmental policies announced", time: "3 hours ago" },
    { id: 3, title: "Sports: Major upset in championship", time: "4 hours ago" },
    { id: 4, title: "Economic forecast for upcoming quarter", time: "5 hours ago" },
    { id: 5, title: "Healthcare breakthrough announced", time: "6 hours ago" },
    { id: 6, title: "Global warming forecast", time: "7 hours ago" },
    { id: 7, title: "Technology advances in AI sector", time: "2 hours ago" },
    { id: 8, title: "New environmental policies announced", time: "3 hours ago" },
    { id: 9, title: "Sports: Major upset in championship", time: "4 hours ago" },
    { id: 10, title: "Economic forecast for upcoming quarter", time: "5 hours ago" },
    { id: 11, title: "Healthcare breakthrough announced", time: "6 hours ago" },
    { id: 12, title: "Global warming forecast", time: "7 hours ago" }
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  // Start initial slide-in animations when in view
  useEffect(() => {
    if (isInView) {
      controls.start('visible').then(() => {
        // Start auto-scroll animation after slide-in completes
        scrollControls.start({
          y: -1380,
          transition: {
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }
        });
      });
    }
  }, [isInView, controls, scrollControls]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const slideVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -120 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const paraVariants = {
    hidden: { opacity: 0, x: -90 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 1.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className='bg-gradient-to-t from-[#F3F6FD] to-[#E0E7FF]'>
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 py-16"
      >
<motion.h2 
  variants={titleVariants} 
  className="text-5xl font-bold mb-1 text-center text-[#1E3A8A] relative"
>
  In Focus
  <span className="absolute top-13 left-1/2 transform -translate-x-1/2 w-xs h-0.5 bg-[#1E3A8A]"></span>
</motion.h2>



        <motion.p
          variants={paraVariants}
          className="text-lg mb-10 text-center text-[#1E3A8A]"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis nihil error temporibus
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image Slider */}
          <div className="relative overflow-hidden rounded-lg h-[340px] mt-5 shadow-2xl">
            <motion.div
              key={currentSlide}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
              className="relative aspect-video"
            >
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold">
                  {slides[currentSlide].title}
                </h3>
              </div>
            </motion.div>
            
            <button
            aria-label="Previous Slide"
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <button
            aria-label="Next Slide"
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* News List with staged animations */}
          <div className="relative h-[370px] overflow-hidden">
            <motion.div
              
              animate={scrollControls}
              initial={{ y: 0 }}
              className="space-y-4"
            >
              {/* First set with slide-in animations */}
              {newsList.map((news) => (
                <motion.div
                  key={news.id}
                  variants={listItemVariants}
                  className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl border-l-4 border-[#1E3A8A] transition-shadow cursor-pointer"
                >
                  <h3 className="font-semibold text-lg text-[#1E3A8A]">{news.title}</h3>
                  <p className="text-gray-500 text-sm">{news.time}</p>
                </motion.div>
              ))}
              
              {/* Duplicate set for seamless scroll */}
              {newsList.map((news) => (
                <motion.div
                  key={`duplicate-${news.id}`}
                  variants={listItemVariants}
                  className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl border-l-4 border-[#1E3A8A] transition-shadow cursor-pointer"
                >
                  <h3 className="font-semibold text-lg text-[#1E3A8A]">{news.title}</h3>
                  <p className="text-gray-500 text-sm">{news.time}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* View All News Button */}
        <motion.div
          variants={paraVariants}
          className="flex justify-center mt-10"
        >
          <button
            className="px-6 py-3 bg-[#1E3A8A] text-white rounded-lg shadow-lg hover:bg-[#1E3A8A]/90 transition-colors"
          >
            View All News
          </button>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default LatestNews;