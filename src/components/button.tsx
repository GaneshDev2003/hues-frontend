import React, { ReactNode } from 'react';

interface ButtonProps {
  primary?: boolean;
  children: ReactNode;
  onClick: any;
}

const Button: React.FC<ButtonProps> = ({ primary, children, onClick }) => {
  const buttonClasses = primary
    ? 'bg-primary hover:primary/70 text-white font-bold py-2 px-4 rounded'
    : 'bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded';

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
