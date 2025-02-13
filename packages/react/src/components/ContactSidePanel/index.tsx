import { JSX } from "react";
import Button from "../Button";
import SidePanel from "../SidePanel";

interface ContactSidePanelProps {
    contact: string;
    telephone?: string;
    email?: string;
    openingTimes?: string;
    address?: JSX.Element;
    withSignVideo?: boolean;
}

const ContactSidePanel: React.FC<ContactSidePanelProps> = ({ contact, telephone, email, openingTimes, address, withSignVideo }) => {
    return (
        <SidePanel title="Contact">
            <p>{contact}</p>
            <ul>
                {telephone && (
                    <li>
                        T&nbsp;&nbsp;&nbsp;
                        <a href={`tel:${telephone}`} className="govje-link govje-link--charcoal">{telephone}</a>
                    </li>
                )}
                {email && (
                    <li>
                        E&nbsp;&nbsp;&nbsp;
                        <a href={`mailto:${email}`} className="govje-link govje-link--charcoal">{email}</a>
                    </li>
                )}
            </ul>
            {openingTimes && <p>{openingTimes}</p>}
            {address && <p>{address}</p>}
            {withSignVideo && <Button variant="primary" label="Connect to SignVideo" href="https://www.gov.je/pages/signvideo.aspx" />}
        </SidePanel>
    )
}

export default ContactSidePanel;
