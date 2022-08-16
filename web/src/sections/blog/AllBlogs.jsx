import * as React from "react";
import { BlogPreview } from "../../components/Blog/BlogPreview";
import BlogGrid from "../../components/Blog/BlogGrid";
import SectHeading from "../../components/common/SectHeading";

const AllBlogs = ({ data }) => {
    const posts = data.nodes.map((post) => {
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
