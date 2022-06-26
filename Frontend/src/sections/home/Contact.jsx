import * as React from "react";
// import { useIntersection } from "react-use";
// import gsap from "gsap";
// import { useRef } from "react";
import SectHeading from "./../../components/common/SectHeading";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
    // const sectionRef = useRef(null);
    // const intersection = useIntersection(sectionRef, {
    //     root: null,
    //     rootMargin: "0px",
    //     threshold: 0.4,
    // });

    // const fadeIn = (element) => {
    //     gsap.to(element, {
    //         duration: 2,
    //         opacity: 1,
    //         y: 0,
    //         ease: "power4.out",
    //         stagger: {
    //             amount: 0.3,
    //         },
    //     });
    // };

    // const fadeOut = (element) => {
    //     gsap.to(element, {
    //         duration: 2,
    //         opacity: 0,
    //         y: 40,
    //         ease: "power4.out",
    //     });
    // };

    // intersection && intersection.intersectionRatio < 0.4
    //     ? fadeOut(".fadeInContact")
    //     : fadeIn(".fadeInContact");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errormsg, setErrorMsg] = useState("");
    const [error, setError] = useState(false);

    //get data from form to state
    const handleChange = (e) => {
        let type = e.target.name;
        if (type === "name") {
            setName(e.target.value);
        } else if (type === "email") {
            setEmail(e.target.value);
        } else if (type === "msg") {
            setMessage(e.target.value);
        }
    };

    const regex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "" || email === "" || message === "") {
            setErrorMsg("Please fill all the fields");
            setError(true);
        } else if (!regex.test(email)) {
            setErrorMsg("Please enter a valid email");
            setError(true);
        } else {
            //post data to server using axios
            const endpoint =
                "https://getform.io/f/52b13b2f-8d80-41c6-8f1a-bd45f6c7e2e5";
            const data = {
                name: name,
                email: email,
                message: message,
            };
            axios
                .post(endpoint, data)
                .then((res) => {
                    setName("");
                    setEmail("");
                    setMessage("");
                    setError(false);
                    setErrorMsg("Message sent successfully");
                })
                .catch((err) => {
                    console.log(err);
                    setError(true);
                    setErrorMsg("Something went wrong. Please try again later");
                });
        }
        console.log(name);
        console.log(email);
        console.log(message);
    };

    return (
        <section id="contact" className="py-20 md:py-28 fadeInContact">
            <SectHeading
                heading="Let’s Talk!"
                link={false}
                linktext="Contact Me"
            />
            <form
                onSubmit={handleSubmit}
                className="flex flex-col items-start gap-12"
            >
                <div className="flex flex-col gap-4 w-full md:w-1/2 fadeInContact">
                    <label htmlFor="name" className="font-bold text-[2rem]">
                        Name
                    </label>
                    <input
                        onChange={handleChange}
                        value={name}
                        type="text"
                        id="name"
                        name="name"
                        className="text-2xl border-b-[1.25px] border-cus-orange bg-transparent py-1 focus:outline-none focus:border-b-2"
                    />
                </div>
                <div className="flex flex-col gap-4 w-full md:w-1/2 fadeInContact">
                    <label htmlFor="email" className="font-bold text-[2rem]">
                        Email
                    </label>
                    <input
                        onChange={handleChange}
                        value={email}
                        type="text"
                        id="email"
                        name="email"
                        className="text-2xl border-b-[1.25px] border-cus-orange bg-transparent py-1 focus:outline-none focus:border-b-2"
                    />
                </div>
                <div className="flex flex-col gap-4 w-full md:w-1/2 fadeInContact">
                    <label htmlFor="msg" className="font-bold text-[2rem]">
                        Message
                    </label>
                    <input
                        onChange={handleChange}
                        value={message}
                        type="text"
                        id="msg"
                        name="msg"
                        className="text-2xl border-b-[1.25px] border-cus-orange bg-transparent py-1 focus:outline-none focus:border-b-2"
                    />
                </div>
                {error && (
                    <div className=" text-red-500 font-medium text-xl md:text-2xl">
                        ! {errormsg}
                    </div>
                )}
                {!error && (
                    <div className=" text-green-500 font-medium text-xl md:text-2xl">
                        {errormsg}
                    </div>
                )}
                <input
                    type="submit"
                    value="Send it !"
                    className="px-12 py-5 font-medium text-xl bg-cus-orange text-white cursor-pointer hover:bg-cus-orange-dark transition-colors duration-200 fadeInContact"
                />
            </form>
        </section>
    );
};

export default Contact;
