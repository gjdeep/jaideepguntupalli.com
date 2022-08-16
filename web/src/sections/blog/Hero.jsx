import * as React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import FeaturedBlogPreview from "../../components/Blog/FeaturedBlogPreview";

const SideBlogPreview = ({
    title,
    author,
    authorImg,
    date,
    img,
    imgAlt,
    slug,
}) => {
    return (
        <section className="flex flex-col md:flex-row gap-6 p-5 border-2 rounded-lg border-transparent transition-all hover:border-black hover:bg-white hover:scale-105">
            <img
                src={img}
                alt={imgAlt}
                className="md:w-1/2 object-cover rounded-lg"
            />
            <div className="flex flex-col gap-2">
                <Link to={"/blog/" + slug} className="text-4xl font-bold">
                    <h2 className="text-2xl font-bold">
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

const Hero = () => {
    const sidePosts = useStaticQuery(graphql`
        query {
            allSanityPost(sort: { fields: postedDate, order: DESC }, limit: 3) {
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
        }
    `);
    const asidePosts = sidePosts.allSanityPost.nodes.map((sidePost) => {
        return (
            <SideBlogPreview
                key={sidePost._id}
                img={sidePost.coverImg.asset.url}
                imgAlt={sidePost.coverImg.alt}
                title={sidePost.title}
                slug={sidePost.slug.current}
                author={sidePost.author.fName + " " + sidePost.author.lName}
                authorImg={sidePost.author.photo.asset.url}
                date={sidePost.postedDate}
            />
        );
    });
    return (
        <section className="pt-12">
            <section className="flex flex-col justify-center pl-5 md:pl-0 md:items-center gap-4 pt-20 pb-12">
                <h1 className="text-5xl font-bold">The Blog</h1>
                <p className="text-xl">
                    My Journey and Learnings in the Tech world documented as
                    Blogs.
                </p>
            </section>
            <section className="grid xl:grid-cols-2 grid-rows-3 md:w-11/12 mx-auto">
                <FeaturedBlogPreview />
                {asidePosts}
            </section>
        </section>
    );
};

export default Hero;
