import React from "react";

type HeaderVariant = "default" | "service";

interface HeaderProps {
    variant?: HeaderVariant;
    serviceName?: string;
    showInfo?: boolean;
}

const Header: React.FC<HeaderProps> = ({ variant = "default", serviceName, showInfo = false }) => {
    return (
        <header
            className={`govje-header ${variant === "service" ? "govje-header--service" : ""}`}
            role="banner"
        >
            <div className="govje-header--container">
                <Title />
                {variant === "default" && showInfo && <Info />}
                {variant === "service" && serviceName && <ServiceInfo serviceName={serviceName} />}
            </div>
        </header>
    )
}

export const Title = () => {
    return (
        <a href="https://www.gov.je" title="gov.je home" className="govje-header--logo">
            <img
                src="https://cdn.gov.je/govje/images/Gov-Jersey-Crest.svg"
                alt="gov.je"
                style={{ borderWidth: 0 }}
            />
            gov.je
        </a>
    )
}

export const Info = () => {
    return (
        <div className="govje-header--info">
            <div className="govje-header--info--line1">
                Information and public services for the Island of Jersey
            </div>
            <div className="govje-header--info--line2">
                L'înformâtion et les sèrvices publyis pouor I'Île dé Jèrri
            </div>
        </div>
    )
}

export const ServiceInfo: React.FC<{ serviceName: string }> = ({ serviceName }) => {
    return (
        <div className="govje-header--service-info">
            <div className="govje-header--service-name">{serviceName}</div>
            <div className="govje-header--service-badge">Service</div>
        </div>
    )
}

export default Header;
