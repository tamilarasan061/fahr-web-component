import React from 'react';
declare type ButtonVariant = 'filled' | 'outlined';
declare type ButtonColor = 'primary' | 'secondary';
declare type ButtonSize = 'sm' | 'md' | 'lg';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    color?: ButtonColor;
    size?: ButtonSize;
}
export declare const Button: React.FC<ButtonProps>;
export default Button;
