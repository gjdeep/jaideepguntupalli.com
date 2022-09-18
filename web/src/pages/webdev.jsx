import * as React from "react";
import Layout from "../templates/layout/Layout";
import Contact from "../sections/home/Contact";
import SectHeading from "../components/common/SectHeading";
import ProjectPreview from "../components/Home/ProjectPreview";
import cric from "../images/projects/cricopedia.png";
import back from "../images/projects/backslash.png";
import ieee from "../images/projects/ieee.png";
import Jaideep from "../images/projects/Jaideep.png";
import mor from "../images/projects/mor.png";
import msg from "../images/projects/msg.png";

// markup
const WebDevPage = () => {
    return (
        <Layout pageTitle="Jaideep Guntupalli">
            <section id="projects" className="py-20 md:py-28 fadeInProj">
                <SectHeading heading="Projects" linktext="Web Development" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                        image={Jaideep}
                        date="July 2022"
                        title="Portfolio Website"
                        description="Designed & Developed a personal portfolio site with blog using GatsbyJS, ReactJS, TailwindCSS and Sanity. Hosted using a virutal private server on DigitalOcean."
                        link="https://github.com/JaideepGuntupalli?tab=repositories&q=cric-o-pedia&type=&language=&sort="
                        linktext="More details >>"
                    />
                    <ProjectPreview
                        image={back}
                        date="June 2022"
                        title="BackSlash Website"
                        description="Refactored and prepared the back slash website for event during July 2022. Hosted using a virutal private server on Google Cloud."
                        link="https://github.com/JaideepGuntupalli?tab=repositories&q=cric-o-pedia&type=&language=&sort="
                        linktext="More details >>"
                    />
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
                        image={cric}
                        date="Apr 2022"
                        title="WebGI Pixotronics"
                        description="Developed the newly redesigned landing page of Pixotronics(client) using Sergey, a light-weight HTML-based Static Site Generator, TailwindCSS, and JavaScript.Integrated 3D scenes, videos as well as Hubspot's custom booking pages into website."
                        link="https://github.com/JaideepGuntupalli?tab=repositories&q=cric-o-pedia&type=&language=&sort="
                        linktext="More details >>"
                    />
                    <ProjectPreview
                        image={mor}
                        date="Mar 2022"
                        title="Mor-Chiraiya"
                        description="Designed & developed Mor-Chiraiya for a client with Google Analytics to track and understand user activity on the page. Integrated razorpay with the website to accept nest orders."
                        link="https://github.com/JaideepGuntupalli/messaging-app"
                        linktext="More details >>"
                    />
                    <ProjectPreview
                        image={ieee}
                        date="Feb 2022"
                        title="IEEE-IIITD Student Branch Website"
                        description="Developed IEEE-IIITD website with a custom CMS using Sanity with Astro using ReactJS for frontend. "
                        link="https://github.com/JaideepGuntupalli/messaging-app"
                        linktext="More details >>"
                    />
                    {/* <ProjectPreview
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
                    /> */}
                </div>
            </section>
            <Contact />
        </Layout>
    );
};

export default WebDevPage;
