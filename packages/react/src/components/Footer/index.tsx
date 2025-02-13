import React from "react";

const socials = [
    { name: "Twitter", url: "https://twitter.com/govjersey", icon: "fab fa-twitter" },
    { name: "Facebook", url: "https://www.facebook.com/GovernmentofJersey", icon: "fab fa-facebook" },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/government-of-jersey", icon: "fab fa-linkedin" },
    { name: "Instagram", url: "https://www.instagram.com/governmentofjersey", icon: "fab fa-instagram" },
    { name: "YouTube", url: "https://www.youtube.com/governmentofjersey", icon: "fab fa-youtube" }
];

const links = [
    { text: "Accessibility", url: "https://gov.je/Pages/Accessibility.aspx" },
    { text: "Customer feedback", url: "https://one.gov.je/service/Customer_feedback" },
    { text: "Privacy", url: "https://gov.je/Pages/Privacy.aspx" },
    { text: "Terms and conditions", url: "https://gov.je/Pages/Terms.aspx" },
    { text: "Sitemap", url: "https://gov.je/Pages/Sitemap.aspx" },
    { text: "Translate", url: "https://gov.je/Pages/TranslateSite.aspx" }
];

const Footer: React.FC = () => {
    return (
        <footer className="govje-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <dl className="govje-footer--social-media">
                            <dt>Find us on social media</dt>
                            {socials.map(({ name, url, icon }) => (
                                <dd key={name}>
                                    <a title={`${name} opens in new window`} href={url} target="_blank" rel="noopener noreferrer">
                                        <span className="fa-stack fa-lg">
                                            <span className="fa fa-circle fa-stack-2x"></span>
                                            <span className={`${icon} fa-stack-1x fa-inverse`}></span>
                                        </span>
                                        <span className="govje-accessibility">{name} opens in new window</span>
                                    </a>
                                </dd>
                            ))}
                        </dl>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ul className="govje-footer--links">
                            {links.map(({ text, url }) => (
                                <li key={text}>
                                    <a href={url}>{text}</a>
                                </li>
                            ))}
                            <li className="govje-footer--copyright">&copy; Government of Jersey 2010 - {new Date().getFullYear()}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
