import * as React from "react";
import { Link } from "gatsby";

const Btn = ({ text, addr, extclass }) => {
    return (
        <Link
            to={addr}
            className={
                "transition-colors duration-200 border-2 border-cus-orange px-6 md:px-12 py-3 md:py-5 font-medium md:text-xl " +
                extclass
            }
        >
            {text}
        </Link>
    );
};

export default Btn;
