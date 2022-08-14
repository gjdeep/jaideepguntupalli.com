export default {
    title: "Author",
    name: "author",
    type: "document",
    fields: [
        {
            title: "First Name",
            name: "fName",
            type: "string",
        },
        {
            title: "Last Name",
            name: "lName",
            type: "string",
        },
        {
            title: "Subtitle",
            name: "subtitle",
            type: "string",
        },
        {
            title: "About",
            name: "about",
            type: "string",
        },
        {
            title: "Photo",
            name: "photo",
            type: "img",
        },
        {
            title: "Socials",
            name: "socials",
            type: "array",
            of: [{ type: "socialPlatform" }],
        },
        {
            title: "Email",
            name: "email",
            type: "string",
            validation: (Rule) =>
                Rule.regex(
                    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                    {
                        name: "email", // Error message is "Does not match email-pattern"
                        invert: false, // Boolean to allow any value that does NOT match pattern
                    }
                ),
        },
    ],
};
