// components/Button.tsx
import './index.scss';
import React, { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean; 
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
  }

const Button: React.FC<ButtonProps> = ({children, onClick, disabled = false }) => {
  return (
    <button className={`custom-button ${disabled ? 'disabled' : ''}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
