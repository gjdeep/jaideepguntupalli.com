export default {
    name: "experiences",
    type: "document",
    title: "Experiences Order",
    fields: [
        {
            name: "content",
            type: "array",
            title: "Experiences Order",
            of: [
                {
                    name: "experience",
                    type: "document",
                    title: "Experience",
                    fields: [
                        {
                            name: "role",
                            type: "string",
                            title: "Role",
                        },
                        {
                            name: "company",
                            type: "string",
                            title: "Company",
                        },
                        {
                            name: "link",
                            type: "string",
                            title: "Company Website Link",
                        },
                        {
                            name: "logo",
                            type: "image",
                            title: "Company Logo",
                        },
                        {
                            name: "date",
                            type: "string",
                            title: "Date",
                            description:
                                "Format: Feb `21 - June `21 || Feb `21 - Present",
                        },
                        {
                            name: "accomplishments",
                            type: "text",
                            title: "Accomplishments",
                        },
                    ],
                },
            ],
        },
    ],
};
