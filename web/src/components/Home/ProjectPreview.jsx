import * as React from "react";
import { Link } from "gatsby";

const ProjectPreview = ({
    image,
    title,
    date,
    description,
    link,
    linktext,
}) => {
    return (
        <div className="flex flex-col gap-3 fadeInProj p-6 rounded-md border-2 border-transparent transition-all hover:border-black hover:bg-white hover:scale-105">
            <Link to={link}>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-auto rounded-md"
                />
            </Link>
            <div className="flex flex-col w-full gap-2">
                <h4 className="font-work font-medium opacity-50">{date}</h4>
                <Link to={link} className="text-4xl font-bold">
                    <span className="hover:text-cus-orange link-underline link-underline-orange link-underline:hover">
                        {title}
                    </span>
                </Link>
                <p className="font-work">{description}</p>
                <Link to={link} className="text-cus-orange whitespace-nowrap">
                    {linktext}
                </Link>
            </div>
        </div>
    );
};

export default ProjectPreview;
