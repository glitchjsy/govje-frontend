import React from "react";

type ButtonVariant = "default" | "primary" | "secondary" | "cancel";

interface ButtonProps {
    variant: ButtonVariant;
    label: string;
    href?: string;
    onClick?: () => void;
    callToAction?: boolean;
}

const Button: React.FC<ButtonProps> = ({ variant = "default", label, href, onClick, callToAction }) => {
    if (callToAction) {
        return (
            <a href={href} className={`govje-cta govje-cta--${variant}`}>
                {label}
            </a>
        )
    }
    if (href) {
        return (
            <a href={href} className={`govje-button govje-button--${variant}`} onClick={onClick}>
                {label}
            </a>
        )
    }
    return (
        <button className={`govje-button govje-button--${variant}`} onClick={onClick}>
            {label}
        </button>
    )
};

export default Button;