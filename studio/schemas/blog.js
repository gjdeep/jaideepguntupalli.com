export default {
    title: "Blogs",
    name: "blog",
    type: "document",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
        },
        {
            title: "Subtitle",
            name: "subtitle",
            type: "string",
        },
        {
            title: "Cover",
            name: "cover",
            type: "image",
            options: {
                hotspot: true, // <-- Defaults to false
            },
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Alternative text",
                    description: `Some of your visitors cannot see images, 
                      be they blind, color-blind, low-sighted; 
                      alternative text is of great help for those 
                      people that can rely on it to have a good idea of 
                      what\'s on your page.`,
                    options: {
                        isHighlighted: true,
                    },
                },
                {
                    name: "caption",
                    type: "string",
                    title: "Caption",
                    options: {
                        isHighlighted: true, // <-- make this field easily accessible
                    },
                },
                {
                    // Editing this field will be hidden behind an "Edit"-button
                    name: "attribution",
                    type: "string",
                    title: "Attribution",
                },
            ],
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [
                {
                    type: "block",
                },
                {
                    type: "image",
                    fields: [
                        {
                            name: "alt",
                            type: "string",
                            title: "Alternative text",
                            description: `Some of your visitors cannot see images, 
                              be they blind, color-blind, low-sighted; 
                              alternative text is of great help for those 
                              people that can rely on it to have a good idea of 
                              what\'s on your page.`,
                            options: {
                                isHighlighted: true,
                            },
                        },
                        {
                            name: "caption",
                            type: "string",
                            title: "Caption",
                            options: {
                                isHighlighted: true, // <-- make this field easily accessible
                            },
                        },
                        {
                            // Editing this field will be hidden behind an "Edit"-button
                            name: "attribution",
                            type: "string",
                            title: "Attribution",
                        },
                    ],
                },
            ],
        },
    ],
};
