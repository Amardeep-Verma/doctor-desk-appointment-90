
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="prescripto-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <h2 className="text-lg text-prescripto-blue font-bold">PRESCRIPTO</h2>
            </Link>
            <p className="text-gray-600 mb-4">
              Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-prescripto-blue">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-prescripto-blue">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-prescripto-blue">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-gray-800 font-semibold mb-3">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-prescripto-blue">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-prescripto-blue">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-prescripto-blue">Contact</Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-600 hover:text-prescripto-blue">Doctors</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-800 font-semibold mb-3">RESOURCES</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-prescripto-blue">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-prescripto-blue">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-prescripto-blue">Testimonials</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-prescripto-blue">For Doctors</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-800 font-semibold mb-3">OUR OFFICE</h3>
            <address className="not-italic text-gray-600 mb-4">
              <p>Chandigarh Group of Colleges (CGC)</p>
              <p>Landran, Mohali, Punjab, India</p>
            </address>
            <p className="text-gray-600">
              Tel: +919508904653<br />
              Email: Mohdnasique@gmail.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Prescripto. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-prescripto-blue text-sm mr-4">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 hover:text-prescripto-blue text-sm mr-4">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-prescripto-blue text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
