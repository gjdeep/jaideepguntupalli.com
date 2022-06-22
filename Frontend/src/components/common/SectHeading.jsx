import { Link } from "gatsby";
import * as React from "react";

const SectHeading = ({ heading, link, linktext, addr }) => {
    return (
        <div className="mb-16">
            <h2 className=" font-bold text-5xl py-2 leading-tight">
                {heading}
            </h2>
            <div className="flex items-center gap-4">
                {link ? (
                    <Link
                        className="text-2xl text-cus-orange whitespace-nowrap"
                        to={addr}
                    >
                        {linktext + " >>"}
                    </Link>
                ) : (
                    <p className="text-2xl text-cus-orange whitespace-nowrap">
                        {linktext}
                    </p>
                )}
                <div className="h-1 bg-cus-orange w-full flex justify-end items-center">
                    <div className="p-2 bg-cus-orange rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default SectHeading;
