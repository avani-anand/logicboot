"use client";
import React, { useState } from 'react';
import { cn } from '../../lib/utils';

// Define the type for a single category item
export interface Category {
  id: string | number;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  featured?: boolean;
}

// Define the props for the CategoryList component
export interface CategoryListProps {
  title: string;
  subtitle?: string;
  categories: Category[];
  headerIcon?: React.ReactNode;
  className?: string;
}

export const CategoryList = ({
  title,
  subtitle,
  categories,
  headerIcon,
  className,
}: CategoryListProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | number | null>(null);

  return (
    <div className={cn("w-full bg-background text-foreground p-4 md:p-6", className)}>
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-6 md:mb-8">
          {headerIcon && (
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary/80 to-primary mb-4 text-primary-foreground">
              {headerIcon}
            </div>
          )}
          <h1 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">{title}</h1>
          {subtitle && (
            <h2 className="text-lg md:text-xl font-semibold text-muted-foreground">{subtitle}</h2>
          )}
        </div>

        {/* Categories List */}
        <div className="space-y-2">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative group"
              onMouseEnter={() => setHoveredItem(category.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={category.onClick}
            >
              <div
                className={cn(
                  "relative overflow-hidden border bg-card  transition-all duration-300 ease-in-out cursor-pointer rounded-lg",
                  // Hover state styles
                  hoveredItem === category.id
                    ? 'h-24 border-primary shadow-md shadow-primary/20 bg-primary/5'
                    : 'h-16 border-border hover:border-primary/50'
                )}
              >
                {/* Corner brackets that appear on hover */}
                {hoveredItem === category.id && (
                  <>
                    <div className="absolute top-2 left-2 w-4 h-4">
                      <div className="absolute top-0 left-0 w-3 h-0.5 bg-primary" />
                      <div className="absolute top-0 left-0 w-0.5 h-3 bg-primary" />
                    </div>
                    <div className="absolute bottom-2 right-2 w-4 h-4">
                      <div className="absolute bottom-0 right-0 w-3 h-0.5 bg-primary" />
                      <div className="absolute bottom-0 right-0 w-0.5 h-3 bg-primary" />
                    </div>
                  </>
                )}

                {/* Content */}
                <div className="flex items-center justify-between h-full px-4 md:px-6">
                  <div className="flex-1">
                    <h3
                      className={cn(
                        "font-bold transition-colors duration-300 text-sm md:text-base",
                        category.featured ? 'text-lg md:text-xl' : 'text-sm md:text-base',
                        hoveredItem === category.id ? 'text-primary' : 'text-foreground'
                      )}
                    >
                      {category.title}
                    </h3>
                    {category.subtitle && (
                      <p
                        className={cn(
                          "mt-0.5 transition-colors duration-300 text-xs md:text-sm",
                           hoveredItem === category.id ? 'text-foreground/90' : 'text-muted-foreground'
                        )}
                      >
                        {category.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Icon appears on the right on hover */}
                  {category.icon && hoveredItem === category.id && (
                    <div className="text-primary ml-4 flex-shrink-0">
                      {category.icon}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
