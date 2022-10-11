'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/**
 * Primary UI component for user interaction
 */
const Button = ({ primary = true, backgroundColor, size = "medium", onClick, label, }) => {
    const mode = primary
        ? "storybook-button--primary"
        : "storybook-button--secondary";
    return (React__default["default"].createElement("button", { type: "button", className: ["storybook-button", `storybook-button--${size}`, mode].join(" "), style: backgroundColor ? { backgroundColor } : {}, onClick: onClick }, label));
};

exports.Button = Button;
//# sourceMappingURL=index.js.map
