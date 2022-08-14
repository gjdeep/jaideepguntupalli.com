import * as React from "react";
import Btn from "../components/common/Btn";
import Layout from "../layout/Layout";
import err from "../images/404.svg";

// markup
const NotFoundPage = () => {
    return (
        <Layout pageTitle="Blog | Jaideep Guntupalli">
            <section className="p-20 flex flex-col-reverse items-center md:flex-row md:gap-20">
                <section className="pt-20 flex flex-col md:gap-8 items-start">
                    <h1 className="text-9xl lg:text-[15rem] leading-none">
                        404
                    </h1>
                    <div>
                        <p className="text-4xl lg:text-6xl leading-none">
                            Something went
                        </p>
                        <p className="text-6xl lg:text-8xl font-bold py-10">
                            WRONG!
                        </p>
                    </div>
                    <Btn
                        text="Go back to home"
                        addr="/"
                        extclass="bg-cus-orange text-white hover:bg-cus-orange-dark"
                    />
                </section>
                <img src={err} alt="404 illustration" className="sm:w-1/2" />
            </section>
        </Layout>
    );
};

export default NotFoundPage;
