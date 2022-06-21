import * as React from "react";

const Org = ({ companyLogo, role, company }) => {
    return (
        <section className="flex items-center gap-4">
            <img src={companyLogo} alt={company} />
            <div>
                <h3 className="font-bold text-2xl">{role}</h3>
                <p className="font-work text-xl">{company}</p>
            </div>
        </section>
    );
};

export default Org;
