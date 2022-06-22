import * as React from "react";
import SectHeading from "./../../components/common/SectHeading";
import Input from "../../components/Home/Input";

const Contact = () => {
    return (
        <section id="contact" className="py-20 md:py-28">
            <SectHeading
                heading="Let’s Talk!"
                link={false}
                linktext="Contact Me"
            />
            <form className="flex flex-col items-start gap-12">
                <Input label="Name" />
                <Input label="Email" />
                <Input label="Message" />
                <input
                    type="submit"
                    value="Send it !"
                    className="px-12 py-5 font-medium text-xl bg-cus-orange text-white"
                />
            </form>
        </section>
    );
};

export default Contact;
