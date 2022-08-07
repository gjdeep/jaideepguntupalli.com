export default {
    name: "aboutpoint",
    type: "document",
    title: "About Point",
    fields: [
        {
            name: "content",
            type: "array",
            title: "About Point Order",
            of: [
                {
                    name: "content",
                    type: "document",
                    title: "About Point Order",
                    fields: [
                        {
                            name: "title",
                            type: "string",
                            title: "Title",
                        },
                        {
                            name: "desc",
                            type: "string",
                            title: "Description",
                        },
                        {
                            name: "icon",
                            type: "image",
                            title: "Icon",
                        },
                        {
                            name: "imgAlt",
                            type: "string",
                            title: "Image Alt",
                        },
                    ],
                },
            ],
        },
    ],
};
