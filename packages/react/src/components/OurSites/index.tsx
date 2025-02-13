import React from "react";

const sites = [
    { text: "Blog", url: "https://blog.gov.je" },
    { text: "Digital Jersey", url: "https://www.digital.je/global" },
    { text: "Jersey Business", url: "https://www.jerseybusiness.je/" },
    { text: "Jersey Finance", url: "https://www.jerseyfinance.je/" },
    { text: "Jersey Law", url: "https://www.jerseylaw.je/Pages/default.aspx" },
    { text: "Jersey Sport", url: "https://www.jerseysport.je/" },
    { text: "Locate Jersey", url: "https://www.locatejersey.com/" },
    { text: "m.gov.je", url: "https://m.gov.je/" },
    { text: "Open Data", url: "https://opendata.gov.je/dataset" },
    { text: "Parishes", url: "http://parish.gov.je/Pages/default.aspx" },
    { text: "Petitions", url: "https://petitions.gov.je/" },
    { text: "States Assembly", url: "http://www.statesassembly.gov.je/" },
    { text: "Visit Jersey", url: "https://www.jersey.com/" }
];

const OurSites: React.FC = () => {
    return (
        <div className="govje-oursites">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="govje-oursites--title">Our sites</div>
                        <div className="govje-oursites--links">
                            <ul>
                                {sites.map(({ text, url }) => (
                                    <li key={text}>
                                        <a title={`${text} opens in new window`} target="_blank" href={url} rel="noopener noreferrer">
                                            {text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurSites;
