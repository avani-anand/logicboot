import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, title, description, icon, color = 'from-blue-500 to-blue-600' }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.03,
        y: -8,
        transition: { duration: 0.2 }
      }}
      className="group cursor-pointer"
    >
      <Link to={`/products/${id}`}>
        <div className="card h-full relative overflow-hidden">
          {/* Icon */}
          <div className="flex items-center justify-center mb-4">
            <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center shadow-lg`}>
              <span className="text-3xl text-white">{icon}</span>
            </div>
          </div>
          
          {/* Content */}
          <h3 className="font-geist text-xl font-semibold text-gray-400 mb-3 group-hover:text-primary-600 transition-colors">
            {title}
          </h3>
          
          <p className="font-manrope text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
            {description}
          </p>
          
          {/* Hover effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="absolute top-4 right-4 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>
          
          {/* Bottom border animation */}
          <motion.div
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-b-xl"
          />
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
