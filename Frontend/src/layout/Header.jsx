import * as React from "react";
import icon from "../images/icon.png";

const Header = () => {
    return (
        <header className="sticky lg:fixed z-10 w-full">
            <nav className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-center p-4 pl-8 bg-[#1A2F52] backdrop-blur shadow-lg lg:bg-opacity-70 text-center">
                <img src={icon} alt="Gatsby Logo" className="h-12" />
            </nav>
        </header>
    );
};

export default Header;

// bg-[#F7E2C7]
