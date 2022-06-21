import * as React from "react";

const WorkExp = ({ date, role, company }) => {
    return (
        <div className="flex items-start gap-8">
            <h4 className="font-bold text-2x whitespace-nowrap opacity-50">
                {date}
            </h4>
            <div>
                <h4 className="font-bold text-2xl">{role}</h4>
                <p className="text-xl leading-normal">{company}</p>
            </div>
        </div>
    );
};

export default WorkExp;
