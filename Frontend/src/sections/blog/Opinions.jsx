import * as React from "react";
import { BlogPreview } from "../../components/Blog/BlogPreview";
import SectHeading from "../../components/common/SectHeading";
import code from "../../images/blog/code.png";
import jaideep from "../../images/blog/jaideep.jpg";

const OpinionBlogs = () => {
    return (
        <section className="pt-40">
            <SectHeading
                heading="Opinions"
                link={true}
                linktext="View More"
                addr="#"
            />
            <section className="grid md:grid-cols-2 md:w-11/12 mx-auto">
                <BlogPreview
                    img={code}
                    title="Hover Animation of a Button using only CSS"
                    author="Jaideep Guntupalli"
                    authorImg={jaideep}
                    date="Apr 17, 2022"
                />
                <BlogPreview
                    img={code}
                    title="Hover Animation of a Button using only CSS"
                    author="Jaideep Guntupalli"
                    authorImg={jaideep}
                    date="Apr 17, 2022"
                />
                <BlogPreview
                    img={code}
                    title="Hover Animation of a Button using only CSS"
                    author="Jaideep Guntupalli"
                    authorImg={jaideep}
                    date="Apr 17, 2022"
                />
            </section>
        </section>
    );
};

export default OpinionBlogs;
