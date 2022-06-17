import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ pageTitle, children }) => {
    return (
        <div className="font-serif">
            <title>{pageTitle}</title>
            <Header />
            <main className="bg-[#fffdf1] pt-20">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
