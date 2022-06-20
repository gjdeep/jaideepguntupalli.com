import * as React from "react";
import { Link } from "gatsby";

const Btn = ({ text, addr, extclass }) => {
    return (
        <Link
            to={addr}
            className={
                "border-2 border-cus-orange px-12 py-5 font-medium text-xl " +
                extclass
            }
        >
            {text}
        </Link>
    );
};

export default Btn;
