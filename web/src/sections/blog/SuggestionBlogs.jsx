import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import SectHeading from "../../components/common/SectHeading";
import { BlogPreview } from "../../components/Blog/BlogPreview";

const SuggestionBlogs = () => {
    const data = useStaticQuery(graphql`
        query {
            allSanityPost(limit: 3, sort: { fields: postedDate, order: DESC }) {
                nodes {
                    _id
                    slug {
                        current
                    }
                    title
                    postedDate(formatString: "DD MMM YYYY")
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
        }
    `);

    const postData = data.allSanityPost;

    const posts = postData.nodes;

    const allPosts = posts.map((post) => {
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
        <section className="pt-20">
            <SectHeading heading="You may also like..." link={false} />
            <section>{allPosts}</section>
        </section>
    );
};

export default SuggestionBlogs;
