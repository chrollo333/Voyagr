import React from 'react';
import { Link } from 'react-router-dom';

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  to?: string; // for navigation
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export default function GradientButton({
  children,
  onClick,
  to,
  className = '',
  type = 'button',
  disabled = false,
}: GradientButtonProps) {
  const baseStyle = `px-6 py-3 bg-gradient-to-r from-pink-400 to-pink-700 text-white  
rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200
hover:from-pink-300 hover:to-pink-600 active:scale-95 font-rubik ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  if (to) {
    return (
      <Link to={to} className={baseStyle} tabIndex={disabled ? -1 : undefined} aria-disabled={disabled}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseStyle} disabled={disabled}>
      {children}
    </button>
  );
}