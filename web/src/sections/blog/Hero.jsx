import * as React from "react";
import { Link } from "gatsby";
import code from "../../images/blog/code.png";
import jaideep from "../../images/blog/jaideep.jpg";

const Hero = () => {
    return (
        <section className="pt-12">
            <section className="flex flex-col justify-center pl-5 md:pl-0 md:items-center gap-4 pt-20 pb-12">
                <h1 className="text-5xl font-bold">The Blog</h1>
                <p className="text-xl">
                    My Journey and Learnings in the Tech world documented as
                    Blogs.
                </p>
            </section>
            <section className="grid xl:grid-cols-2 grid-rows-3 md:w-11/12 mx-auto">
                <section className="flex flex-col gap-6 row-span-3 p-5 border-2 rounded-lg border-transparent transition-all hover:border-black hover:bg-white hover:scale-105">
                    <img
                        src={code}
                        alt="Code Thumbnail"
                        className="h-full object-cover rounded-lg"
                    />

                    <div className="flex flex-col gap-2">
                        <Link to="#" className="text-4xl font-bold">
                            <h2 className="text-2xl md:text-4xl font-bold">
                                <span className="hover:text-cus-orange link-underline link-underline-orange link-underline:hover">
                                    Hover Animation of a Button using only CSS
                                </span>
                            </h2>
                        </Link>
                        <section className="flex gap-2 items-center">
                            <img
                                src={jaideep}
                                alt="Jaideep Guntupalli"
                                className="w-12 h-12 p-1 rounded-full border-2 border-cus-orange"
                            />
                            <div>
                                <p className="font-medium">
                                    Jaideep Guntupalli
                                </p>
                                <p className="text-gray-500 text-sm">
                                    Apr 17, 2022
                                </p>
                            </div>
                        </section>
                    </div>
                </section>
                <section className="flex flex-col md:flex-row gap-6 p-5 border-2 rounded-lg border-transparent transition-all hover:border-black hover:bg-white hover:scale-105">
                    <img
                        src={code}
                        alt="Code Thumbnail"
                        className="md:w-1/2 object-cover rounded-lg"
                    />
                    <div className="flex flex-col gap-2">
                        <Link to="#" className="text-4xl font-bold">
                            <h2 className="text-2xl font-bold">
                                <span className="hover:text-cus-orange link-underline link-underline-orange link-underline:hover">
                                    Hover Animation of a Button using only CSS
                                </span>
                            </h2>
                        </Link>
                        <section className="flex gap-2 items-center">
                            <img
                                src={jaideep}
                                alt="Jaideep Guntupalli"
                                className="w-12 h-12 p-1 rounded-full border-2 border-cus-orange"
                            />
                            <div>
                                <p className="font-medium">
                                    Jaideep Guntupalli
                                </p>
                                <p className="text-gray-500 text-sm">
                                    Apr 17, 2022
                                </p>
                            </div>
                        </section>
                    </div>
                </section>
                <section className="flex flex-col md:flex-row gap-6 p-5 border-2 rounded-lg border-transparent transition-all hover:border-black hover:bg-white hover:scale-105">
                    <img
                        src={code}
                        alt="Code Thumbnail"
                        className="md:w-1/2 object-cover rounded-lg"
                    />
                    <div className="flex flex-col gap-2">
                        <Link to="#" className="text-4xl font-bold">
                            <h2 className="text-2xl font-bold">
                                <span className="hover:text-cus-orange link-underline link-underline-orange link-underline:hover">
                                    Hover Animation of a Button using only CSS
                                </span>
                            </h2>
                        </Link>
                        <section className="flex gap-2 items-center">
                            <img
                                src={jaideep}
                                alt="Jaideep Guntupalli"
                                className="w-12 h-12 p-1 rounded-full border-2 border-cus-orange"
                            />
                            <div>
                                <p className="font-medium">
                                    Jaideep Guntupalli
                                </p>
                                <p className="text-gray-500 text-sm">
                                    Apr 17, 2022
                                </p>
                            </div>
                        </section>
                    </div>
                </section>
                <section className="flex flex-col md:flex-row gap-6 p-5 border-2 rounded-lg border-transparent transition-all hover:border-black hover:bg-white hover:scale-105">
                    <img
                        src={code}
                        alt="Code Thumbnail"
                        className="md:w-1/2 object-cover rounded-lg"
                    />
                    <div className="flex flex-col gap-2">
                        <Link to="#" className="text-4xl font-bold">
                            <h2 className="text-2xl font-bold">
                                <span className="hover:text-cus-orange link-underline link-underline-orange link-underline:hover">
                                    Hover Animation of a Button using only CSS
                                </span>
                            </h2>
                        </Link>
                        <section className="flex gap-2 items-center">
                            <img
                                src={jaideep}
                                alt="Jaideep Guntupalli"
                                className="w-12 h-12 p-1 rounded-full border-2 border-cus-orange"
                            />
                            <div>
                                <p className="font-medium">
                                    Jaideep Guntupalli
                                </p>
                                <p className="text-gray-500 text-sm">
                                    Apr 17, 2022
                                </p>
                            </div>
                        </section>
                    </div>
                </section>
            </section>
        </section>
    );
};

export default Hero;
