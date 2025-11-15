"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

export interface ExpertiseListProps {
  expertise: string[];
  className?: string;
}

export const ExpertiseList = ({
  expertise,
  className = '',
}: ExpertiseListProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}>
      {expertise.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.05 }}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.div
            className="relative overflow-hidden border bg-white rounded-lg shadow-sm transition-all duration-300 ease-in-out cursor-pointer"
            animate={{
              height: hoveredIndex === index ? '88px' : '64px',
              borderColor: hoveredIndex === index ? 'rgb(0, 99, 225)' : 'rgb(229, 231, 235)',
              boxShadow: hoveredIndex === index 
                ? '0 10px 25px -5px rgba(0, 99, 225, 0.2)' 
                : '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Corner brackets that appear on hover */}
            {hoveredIndex === index && (
              <>
                <motion.div 
                  className="absolute top-3 left-3 w-6 h-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute top-0 left-0 w-4 h-0.5 bg-blue-600" />
                  <div className="absolute top-0 left-0 w-0.5 h-4 bg-blue-600" />
                </motion.div>
                <motion.div 
                  className="absolute bottom-3 right-3 w-6 h-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute bottom-0 right-0 w-4 h-0.5 bg-blue-600" />
                  <div className="absolute bottom-0 right-0 w-0.5 h-4 bg-blue-600" />
                </motion.div>
              </>
            )}

            {/* Content */}
            <div className="flex items-center justify-between h-full px-4 md:px-6">
              <div className="flex-1 flex items-center space-x-3">
                <motion.div 
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  animate={{
                    backgroundColor: hoveredIndex === index 
                      ? 'rgb(0, 99, 225)' 
                      : 'rgb(30, 41, 59)',
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span 
                  className="font-manrope font-medium"
                  animate={{
                    color: hoveredIndex === index 
                      ? 'rgb(0, 99, 225)' 
                      : 'rgb(55, 65, 81)',
                    fontSize: hoveredIndex === index ? '1.05rem' : '1rem',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {item}
                </motion.span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExpertiseList;
