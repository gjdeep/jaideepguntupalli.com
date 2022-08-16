import * as React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";

const FeaturedBlogPreview = () => {
    const featuredPost = useStaticQuery(graphql`
        query {
            allSanityPost(sort: { fields: postedDate, order: DESC }, limit: 1) {
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
                }
            }
        }
    `);

    let post = featuredPost.allSanityPost.nodes[0];
    let img = post.coverImg.asset.resize.src;
    let imgAlt = post.coverImg.alt;
    let title = post.title;
    let slug = post.slug.current;
    let author = post.author.fName + " " + post.author.lName;
    let authorImg = post.author.photo.asset.url;
    let date = post.postedDate;

    return (
        <section className="max-h-[85vh] flex flex-col gap-6 row-span-3 p-5 border-2 rounded-lg border-transparent transition-all hover:border-black hover:bg-white hover:scale-105">
            <img
                src={img}
                alt={imgAlt}
                className="object-cover rounded-lg flex-1"
            />

            <div className="flex flex-col gap-2">
                <Link to={"/blog/" + slug} className="text-4xl font-bold">
                    <h2 className="text-2xl md:text-4xl font-bold">
                        <span className="hover:text-cus-orange link-underline link-underline-orange link-underline:hover">
                            {title}
                        </span>
                    </h2>
                </Link>
                <section className="flex gap-2 items-center">
                    <img
                        src={authorImg}
                        alt={author}
                        className="w-12 h-12 p-1 rounded-full border-2 border-cus-orange"
                    />
                    <div>
                        <p className="font-medium">{author}</p>
                        <p className="text-gray-500 text-sm">{date}</p>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default FeaturedBlogPreview;
