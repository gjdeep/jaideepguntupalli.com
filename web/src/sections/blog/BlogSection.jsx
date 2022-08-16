import * as React from "react";
import { BlogPreview } from "../../components/Blog/BlogPreview";
import BlogGrid from "../../components/Blog/BlogGrid";
import SectHeading from "../../components/common/SectHeading";

const BlogSection = ({ title, postData }) => {
    if (postData === null) {
        return (
            <section className="pt-40">
                <SectHeading
                    heading={title}
                    link={true}
                    linktext="View More"
                    addr={"/blog/" + title}
                />
            </section>
        );
    }

    const posts = postData.nodes;

    if (posts.length === 0) {
        return null;
    }

    let isNull = true;

    const allPosts = posts.map((post) => {
        if (post.category.categoryName === title) {
            isNull = false;
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
        }
        return null;
    });

    if (isNull) {
        return null;
    } else {
        return (
            <section className="pt-40">
                <SectHeading
                    heading={title}
                    link={true}
                    linktext="View More"
                    addr={"/blog/" + title}
                />
                <BlogGrid>{allPosts}</BlogGrid>
            </section>
        );
    }
};

export default BlogSection;
