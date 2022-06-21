import * as React from "react";
import SectHeading from "./../../components/common/SectHeading";
import AboutPoint from "../../components/Home/AboutPoint";
import flutter from "../../images/icons/flutter.svg";
import design from "../../images/icons/design.svg";
import dev from "../../images/icons/dev.svg";

const About = () => {
    return (
        <section className="py-28">
            <SectHeading
                heading="About Me!"
                link={true}
                linktext="View more details"
                addr="/about"
            />
            <section className="flex gap-12">
                <h3 className="font-bold text-[4rem] w-1/2 leading-tight">
                    Creative{" "}
                    <span className="whitespace-nowrap">Full Stack</span> Web
                    Developer with UI/UX Background
                </h3>
                <section className="flex w-3/4 flex-col justify-between gap-8">
                    <AboutPoint
                        title="Full Stack Web Developer"
                        desc="I am a Full-stack web developer specializing in developing JAM Stack applications with Better Performance, Higher Security and Cheaper, Easier Scaling."
                        img={dev}
                        imgAlt="Icon resembling full stack development"
                    />
                    <AboutPoint
                        title="UI/UX Background"
                        desc="I come from UI/UX background, thanks to my degree in Computer Science and Design, which makes it easier to communicate with and understand cross-functional design teams."
                        img={design}
                        imgAlt="Icon resembling design"
                    />
                    <AboutPoint
                        title="Cross Platform Developer"
                        desc="I can develop beautiful apps using Flutter, which enables building, testing, and deploying cross-platform apps from a single codebase which halves the development time."
                        img={flutter}
                        imgAlt="Icon resembling flutter"
                    />
                </section>
            </section>
        </section>
    );
};

export default About;
