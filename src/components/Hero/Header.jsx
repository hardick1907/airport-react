import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import banner from "../../assets/banner.webm";
import logo from "../../assets/logo.png";

const Header = () => {
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Start loading video immediately
    if (videoRef.current) {
      videoRef.current.load();
    }

    const timer = setTimeout(() => {
      setShowVideo(true);
      // Only try to play if video is loaded
      if (isVideoLoaded && videoRef.current) {
        // Using play().catch to handle autoplay restrictions
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("Playback failed:", error);
          });
        }
      }
    }, 3500);

    return () => clearTimeout(timer);
  }, [isVideoLoaded]);

  const handleCanPlay = () => {
    setIsVideoLoaded(true);
  };

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
      
      {/* Video Element - Always render but control visibility */}
      <motion.video
        ref={videoRef}
        preload="auto"
        playsInline
        muted
        loop
        onCanPlay={handleCanPlay}
        className={`absolute top-0 left-0 w-full h-full object-cover ${showVideo ? 'block' : 'hidden'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: showVideo ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <source src={banner} type="video/webm" />
        {/* Add fallback MP4 source for better Safari compatibility */}
        <source src={banner.replace('.webm', '.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>
    </div>
  );
};

export default Header;