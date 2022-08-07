export default {
    name: "img",
    title: "Image",
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
};
