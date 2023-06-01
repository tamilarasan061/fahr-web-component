import React__default, { createElement } from 'react';

const colorStyles = {
  primary: {
    filled: 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-400',
    outlined: 'bg-transparent hover:bg-blue-100 text-blue-500 border-blue-500 border focus:ring-blue-400'
  },
  secondary: {
    filled: 'bg-gray-500 hover:bg-gray-600 text-white focus:ring-gray-400',
    outlined: 'bg-transparent hover:bg-gray-100 text-gray-500 border-gray-500 border focus:ring-gray-400'
  }
};

const sizeStyles = {
  sm: 'py-1 px-2 text-sm',
  md: 'py-1 px-4',
  lg: 'py-2 px-6 text-lg'
};

const Button = ({
  variant: _variant = 'filled',
  color: _color = 'primary',
  size: _size = 'md',
  children,
  ...props
}) => {
  const baseStyles = 'rounded font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2';
  const buttonStyles = `${baseStyles} ${sizeStyles[_size]} ${colorStyles[_color][_variant]}`;
  return React__default.createElement("button", Object.assign({
    className: buttonStyles
  }, props), children);
};

const Input = ({
  variant: _variant = 'filled',
  color: _color = 'primary',
  size: _size = 'md',
  children,
  ...props
}) => {
  const baseStyles = 'rounded font-bold focus:outline-none focus:ring-2 focus:ring-offset-2';
  const inputStyles = `${baseStyles} ${sizeStyles[_size]} ${colorStyles[_color][_variant]}`;
  return createElement("div", null, createElement("label", {
    htmlFor: props.id ? props.id : 'text'
  }, props.label), createElement("input", {
    className: inputStyles,
    type: 'text',
    id: props.id ? props.id : 'text',
    disabled: props.disabled,
    placeholder: props.placeholder,
    style: {
      display: 'block'
    }
  }));
};

export { Button, Input };
//# sourceMappingURL=index.modern.js.map
