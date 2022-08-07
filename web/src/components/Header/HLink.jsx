import * as React from "react";
import { Link } from "gatsby";

const HLink = ({ addr, text, extclass }) => {
    return (
        <Link
            to={addr}
            className={
                "link-underline link-underline-orange link-underline:hover " +
                extclass
            }
        >
            {text}
        </Link>
    );
};

export default HLink;
