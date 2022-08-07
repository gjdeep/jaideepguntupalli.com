export default {
    title: "Blogs",
    name: "blog",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "subtitle",
            title: "Subtitle",
            type: "string",
        },
        {
            name: "cover",
            title: "Cover",
            type: "img",
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
                    type: "img",
                },
            ],
        },
    ],
};
