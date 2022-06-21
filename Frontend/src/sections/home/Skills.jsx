import * as React from "react";
import SectHeading from "../../components/common/SectHeading";
import firebase from "../../images/icons/tech/firebase.svg";
import flutter from "../../images/icons/tech/flutter.svg";
import gatsby from "../../images/icons/tech/gatsby.svg";
import gcp from "../../images/icons/tech/gcp.svg";
import graphsql from "../../images/icons/tech/graphql.svg";
import heroku from "../../images/icons/tech/heroku.svg";
import javascript from "../../images/icons/tech/javascript.svg";
import java from "../../images/icons/tech/java.svg";
import typescript from "../../images/icons/tech/typescript.svg";
import react from "../../images/icons/tech/react.svg";
import next from "../../images/icons/tech/next.svg";
import mysql from "../../images/icons/tech/mysql.svg";
import node from "../../images/icons/tech/node.svg";
import mongo from "../../images/icons/tech/mongo.svg";
import postgres from "../../images/icons/tech/postgres.svg";
import postman from "../../images/icons/tech/postman.svg";
import tailwindcss from "../../images/icons/tech/tailwindcss.svg";
import sanity from "../../images/icons/tech/sanity.svg";
import WorkExp from "../../components/Home/WorkExp";

const Skills = () => {
    return (
        <section className="py-28">
            <SectHeading
                heading="Work Experience & Skills"
                link={true}
                linktext="View more details"
                addr="/skills"
            />
            <section className="flex justify-between gap-20">
                <div className="grid grid-cols-6 gap-4">
                    <img src={javascript} alt="javascript" />
                    <img src={typescript} alt="typescript" />
                    <img src={next} alt="next" />
                    <img src={react} alt="react" />
                    <img src={gatsby} alt="gatsby" />
                    <img src={tailwindcss} alt="tailwindcss" />
                    <img src={gcp} alt="gcp" />
                    <img src={firebase} alt="firebase" />
                    <img src={mysql} alt="mysql" />
                    <img src={postgres} alt="postgres" />
                    <img src={mongo} alt="mongo" />
                    <img src={sanity} alt="sanity" />
                    <img src={graphsql} alt="graphql" />
                    <img src={node} alt="node" />
                    <img src={postman} alt="postman" />
                    <img src={java} alt="java" />
                    <img src={heroku} alt="heroku" />
                    <img src={flutter} alt="flutter" />
                </div>
                <div className="w-2/5 flex flex-col justify-around">
                    <WorkExp
                        date="May 2022"
                        role="Frontend Developer Intern"
                        company="Tweek Labs"
                    />
                    <WorkExp
                        date="Apr 2022"
                        role="Web Developer Intern"
                        company="Pixotronics"
                    />
                    <WorkExp
                        date="Mar 2022"
                        role="Software Engineer Intern"
                        company="Auriga Innovative Labs"
                    />
                </div>
            </section>
        </section>
    );
};

export default Skills;
