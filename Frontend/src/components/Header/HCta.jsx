import * as React from "react";
import { Link } from "gatsby";

const HCta = ({ addr, text, extclass }) => {
    return (
        <Link
            to={addr}
            className={
                "py-1 px-3 md:py-2 md:px-6 border-2 border-cus-orange hover:bg-cus-orange hover:text-white " +
                extclass
            }
        >
            {text}
        </Link>
    );
};

export default HCta;
