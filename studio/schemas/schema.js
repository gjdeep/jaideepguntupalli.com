// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import experiences from "./experiences";
import organisations from "./organisations";
import projects from "./projects";
import skills from "./skills";
import skill from "./skill";
import hero from "./home/hero";
import aboutpoint from "./home/aboutpoint";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    name: "default",
    types: schemaTypes.concat([
        hero,
        aboutpoint,
        experiences,
        organisations,
        projects,
        skills,
        skill,
    ]),
});
