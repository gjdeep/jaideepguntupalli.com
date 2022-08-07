export default {
    name: "organisations",
    type: "document",
    title: "Organisations",
    fields: [
        {
            name: "content",
            type: "array",
            title: "Organisations Order",
            of: [
                {
                    name: "organisation",
                    type: "document",
                    title: "Organisation",
                    fields: [
                        {
                            name: "role",
                            type: "string",
                            title: "Role",
                        },
                        {
                            name: "org",
                            type: "string",
                            title: "Organisation",
                        },
                        {
                            name: "link",
                            type: "string",
                            title: "Org Website Link",
                        },
                        {
                            name: "logo",
                            type: "image",
                            title: "Org Logo",
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
