import React, { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  theme: string;
}
const Button: React.FC<ButtonProps> = ({ children, className, theme }) => {
  return (
    <>
      {theme === "blue" ? (
        <button
          className={`bg-text_color py-1 md:py-3 px-4 md:px-8 lg:px-10 rounded-md ${className}`}
        >
          {children}
        </button>
      ) : (
        <button
          className={`border-2 border-text_color py-1 md:py-3 px-4 md:px-8 lg:px-10 rounded-md ${className}`}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
