import * as React from "react";
import SectHeading from "../../components/common/SectHeading";
import Org from "../../components/Home/Org";
import binance from "../../images/companies/binance.svg";
import byld from "../../images/companies/byld.svg";
import ieee from "../../images/companies/ieee.svg";
import mlsa from "../../images/companies/mlsa.svg";
import biobytes from "../../images/companies/biobytes.svg";
import postman from "../../images/companies/postman.svg";

const Organisations = () => {
    return (
        <section id="org" className="py-20 md:py-28 fadeInOrg">
            <SectHeading
                heading="Organisations I have worked with"
                link={true}
                linktext="View more details"
                addr="/organisations"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Org
                    companyLogo={ieee}
                    role="Web Master"
                    company="IEEE IIIT Delhi Student Branch"
                />
                <Org
                    companyLogo={postman}
                    role="Student Leader"
                    company="Postman"
                />
                <Org
                    companyLogo={mlsa}
                    role="Alpha Leader"
                    company="Microsoft Learn Student Ambassdor"
                />
                <Org
                    companyLogo={biobytes}
                    role="Creative Team"
                    company="BioBytes"
                />
                <Org
                    companyLogo={byld}
                    role="Member"
                    company="Byld - IIIT Delhi"
                />
                <Org
                    companyLogo={binance}
                    role="Campus BUILDer"
                    company="Binance"
                />
            </div>
        </section>
    );
};

export default Organisations;
