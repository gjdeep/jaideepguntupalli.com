import * as React from "react";
import Layout from "../layout/Layout";
import Hero from "../sections/blog/Hero";
import AllBlogs from "../sections/blog/AllBlogs";
import BlogSection from "../sections/blog/BlogSection";

const BlogPage = () => {
    return (
        <Layout pageTitle="Blog | Jaideep Guntupalli">
            <Hero />
            <AllBlogs />
            <BlogSection title="Experiences" />
            <BlogSection title="Tutorials" />
            <BlogSection title="Reviews" />
            <BlogSection title="Opinions" />
        </Layout>
    );
};

export default BlogPage;
