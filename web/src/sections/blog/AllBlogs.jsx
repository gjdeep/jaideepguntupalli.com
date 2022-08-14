import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { BlogPreview } from "../../components/Blog/BlogPreview";
import BlogGrid from "../../components/Blog/BlogGrid";
import SectHeading from "../../components/common/SectHeading";

const AllBlogs = () => {
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
                }
            }
        }
    `);
    const posts = data.allSanityPost.nodes.map((post) => {
        console.log(post.coverImg);
        return (
            <BlogPreview
                key={post._id}
                img={post.coverImg.asset.resize.src}
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
        <section className="pt-40">
            <SectHeading
                heading="All Blogs"
                link={true}
                linktext="View More"
                addr="#"
            />
            <BlogGrid>{posts}</BlogGrid>
        </section>
    );
};

export default AllBlogs;
