import * as React from "react";
import { Link } from "gatsby";

const WorkExp = ({ date, role, company, addr }) => {
    return (
        <div className="flex items-start gap-8 fadeInSkills p-4 border-2 rounded-md border-transparent transition-all hover:border-black hover:bg-white hover:scale-105">
            <h4 className="font-bold text-2x whitespace-nowrap opacity-50">
                {date}
            </h4>
            <Link to={addr} className="">
                <h4 className="font-bold text-2xl">
                    <span className="hover:text-cus-orange link-underline link-underline-orange link-underline:hover">
                        {role}
                    </span>
                </h4>
                <p className="text-xl leading-normal">{company}</p>
            </Link>
        </div>
    );
};

export default WorkExp;