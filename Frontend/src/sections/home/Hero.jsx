import * as React from "react";
import { Link } from "gatsby";
import Btn from "../../components/common/Btn";
import Laptop from "../../images/icons/Laptop.svg";
import Github from "../../images/icons/Github.svg";
import Linkedin from "../../images/icons/Linkedin.svg";
import Twitter from "../../images/icons/Twitter.svg";
import Me from "../../images/home/Me.png";
import Rect from "../../images/home/Grad Rect.png";

const Hero = () => {
    return (
        <section
            id="home"
            className="h-screen min-h-[821px] pt-20 relative flex flex-col md:flex-row justify-between"
        >
            <section className="flex flex-col md:min-h-[741px] md:w-[55%] 2xl:w-1/2 md:justify-between py-8 md:py-[4.5rem] 2xl:pt-28 3xl:pt-36 4xl:pt-48 gap-4">
                <h1 className=" text-[4rem] md:text-[5.5rem] font-bold tracking-[-0.0125rem] leading-[1.125]">
                    Hy! I Am
                    <span className="block md:whitespace-nowrap">
                        Jaideep Guntupalli
                    </span>
                </h1>
                <p className="font-work text-xl md:text-[1.75rem] w-11/12 pl-2 leading-snug">
                    Building beautiful web experiences for past one year as Full
                    Stack Developer.
                </p>
                <section className="flex gap-4 md:gap-10 ">
                    <Btn
                        text="My Work"
                        addr="#"
                        extclass="bg-cus-orange text-white hover:bg-cus-orange-dark"
                    />
                    <Btn
                        text="Know More"
                        addr="#"
                        extclass="hover:bg-cus-orange hover:text-white"
                    />
                </section>

                <section className="hidden md:flex justify-between w-2/3 items-center">
                    <img src={Laptop} alt="Laptop" />
                    <p className="font-work text-[1.375rem] leading-tight w-[70%]">
                        Full Stack Web Developer specialized in JAMStack
                    </p>
                </section>
                <section className="hidden md:flex gap-5">
                    <Link to="https://github.com/JaideepGuntupalli">
                        <img src={Github} alt="Github Logo" />
                    </Link>
                    <Link to="https://linkedin.com/in/gjdeep">
                        <img src={Linkedin} alt="LinkedIn Logo" />
                    </Link>
                    <Link to="https://twitter.com/gjdeep">
                        <img src={Twitter} alt="Twitter Logo" />
                    </Link>
                </section>
            </section>

            <section className="flex md:items-end">
                <section className="relative mb-8 md:mb-20">
                    <img
                        src={Me}
                        className="absolute bottom-0 right-[20%] md:right-0 xl:right-8 2xl:right-16 h-[37vh] min-h-[180px] md:h-[75vh] md:min-h-[616px]"
                        alt="Jaideep Guntupalli"
                    />
                    <img
                        src={Rect}
                        alt="Blue Red Gradient Rectangle"
                        className="md:h-[58vh] md:min-h-[476px]"
                    />
                </section>
            </section>
        </section>
    );
};

export default Hero;
