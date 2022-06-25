import * as React from "react";
import { useIntersection } from "react-use";
import gsap from "gsap";
import { useRef } from "react";
import SectHeading from "../../components/common/SectHeading";
import ProjectPreview from "../../components/Home/ProjectPreview";

const Projects = () => {
    const sectionRef = useRef(null);
    const intersection = useIntersection(sectionRef, {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    });

    const fadeIn = (element) => {
        gsap.to(element, {
            duration: 1,
            opacity: 1,
            y: 0,
            ease: "power4.out",
            stagger: {
                amount: 0.3,
            },
        });
    };

    const fadeOut = (element) => {
        gsap.to(element, {
            duration: 1,
            opacity: 0,
            y: 40,
            ease: "power4.out",
        });
    };

    intersection && intersection.intersectionRatio < 0.1
        ? fadeOut(".fadeInProj")
        : fadeIn(".fadeInProj");
    return (
        <section
            ref={sectionRef}
            id="projects"
            className="py-20 md:py-28 fadeInProj"
        >
            <SectHeading
                heading="Projects"
                link={true}
                linktext="View more details"
                addr="/projects"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                <ProjectPreview
                    image="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    date="Dec 2021"
                    title="Cric-o-pedia.live"
                    description="Designed & developed a responsive  website to showcase my personal portfolio using HTML5, TailWindCSS, & JavaScript."
                    link="/projects/cric-o-pedia"
                    linktext="More details >>"
                />
                <ProjectPreview
                    image="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    date="Dec 2021"
                    title="Cric-o-pedia.live"
                    description="Designed & developed a responsive  website to showcase my personal portfolio using HTML5, TailWindCSS, & JavaScript."
                    link="/projects/cric-o-pedia"
                    linktext="More details >>"
                />
                <ProjectPreview
                    image="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    date="Dec 2021"
                    title="Cric-o-pedia.live"
                    description="Designed & developed a responsive  website to showcase my personal portfolio using HTML5, TailWindCSS, & JavaScript."
                    link="/projects/cric-o-pedia"
                    linktext="More details >>"
                />
                <ProjectPreview
                    image="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    date="Dec 2021"
                    title="Cric-o-pedia.live"
                    description="Designed & developed a responsive  website to showcase my personal portfolio using HTML5, TailWindCSS, & JavaScript."
                    link="/projects/cric-o-pedia"
                    linktext="More details >>"
                />
                <ProjectPreview
                    image="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    date="Dec 2021"
                    title="Cric-o-pedia.live"
                    description="Designed & developed a responsive  website to showcase my personal portfolio using HTML5, TailWindCSS, & JavaScript."
                    link="/projects/cric-o-pedia"
                    linktext="More details >>"
                />
                <ProjectPreview
                    image="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    date="Dec 2021"
                    title="Cric-o-pedia.live"
                    description="Designed & developed a responsive  website to showcase my personal portfolio using HTML5, TailWindCSS, & JavaScript."
                    link="/projects/cric-o-pedia"
                    linktext="More details >>"
                />
            </div>
        </section>
    );
};

export default Projects;
