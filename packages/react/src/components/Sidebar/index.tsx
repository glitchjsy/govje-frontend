import React from "react";

interface SidebarProps {
    children: React.ReactNode;
    className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ children, className = "" }) => {
    return (
        <aside className={`govje-sidebar ${className}`.trim()}>
            <div id="navigator">{children}</div>
        </aside>
    )
}

export default Sidebar;
