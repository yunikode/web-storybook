import React from 'react';

/**
 * Primary UI component for user interaction
 */
const Button = ({ primary = true, backgroundColor, size = "medium", onClick, label, }) => {
    const mode = primary
        ? "storybook-button--primary"
        : "storybook-button--secondary";
    return (React.createElement("button", { type: "button", className: ["storybook-button", `storybook-button--${size}`, mode].join(" "), style: backgroundColor ? { backgroundColor } : {}, onClick: onClick }, label));
};

export { Button };
//# sourceMappingURL=index.esm.js.map
