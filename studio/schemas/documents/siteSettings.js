export default {
    name: "siteSettings",
    title: "Site Settings",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Site Title",
            type: "string",
        },
        {
            title: "Favicon Image",
            name: "favicon",
            type: "img",
            description: `Image shown as favicon`,
        },
        {
            name: "baseColor",
            title: "Base color",
            type: "color",
            options: {
                disableAlpha: true,
            },
        },
        {
            name: "bgColor",
            title: "Background color",
            type: "color",
            options: {
                disableAlpha: true,
            },
        },
        {
            name: "hoverColor",
            title: "Hover color",
            type: "color",
            options: {
                disableAlpha: true,
            },
        },
    ],
};
