import * as React from "react";
import Layout from "../templates/layout/Layout";
import Hero from "../sections/blog/Hero";
import AllBlogs from "../sections/blog/AllBlogs";
import BlogSection from "../sections/blog/BlogSection";
import { useStaticQuery, graphql } from "gatsby";

const BlogPreviewPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allSanityPost(sort: { fields: postedDate, order: DESC }) {
                nodes {
                    _id
                    slug {
                        current
                    }
                    title
                    postedDate(formatString: "MMM DD, YYYY")
                    coverImg {
                        asset {
                            resize(width: 1200, format: WEBP) {
                                src
                            }
                        }
                        alt
                    }
                    author {
                        fName
                        lName
                        photo {
                            alt
                            asset {
                                url
                            }
                        }
                    }
                    category {
                        categoryName
                    }
                }
            }
            allSanityCategory {
                nodes {
                    _id
                    categoryName
                }
            }
        }
    `);
    const categoriesQuery = data.allSanityCategory;

    const postData = data.allSanityPost;

    const categories = categoriesQuery.nodes.map((category) => {
        return (
            <BlogSection
                key={category._id}
                title={category.categoryName}
                postData={postData}
            />
        );
    });

    console.log(categoriesQuery);
    return (
        <Layout pageTitle="Blog | Jaideep Guntupalli">
            <Hero />
            <AllBlogs data={postData} />
            {categories}
        </Layout>
    );
};

export default BlogPreviewPage;
