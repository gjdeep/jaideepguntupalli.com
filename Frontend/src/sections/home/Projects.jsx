import * as React from "react";
import SectHeading from "../../components/common/SectHeading";

const Projects = () => {
    return (
        <section className="py-28">
            <SectHeading
                heading="Projects"
                link={true}
                linktext="View more details"
                addr="/projects"
            />
        </section>
    );
};

export default Projects;
