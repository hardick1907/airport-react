import logo from "../assets/logo.png";
import banner from "../assets/footerbg.jpg";

const Footer = () => {
  return (
    <footer
      className="text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="container mx-auto px-4 py-8 bg-[#1a4481]/85">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Logo and Social Links */}
          <div>
            <div className="bg-white p-2 inline-block rounded-lg">
              <img src={logo} alt="AAI Logo" className="w-32" />
            </div>
            <div className="flex gap-4 my-4">
              <span className="text-white">Follow us on</span>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <p className="text-sm">Last Updated: 11 February, 2025</p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Trending Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Media</a></li>
              <li><a href="#" className="hover:text-gray-300">Career</a></li>
              <li><a href="#" className="hover:text-gray-300">Airport Website</a></li>
              <li><a href="#" className="hover:text-gray-300">Visitor Management System</a></li>
            </ul>
          </div>

          {/* Address Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Corporate Address</h3>
            <div className="space-y-2">
              <p>Airports Authority of India</p>
              <p>Rajiv Gandhi Bhawan, Safdarjung Airports,</p>
              <p>New Delhi-110003</p>
              <p>Ph: 91-11-24632950</p>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-gray-600 pt-4">
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <a href="#" className="hover:text-gray-300">Contact Us</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-300">Web Information Manager</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-300">Website Policies</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-300">Archive</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-300">Sitemap</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-300">Feedback</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-300">FAQs</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-300">Aviation Link</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 text-sm">
          <p>Copyright © 2025 Airports Authority of India. All Rights Reserved</p>
          <div className="flex justify-end items-center mt-2">
            <p>विजिटर काउंट: 78787706</p>
            <p className="ml-4">Visitors Count: 78787706</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
