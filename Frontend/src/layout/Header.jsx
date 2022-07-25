import * as React from "react";
import { Link } from "gatsby";
import logo from "../images/logo.svg";
import HLink from "../components/Header/HLink";
import HCta from "../components/Header/HCta";

const Header = () => {
    return (
        <header className="absolute top-0 w-full z-10">
            <section className="max-w-[1836px] mx-auto px-8 sm:px-10 md:px-16 lg:px-20 xl:px-24 py-4 flex justify-between items-center font-medium text-lg">
                <Link to="/">
                    <img src={logo} alt="Gatsby Logo" className="h-12" />
                </Link>
                <nav className="hidden sm:flex sm:w-2/5 xl:w-1/3  justify-between">
                    <HLink
                        text="Home"
                        addr="#home"
                        extclass="hidden lg:block"
                    />
                    <HLink text="About" addr="/#about" />
                    <HLink text="Work" addr="/#skills" />
                    <HLink text="Projects" addr="/#projects" />
                    <HLink text="Blog" addr="/blog" />
                    <HCta
                        text="Let's Talk!"
                        addr="/#contact"
                        extclass="block sm:hidden"
                    />
                </nav>
                <HCta
                    text="Let's Talk!"
                    addr="/#contact"
                    extclass="hidden sm:block"
                />
            </section>
        </header>
    );
};

export default Header;

// bg-[#F7E2C7]
