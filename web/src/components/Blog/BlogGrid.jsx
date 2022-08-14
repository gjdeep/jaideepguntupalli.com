import * as React from "react";

const BlogGrid = ({ children }) => {
    return (
        <section className="grid xl:grid-cols-2 md:w-11/12 mx-auto">
            {children}
        </section>
    );
};

export default BlogGrid;
