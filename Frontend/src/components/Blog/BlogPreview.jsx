import React from "react";
import { Link } from "gatsby";

export function BlogPreview({ title, author, authorImg, date, img }) {
    return (
        <section className="md:h-[30vh] flex flex-col md:flex-row gap-6 p-5 border-2 rounded-lg border-transparent transition-all hover:border-black hover:bg-white hover:scale-105">
            <img
                src={img}
                alt="Code Thumbnail"
                className="md:w-1/2 object-cover rounded-lg"
            />
            <div className="flex flex-col gap-4">
                <Link to="#" className="text-4xl font-bold">
                    <h2 className="text-2xl font-bold">
                        <span className="hover:text-cus-orange link-underline link-underline-orange link-underline:hover">
                            {title}
                        </span>
                    </h2>
                </Link>
                <section className="flex gap-2 items-center">
                    <img
                        src={authorImg}
                        alt="Jaideep Guntupalli"
                        className="w-12 h-12 p-1 rounded-full border-2 border-cus-orange"
                    />
                    <div>
                        <p className="font-medium">{author}</p>
                        <p className="text-gray-500 text-sm">{date}</p>
                    </div>
                </section>
            </div>
        </section>
    );
}
