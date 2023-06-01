import * as React from 'react';
declare type InputVariant = 'filled' | 'outlined';
declare type InputColor = 'primary' | 'secondary' | 'custom';
export interface InputProps extends React.InputHTMLAttributes<HTMLImageElement> {
    variant?: InputVariant;
    color?: InputColor;
    label?: string;
    disabled?: boolean;
    fontFamily?: string;
    placeholder?: string;
    id?: string;
}
export declare const Input: React.FC<InputProps>;
export default Input;
