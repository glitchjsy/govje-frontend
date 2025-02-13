import React from "react";

interface SidePanelProps {
    title: string;
    children?: React.ReactNode;
}

const SidePanel: React.FC<SidePanelProps> = ({ title, children }) => {
    return (
        <div className="govje-sidepanel">
            <h1>{title}</h1>
            {children}
        </div>
    )
}

export default SidePanel;
