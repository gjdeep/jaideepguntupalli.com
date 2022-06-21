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
        <div className="flex flex-col gap-3">
            <img src={image} alt={title} className="w-full h-auto" />
            <div className="flex flex-col w-full gap-2">
                <h4 className="font-work font-medium opacity-50">{date}</h4>
                <h3 className="text-4xl font-bold">{title}</h3>
                <p className="font-work">{description}</p>
                <Link to={link} className="text-cus-orange whitespace-nowrap">
                    {linktext}
                </Link>
            </div>
        </div>
    );
};

export default ProjectPreview;
