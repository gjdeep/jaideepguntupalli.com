import * as React from "react";
import SectHeading from "./../../components/common/SectHeading";

const About = () => {
    return (
        <section className="py-28">
            <SectHeading
                heading="About Me!"
                link={true}
                linktext="View more details"
                addr="/about"
            />
            <p>asdf</p>
        </section>
    );
};

export default About;
