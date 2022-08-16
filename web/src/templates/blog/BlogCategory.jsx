import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";
import SectHeading from "../../components/common/SectHeading";
import { BlogPreview } from "../../components/Blog/BlogPreview";
import BlogGrid from "../../components/Blog/BlogGrid";

const BlogCategoryTemplate = ({ data }) => {
    const postData = data.allSanityPost.nodes;

    const categoryName = data.sanityCategory.categoryName;

    const allPosts = postData.map((post) => {
        return (
            <BlogPreview
                key={post._id}
                img={post.coverImg.asset.url}
                imgAlt={post.coverImg.alt}
                title={post.title}
                slug={post.slug.current}
                author={post.author.fName + " " + post.author.lName}
                authorImg={post.author.photo.asset.url}
                date={post.postedDate}
            />
        );
    });

    return (
        <Layout title="Blog Title">
            <section className="pt-32">
                <SectHeading heading={categoryName} />
                <BlogGrid>{allPosts}</BlogGrid>
            </section>
        </Layout>
    );
};

export default BlogCategoryTemplate;

export const query = graphql`
    query ($categoryId: String) {
        allSanityPost(filter: { category: { _id: { eq: $categoryId } } }) {
            nodes {
                _id
                slug {
                    current
                }
                title
                postedDate(formatString: "DD MMM YYYY")
                coverImg {
                    asset {
                        url
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
            }
        }
        sanityCategory(_id: { eq: $categoryId }) {
            categoryName
        }
    }
`;
