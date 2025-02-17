import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import banner from "../../assets/banner.webm";
import logo from "../../assets/logo.png";

const Header = () => {
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
      videoRef.current?.play();
    }, 3500); // Wait for animation to complete before playing video

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      
      {/* Logo Animation */}
      <motion.img
        src={logo}
        alt="logo"
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-auto"
      />
      
      {/* Video Start After Animation */}
      {showVideo && (
        <motion.video
          ref={videoRef}
          src={banner}
          autoPlay
          muted
          loop
          className="absolute top-30 left-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      )}
    </div>
  );
};

export default Header;