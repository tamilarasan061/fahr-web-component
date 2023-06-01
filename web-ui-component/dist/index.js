function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var colorStyles = {
  primary: {
    filled: 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-400',
    outlined: 'bg-transparent hover:bg-blue-100 text-blue-500 border-blue-500 border focus:ring-blue-400'
  },
  secondary: {
    filled: 'bg-gray-500 hover:bg-gray-600 text-white focus:ring-gray-400',
    outlined: 'bg-transparent hover:bg-gray-100 text-gray-500 border-gray-500 border focus:ring-gray-400'
  }
};

var sizeStyles = {
  sm: 'py-1 px-2 text-sm',
  md: 'py-1 px-4',
  lg: 'py-2 px-6 text-lg'
};

var _excluded = ["variant", "color", "size", "children"];
var Button = function Button(_ref) {
  var _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'filled' : _ref$variant,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'primary' : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'md' : _ref$size,
    children = _ref.children,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  var baseStyles = 'rounded font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2';
  var buttonStyles = baseStyles + " " + sizeStyles[size] + " " + colorStyles[color][variant];
  return React__default.createElement("button", Object.assign({
    className: buttonStyles
  }, props), children);
};

var _excluded$1 = ["variant", "color", "size", "children"];
var Input = function Input(_ref) {
  var _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'filled' : _ref$variant,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'primary' : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'md' : _ref$size,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1);
  var baseStyles = 'rounded font-bold focus:outline-none focus:ring-2 focus:ring-offset-2';
  var inputStyles = baseStyles + " " + sizeStyles[size] + " " + colorStyles[color][variant];
  return React.createElement("div", null, React.createElement("label", {
    htmlFor: props.id ? props.id : 'text'
  }, props.label), React.createElement("input", {
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

exports.Button = Button;
exports.Input = Input;
//# sourceMappingURL=index.js.map
