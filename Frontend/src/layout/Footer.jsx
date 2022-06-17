import * as React from "react";
import icon from "../images/icon.png";

const Footer = () => {
    return (
        <footer className="bg-[#1A2F52] p-8 fixed bottom-0 w-full">
            <img src={icon} alt="Gatsby Logo" className="h-10" />
        </footer>
    );
};

export default Footer;
