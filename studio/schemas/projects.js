export default {
    name: "projects",
    type: "document",
    title: "Projects",
    fields: [
        {
            name: "content",
            type: "array",
            title: "Projects Order",
            of: [
                {
                    name: "project",
                    type: "document",
                    title: "Project",
                    fields: [
                        {
                            name: "title",
                            type: "string",
                            title: "Project Title",
                        },
                        {
                            name: "subtitle",
                            type: "string",
                            title: "Project Subtitle",
                        },
                        {
                            name: "mainImage",
                            type: "image",
                            title: "Main Image",
                        },
                        {
                            name: "desc",
                            type: "text",
                            title: "About the project",
                        },
                        {
                            name: "content",
                            type: "array",
                            title: "Project Shots",
                            of: [
                                {
                                    name: "shot",
                                    type: "image",
                                    title: "Project Shot",
                                },
                                {
                                    name: "altText",
                                    type: "string",
                                    title: "Alt Text",
                                },
                                {
                                    name: "caption",
                                    type: "string",
                                    title: "Caption",
                                },
                            ],
                        },
                        {
                            title: "Technologies used",
                            name: "tech",
                            type: "reference",
                            to: [{ type: "skill" }],
                        },
                    ],
                },
            ],
        },
    ],
};
