import * as React from "react";
import Layout from "../layout/Layout";
import Hero from "../sections/home/Hero";
import About from "../sections/home/About";

// markup
const IndexPage = () => {
    return (
        <Layout pageTitle="Jaideep Guntupalli">
            <Hero />
            <About />
        </Layout>
    );
};

export default IndexPage;
