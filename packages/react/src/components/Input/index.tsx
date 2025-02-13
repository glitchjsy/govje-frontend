import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    hasError?: boolean;
}

const Input: React.FC<InputProps> = ({ hasError, className, ...props }) => {
    return (
        <input
            type="text"
            className={`govje-input ${hasError ? "govje-input--error" : ""} ${className ?? ""}`.trim()}
            {...props}
        />
    )
}

export default Input;
