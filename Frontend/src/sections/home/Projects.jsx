import * as React from "react";
import SectHeading from "../../components/common/SectHeading";
import ProjectPreview from "../../components/Home/ProjectPreview";

const Projects = () => {
    return (
        <section className="py-28">
            <SectHeading
                heading="Projects"
                link={true}
                linktext="View more details"
                addr="/projects"
            />
            <div className="grid grid-cols-3 gap-16">
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
