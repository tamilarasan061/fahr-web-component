import * as React from 'react'
import { colorStyles } from '../../assets/colors'
import { sizeStyles } from '../../assets/size'

type InputVariant = 'filled' | 'outlined'
type InputColor = 'primary' | 'secondary' | 'custom'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLImageElement> {
  variant?: InputVariant
  color?: InputColor
  label?: string
  disabled?: boolean
  fontFamily?: string
  placeholder?: string
  id?: string
}

export const Input: React.FC<InputProps> = ({
  variant = 'filled',
  color = 'primary',
  size = 'md',
  children,
  ...props
}) => {
  const baseStyles =
    'rounded font-bold focus:outline-none focus:ring-2 focus:ring-offset-2'
  const inputStyles = `${baseStyles} ${sizeStyles[size]} ${colorStyles[color][variant]}`
  return (
    <div>
      <label htmlFor={props.id ? props.id : 'text'}>{props.label}</label>
      <input
        className={inputStyles}
        type='text'
        id={props.id ? props.id : 'text'}
        disabled={props.disabled}
        placeholder={props.placeholder}
        style={{ display: 'block' }}
      />
    </div>
  )
}
export default Input
