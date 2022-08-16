import * as React from "react";

const BlogTags = ({ tagName }) => {
    return (
        <span className=" bg-[#f3d0cc] text-cus-orange-dark p-1 px-2 mx-1 rounded-md">
            {tagName}
        </span>
    );
};

export default BlogTags;
