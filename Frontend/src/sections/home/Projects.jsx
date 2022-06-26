import * as React from "react";
// import { useIntersection } from "react-use";
// import gsap from "gsap";
// import { useRef } from "react";
import SectHeading from "../../components/common/SectHeading";
import ProjectPreview from "../../components/Home/ProjectPreview";
import cric from "../../images/projects/cricopedia.png";
import ludo from "../../images/projects/ludo.png";
import asm from "../../images/projects/assembler.png";
import msg from "../../images/projects/msg.png";

const Projects = () => {
    // const sectionRef = useRef(null);
    // const intersection = useIntersection(sectionRef, {
    //     root: null,
    //     rootMargin: "0px",
    //     threshold: 0.1,
    // });

    // const fadeIn = (element) => {
    //     gsap.to(element, {
    //         duration: 1,
    //         opacity: 1,
    //         y: 0,
    //         ease: "power4.out",
    //         stagger: {
    //             amount: 0.3,
    //         },
    //     });
    // };

    // const fadeOut = (element) => {
    //     gsap.to(element, {
    //         duration: 1,
    //         opacity: 0,
    //         y: 40,
    //         ease: "power4.out",
    //     });
    // };

    // intersection && intersection.intersectionRatio < 0.1
    //     ? fadeOut(".fadeInProj")
    //     : fadeIn(".fadeInProj");
    return (
        <section id="projects" className="py-20 md:py-28 fadeInProj">
            <SectHeading
                heading="Projects"
                link={true}
                linktext="View more details"
                addr="/projects"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                {/* <ProjectPreview
                    image="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    date="Jul 2022"
                    title="Lynks (Bookmarking App)"
                    description="Full Stack Web Application built using ReactJS for frontend, NestJS for backend, Prisma for ORM and PostgreSQl for database for bookmarking websites, tagging them and sorting them into projects."
                    link="/projects/Lynks"
                    linktext="More details >>"
                />
                <ProjectPreview
                    image="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    date="Jun 2022"
                    title="OAuth2.0 Auth Server"
                    description="OAuth2.0 Auth Server built using NestJS, Prisma for ORM and PostgreSQl for database for authentication and authorization using Authorization Code Grant."
                    link="/projects/OAuth2"
                    linktext="More details >>"
                /> */}
                <ProjectPreview
                    image={cric}
                    date="May 2022"
                    title="Cric-o-pedia.live"
                    description="Designed & Developed a website for Cric-o-pedia.live, a live cricket scorecard website. Built using ReactJS for frontend, Firebase for authentication and deployed a proxy server to get the live cricket scores and stats using ESPNCricinfo API."
                    link="https://github.com/JaideepGuntupalli?tab=repositories&q=cric-o-pedia&type=&language=&sort="
                    linktext="More details >>"
                />
                <ProjectPreview
                    image={msg}
                    date="Apr 2022"
                    title="Messaging App"
                    description="Designed & developed a realtime chatting web app using ReactJS for frontend, NodeJS for backend, MySQL for database and Socket.io for realtime communication."
                    link="https://github.com/JaideepGuntupalli/messaging-app"
                    linktext="More details >>"
                />
                <ProjectPreview
                    image={ludo}
                    date="Dec 2021"
                    title="Ludo Master Clone"
                    description="Developed a clone of popular Play Store App Ludo Master for Desktop with Local 2-player Multiplayer game mode developed using Java and JavaFX."
                    link="https://github.com/JaideepGuntupalli/Ludo-Master-Clone"
                    linktext="More details >>"
                />
                <ProjectPreview
                    image={asm}
                    date="Aug 2021"
                    title="Assembler and Simulator"
                    description="Designed and programmed an Assembler and Simulator for Assembly Language in Python where Assembly language is taken as input and outputting corresponding Machine Code."
                    link="https://github.com/JaideepGuntupalli/Assembler-and-Simulator"
                    linktext="More details >>"
                />
            </div>
        </section>
    );
};

export default Projects;
