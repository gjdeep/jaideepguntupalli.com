import * as React from "react";
import Layout from "../layout/Layout";
import Hero from "../sections/blog/Hero";
import AllBlogs from "../sections/blog/AllBlogs";
import TutorialBlogs from "../sections/blog/Tutorials";
import OpinionBlogs from "../sections/blog/Opinions";
import ExperienceBlogs from "../sections/blog/Experiences";
import ReviewBlogs from "../sections/blog/Reviews";

const BlogPage = () => {
    return (
        <Layout pageTitle="Blog | Jaideep Guntupalli">
            <Hero />
            <AllBlogs />
            <ExperienceBlogs />
            <TutorialBlogs />
            <ReviewBlogs />
            <OpinionBlogs />
        </Layout>
    );
};

export default BlogPage;
