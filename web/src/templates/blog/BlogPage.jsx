import * as React from "react";
import Layout from "../layout/Layout";
import SuggestionBlogs from "../../sections/blog/SuggestionBlogs";
import { Link, graphql } from "gatsby";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import BlogTags from "../../sections/blog/BlogTags";

const builder = imageUrlBuilder({ projectId: `yr7gi15i`, dataset: `blog` });

function urlFor(source) {
    return builder.image(source);
}

const customComponents = {
    types: {
        img: (props) => (
            <>
                <figure className="my-8 lg:w-4/5 mx-auto">
                    <img
                        className="rounded-lg"
                        src={urlFor(props.value.asset)}
                        alt={props.value.alt}
                    />
                    <figcaption className="text-center pt-4 opacity-50">
                        {props.value.caption}
                    </figcaption>
                </figure>
            </>
        ),
    },

    marks: {
        link: ({ children, value }) => {
            const rel = !value.href.startsWith("/")
                ? "noreferrer noopener"
                : undefined;
            return (
                <a
                    href={value.href}
                    rel={rel}
                    className="text-cus-orange link-underline link-underline-orange link-underline:hover"
                >
                    {children}
                </a>
            );
        },
        code: ({ children }) => (
            <code className="font-mono text-sm bg-[#f3d0cc] text-cus-orange-dark p-1 px-2 mx-1 rounded-md">
                {children}
            </code>
        ),
    },

    block: {
        // Ex. 1: customizing common block types
        h1: ({ children }) => (
            <h1 className="text-4xl font-bold mt-6 mb-3">{children}</h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-3xl font-medium mt-5 mb-2">{children}</h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-2xl font-medium mt-4 mb-1">{children}</h3>
        ),
        normal: ({ children }) => (
            <p className="leading-relaxed mt-2 mb-4">{children}</p>
        ),
    },

    list: {
        // Ex. 1: customizing common list types
        bullet: ({ children }) => <ul className="mb-6">{children}</ul>,
        number: ({ children }) => <ol className="mb-4">{children}</ol>,
    },

    listItem: {
        // Ex. 1: customizing common list types
        bullet: ({ children }) => (
            <li className="my-3 ml-4" style={{ listStyleType: "circle" }}>
                {children}
            </li>
        ),
    },
};

const BlogPageTemplate = ({ data }) => {
    const post = data.sanityPost;
    console.log(post.content);
    const author = post.author;
    const tags = post.tags.map((tag) => (
        <BlogTags key={tag} tagName={tag.tagName} />
    ));
    return (
        <Layout title="Blog Title">
            <section className="sm:px-10 pt-24 sm:pt-32 max-w-7xl mx-auto">
                <div className="md:px-20 lg:px-32 xl:px-52">
                    <Link
                        to={"/blog/" + post.category.categoryName}
                        className="text-lg sm:text-xl md:text-2xl font-bold text-cus-orange"
                    >
                        {post.category.categoryName}
                    </Link>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold py-4 leading-tight">
                        {post.title}
                    </h1>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-medium opacity-75 pb-6 leading-tight">
                        {post.subtitle}
                    </h2>
                    <section className="flex gap-2 items-center">
                        <img
                            src={author.photo.asset.url}
                            alt={author.fName + " " + author.lName}
                            className="w-12 h-12 p-1 rounded-full border-2 border-cus-orange"
                        />
                        <div>
                            <p className="font-medium">
                                {author.fName + " " + author.lName}
                            </p>
                            <p className="text-gray-500 text-sm">
                                {"Published " + post.postedDate}
                            </p>
                        </div>
                    </section>
                </div>
                <figure className="my-10 h-[50vh] max-h-96">
                    <img
                        className="rounded-lg object-cover h-full w-full"
                        src={post.coverImg.asset.url}
                        alt={post.coverImg.alt}
                    />
                    <figcaption className="text-center pt-4 opacity-50">
                        {post.coverImg.caption}
                    </figcaption>
                </figure>
                <section className="md:px-20 lg:px-32 xl:px-52 pt-6 pb-16 text-lg">
                    <PortableText
                        value={post.content}
                        components={customComponents}
                    />
                    <p className="pt-10">{tags}</p>
                    <SuggestionBlogs />
                </section>
            </section>
        </Layout>
    );
};

export default BlogPageTemplate;

export const pageQuery = graphql`
    query ($postId: String) {
        sanityPost(_id: { eq: $postId }) {
            category {
                categoryName
            }
            tags {
                tagName
            }
            title
            subtitle
            coverImg {
                alt
                caption
                asset {
                    url
                }
            }
            postedDate(formatString: "DD MMM YYYY")
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
            content: _rawContent
        }
    }
`;
