import React from "react";

interface FormGroupProps {
    label: string;
    labelBold?: boolean;
    hint?: string;
    error?: string;
    children: React.ReactNode;
}

const FormGroup: React.FC<FormGroupProps> = ({ label, labelBold, hint, error, children }) => {
    return (
        <div className={`govje-form-group ${error ? "govje-form-group--error" : ""}`}>
            <label className={`govje-label ${labelBold ? "bold" : ""}`} htmlFor={label}>
                {label}
            </label>
            {hint && <div className="govje-hint">{hint}</div>}
            {children}
            {error && <div className="govje-form-group--error-message">{error}</div>}
        </div>
    )
}

export default FormGroup;
