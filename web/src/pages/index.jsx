import * as React from "react";
import Layout from "../templates/layout/Layout";
import Hero from "../sections/home/Hero";
import About from "../sections/home/About";
import Skills from "../sections/home/Skills";
import Projects from "../sections/home/Projects";
import Organisations from "../sections/home/Organisations";
import Contact from "../sections/home/Contact";

// markup
const IndexPage = () => {
    return (
        <Layout pageTitle="Jaideep Guntupalli">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Organisations />
            <Contact />
        </Layout>
    );
};

export default IndexPage;
