import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-900">
      <div className="container-custom px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-1">
              <span className="font-geist text-xl font-bold text-gray-400">
                LogicBoots
              </span>
            </div>
            <p className="font-manrope text-gray-600 text-sm leading-relaxed max-w-md">
              A dynamic startup revolutionizing healthcare and household
              automation with AI-powered robotics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-manrope font-bold text-gray-400 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="font-manrope text-gray-600 hover:text-primary-600 text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="font-manrope text-gray-600 hover:text-primary-600 text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="font-manrope text-gray-600 hover:text-primary-600 text-sm transition-colors">
                  Products
                </Link>
              </li>
              {/* Add the new Privacy Policy link */}
              <li>
                <Link
                  to="/privacy-policy"
                  className="font-manrope text-gray-600 hover:text-primary-600 text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-manrope font-bold text-gray-400 mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm">
                <span className="font-manrope font-medium">Email:</span>{" "}
                contact@logicboots.com
              </li>
              <li className="text-gray-600 text-sm">
                <span className="font-manrope font-medium">Location:</span>{" "}
                Tides, IIT Roorkee, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-manrope text-gray-500 text-sm">
            © 2025 LogicBoots. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/company/logicboots"
              className="text-gray-400 hover:text-gray-600 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin-icon lucide-linkedin">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/logicboots?igsh=ZjBic2V0bDN4dmg4"
              className="text-gray-400 hover:text-gray-600 transition-colors">
              <span className="sr-only">Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram-icon lucide-instagram">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
