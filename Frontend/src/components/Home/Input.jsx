import * as React from "react";

const Input = ({ label }) => {
    return (
        <div className="flex flex-col gap-4 w-1/2">
            <label htmlFor={label} className="font-bold text-[2rem]">
                {label}
            </label>
            <input
                type="text"
                id={label}
                className="text-2xl border-b-2 border-cus-orange bg-transparent py-1 focus:outline-none focus:border-b-4"
            />
        </div>
    );
};

export default Input;
