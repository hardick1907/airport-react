import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { Mic } from "lucide-react";

const menuItems = [
    {
      title: "About Us",
      links: [
        { name: "Chairman’s Message", link: "#" },
        { name: "Mission & Vision", link: "#" },
        { name: "AAI Board", link: "#" },
        { name: "History", link: "#" },
        { name: "Our Growth Story", link: "#" },
        { name: "Union", link: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Air Navigation", link: "#" },
        { name: "Aeronautical Information", link: "#" },
        { name: "Fire Fighting", link: "#" },
        { name: "Airports Security", link: "#" },
        { name: "Land Allocation", link: "#" },
        { name: "Obstacles & Height Control", link: "#" },
      ],
    },
    {
      title: "Airports",
      links: [
        { name: "AAI Airports", link: "#" },
        { name: "Flight Information", link: "#" },
        { name: "Lost & Found", link: "#" },
        { name: "Biometric Boarding System", link: "#" },
        { name: "Airports Charges", link: "#" },
        { name: "Credit Policy", link: "#" },
        { name: "Certification", link: "#" },
        { name: "Raise Grievances", link: "#" },
        { name: "Airport Grievance Officers", link: "#" },
        { name: "NAC Chart", link: "#" },
        { name: "Report Voluntary Safety", link: "#" },
      ],
    },
    {
      title: "Statistics",
      links: [
        { name: "Total Airport", link: "#" },
        { name: "Clusterwise Airport", link: "#" },
        { name: "Air Traffic by Number", link: "#" },
        { name: "Traffic News", link: "#" },
        { name: "Annual Reports", link: "#" },
        { name: "Traffic Survey", link: "#" },
        { name: "Corporate Plan", link: "#" },
        { name: "Procurement Projections", link: "#" },
      ],
    },
    {
      title: "Tenders",
      links: [
        { name: "Tender by RA", link: "#" },
        { name: "Global Tenders", link: "#" },
        { name: "Search a Tender", link: "#" },
        { name: "Tender Category", link: "#" },
        { name: "Active Tenders", link: "#" },
        { name: "Limited Tender", link: "#" },
        { name: "Corrigendum", link: "#" },
      ],
    },
    {
      title: "CSR",
      links: [
        { name: "About CSR", link: "#" },
        { name: "CSR Vision & Mission", link: "#" },
        { name: "CSR Committee (Dynamic Data)", link: "#" },
        { name: "CSR Policy", link: "#" },
        { name: "CSR Signature Initiative", link: "#" },
        { name: "CSR-DPE Common Theme", link: "#" },
        { name: "CSR Annual Plan", link: "#" },
        { name: "Case Stories", link: "#" },
        { name: "CSR Programmes", link: "#" },
        { name: "CSR Gallery", link: "#" },
      ],
    },
    {
      title: "Citizen",
      links: [
        { name: "RTI", link: "#" },
        { name: "Vigilance", link: "#" },
        { name: "Charter", link: "#" },
        { name: "CHQ Grievance", link: "#" },
        { name: "Legislation", link: "#" },
        { name: "Regulation", link: "#" },
        { name: "Guideline", link: "#" },
      ],
    },
  ];

  const Navbar = () => {
    const [hoveredMenu, setHoveredMenu] = useState(null);
    const [timeoutId, setTimeoutId] = useState(null);
    const [language, setLanguage] = useState("ENG");
    const [searchTerm, setSearchTerm] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const toggleLanguage = () => {
      setLanguage((prev) => (prev === "ENG" ? "हिंदी" : "ENG"));
    };
  
    const handleMouseEnter = (index) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        setTimeoutId(null);
      }
      setHoveredMenu(index);
    };
  
    const handleMouseLeave = () => {
      const id = setTimeout(() => {
        setHoveredMenu(null);
      }, 300);
      setTimeoutId(id);
    };
  
    const handleVoiceSearch = () => {
      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.lang = "en-US";
      recognition.start();
      recognition.onresult = (event) => {
        setSearchTerm(event.results[0][0].transcript);
      };
    };
  
    return (
      <nav
        className={`fixed top-0 left-0 w-full z-50 p-5 flex flex-col items-center sm:flex-row sm:justify-between transition-all duration-300 ${
          isScrolled ? "bg-white/60 backdrop-blur-xs shadow-md" : "bg-white"
        }`}
      >
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-[120px]" />
        </div>
        <div className="hidden sm:flex space-x-8">
          {menuItems.map((menu, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-gray-700 hover:text-black font-semibold text-lg p-1">
                {menu.title}
              </button>
              {hoveredMenu === index && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 mt-2 w-56 bg-white shadow-lg shadow-cyan-100 rounded-lg p-2 space-y-2"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {menu.links.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.link}
                        className="block px-4 py-2 hover:bg-blue-100 rounded-md text-gray-600 font-semibold hover:text-black"
                        onClick={() => setHoveredMenu(null)}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </motion.ul>
              )}
            </div>
          ))}
        </div>
  
        <div className="relative w-full sm:w-96 mt-4 sm:mt-0">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            onClick={handleVoiceSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500"
          >
            <Mic size={20} />
          </button>
        </div>
  
        <div className="hidden sm:flex space-x-4 items-center mt-4 sm:mt-0">
          <button
            onClick={toggleLanguage}
            className="relative px-4 py-2 font-medium group overflow-hidden border-2 border-blue-400 bg-white text-black transition-all duration-300 ease-in-out"
          >
            <span className="absolute inset-0 bg-blue-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              {language}
            </span>
          </button>
          <a href="#_" className="relative inline-block px-4 py-2 font-medium group">
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-blue-100 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-blue-400 group-hover:bg-blue-200"></span>
            <span className="relative text-black group-hover:text-black">Login</span>
          </a>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  
  