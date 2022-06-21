import * as React from "react";
import Layout from "../layout/Layout";
import Hero from "../sections/home/Hero";
import About from "../sections/home/About";
import Skills from "../sections/home/Skills";

// markup
const IndexPage = () => {
    return (
        <Layout pageTitle="Jaideep Guntupalli">
            <Hero />
            <About />
            <Skills />
        </Layout>
    );
};

export default IndexPage;
