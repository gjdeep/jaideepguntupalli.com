import * as React from "react";
import Btn from "../../components/common/Btn";
import Laptop from "../../images/icons/Laptop.svg";
import Github from "../../images/icons/Github.svg";
import Linkedin from "../../images/icons/Linkedin.svg";
import Twitter from "../../images/icons/Twitter.svg";
import Me from "../../images/home/Me.png";
import Rect from "../../images/home/Grad Rect.png";

const Hero = () => {
    return (
        <section className="h-screen min-h-[821px] pt-20 relative flex justify-between">
            <section className="flex flex-col min-h-[741px] w-[55%] 2xl:w-1/2 justify-between py-[4.5rem] 2xl:pt-28 3xl:pt-36 4xl:pt-48 gap-4">
                <h1 className="text-[5.5rem] font-bold tracking-[-0.0125rem] leading-[1.125]">
                    Hy! I Am
                    <span className="block whitespace-nowrap">
                        Jaideep Guntupalli
                    </span>
                </h1>
                <p className="font-work text-[1.75rem] w-11/12 pl-2 leading-snug">
                    Building beautiful web experiences for past one year as Full
                    Stack Developer.
                </p>
                <section className="flex gap-10 ">
                    <Btn
                        text="My Work"
                        addr="#"
                        extclass="bg-cus-orange text-white"
                    />
                    <Btn
                        text="Know More"
                        addr="#"
                        extclass="hover:bg-cus-orange hover:text-white"
                    />
                </section>

                <section className="flex justify-between w-2/3 items-center">
                    <img src={Laptop} alt="Laptop" />
                    <p className="font-work text-[1.375rem] leading-tight w-[70%]">
                        Full Stack Web Developer specialized in JAMStack
                    </p>
                </section>
                <section className="flex gap-5">
                    <img src={Github} alt="" />
                    <img src={Linkedin} alt="" />
                    <img src={Twitter} alt="" />
                </section>
            </section>

            <section className="flex items-end">
                <section className="relative mb-20">
                    <img
                        src={Me}
                        className="absolute bottom-0 right-0 xl:right-8 2xl:right-16 h-[75vh] min-h-[616px]"
                        alt=""
                    />
                    <img src={Rect} alt="" className="h-[58vh] min-h-[476px]" />
                </section>
            </section>
        </section>
    );
};

export default Hero;
