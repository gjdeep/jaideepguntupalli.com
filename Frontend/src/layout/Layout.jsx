import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";

const Layout = ({ pageTitle, children }) => {
    return (
        <div className="font-dm bg-cus-light-orange">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{pageTitle}</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <Header />
            <main className="px-8 sm:px-10 md:px-16 lg:px-20 xl:px-24 max-w-[1836px] mx-auto">
                {children}
            </main>
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;
