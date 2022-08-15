import * as React from "react";
import logo from "../../images/logo.svg";
import { Link } from "gatsby";

import Github from "../../images/icons/Github.svg";
import Linkedin from "../../images/icons/Linkedin.svg";
import Twitter from "../../images/icons/Twitter.svg";

const Footer = () => {
    return (
        <footer className="px-8 sm:px-10 md:px-16 lg:px-20 xl:px-24 flex flex-col  gap-8 md:gap-10 py-16">
            <div className="h-[2px] w-full bg-cus-orange" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
                <Link to="/" className=" md:w-1/6">
                    <img src={logo} alt="Jaideep Logo" />
                </Link>
                <a
                    href="mailto:guntupallijaideep@gmail.com"
                    className="text-xl md:text-4xl font-medium md:pr-8"
                >
                    <span className="hover:text-cus-orange link-underline link-underline-orange link-underline:hover">
                        guntupallijaideep@gmail.com
                    </span>
                </a>
            </div>

            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
                <p className="text-xl text-center md:text-left">
                    © 2022 Jaideep Guntupalli. All Rights Reserved.
                </p>
                <section className="flex gap-5 pr-8">
                    <a href="https://github.com/JaideepGuntupalli">
                        <img src={Github} alt="Github Logo" />
                    </a>
                    <a href="https://linkedin.com/in/gjdeep">
                        <img src={Linkedin} alt="LinkedIn Logo" />
                    </a>
                    <a href="https://twitter.com/gjdeep">
                        <img src={Twitter} alt="Twitter Logo" />
                    </a>
                </section>
            </div>
        </footer>
    );
};

export default Footer;
