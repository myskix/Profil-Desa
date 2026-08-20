import React from 'react';

const SectionHeading = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`mb-8 ${className}`}>
      <h2 className="text-3xl font-bold text-black mb-2">{title}</h2>
      {subtitle && <p className="text-gray-500">{subtitle}</p>}
      <div className="w-16 h-1 bg-accent mt-4"></div>
    </div>
  );
};

export default SectionHeading;
