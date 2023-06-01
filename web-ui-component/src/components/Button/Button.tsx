import React from 'react'
import { colorStyles } from '../../assets/colors'
import { sizeStyles } from '../../assets/size'

type ButtonVariant = 'filled' | 'outlined'
type ButtonColor = 'primary' | 'secondary'
type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  color?: ButtonColor
  size?: ButtonSize
}
export const Button: React.FC<ButtonProps> = ({
  variant = 'filled',
  color = 'primary',
  size = 'md',
  children,
  ...props
}) => {
  const baseStyles =
    'rounded font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2'
  const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${colorStyles[color][variant]}`
  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  )
}

export default Button
