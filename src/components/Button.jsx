import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "px-8 py-3.5 rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center";
  const variants = {
    primary: "bg-gray-900 text-white hover:bg-black shadow-md hover:shadow-lg hover:-translate-y-0.5",
    accent: "bg-accent text-black hover:bg-accent-hover shadow-md hover:shadow-lg hover:-translate-y-0.5",
    outline: "border-2 border-gray-200 text-gray-900 hover:border-gray-900 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
