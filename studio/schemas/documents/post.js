export default {
    title: "Post",
    name: "post",
    type: "document",
    fields: [
        {
            title: "Post Title",
            name: "title",
            type: "string",
        },
        {
            title: "Subtitle",
            name: "subtitle",
            type: "string",
        },
        {
            title: "Meta description",
            name: "metaDesc",
            type: "text",
            description: `Watch the length - Same as with headlines, Google will keep the first 150-160 characters of your meta description, and cut the rest. Ensure that the important aspects are included early on to maximize searcher interest.​
            Write good copy - While the meta description is not used for ranking, it’s still important to optimize it for search intent. The more relevant your description is, based on the respective query, the more likely a user will visit your page.
            Consider skipping meta description - It can be difficult to create good copy for particularly long-tailed keywords, or for pages that target a variety of keywords. In those cases, consider leaving the meta description out - Google will scrape your page and populate your snippet with a few relevant quotes either way.`,
        },
        {
            title: "Slug",
            name: "slug",
            type: "slug",
            options: {
                //Change to schema title to automatically populate
                source: "title",
                slugify: (input) =>
                    input
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "")
                        .slice(0, 200),
                validation: (Rule) => Rule.required(),
            },
        },
        {
            title: "Posted Date",
            name: "postedDate",
            type: "datetime",
            options: {
                dateFormat: "dddd MMMM YYYY",
                timeFormat: "h:mm a",
                timeStep: 15,
                calendarTodayLabel: "Today",
            },
        },
        {
            title: "Author",
            name: "author",
            type: "reference",
            to: [{ type: "author" }],
        },
        {
            title: "Cover Image",
            name: "coverImg",
            type: "img",
            description: `Image shown on hero section,  as part of preview as well as when sharing links`,
        },
        {
            title: "Content",
            name: "content",
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
        {
            title: "Tags",
            name: "tags",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "tag" }],
                },
            ],
        },
        {
            title: "Category",
            name: "category",
            type: "string",
            options: {
                list: [
                    { title: "Experiences", value: "experiences" },
                    { title: "Technologies", value: "technologies" },
                    { title: "Tools", value: "tools" },
                    { title: "Good Practices", value: "goodPractices" },
                    { title: "Tutorials", value: "tutorials" },
                    { title: "Product", value: "product" },
                    { title: "Reviews", value: "reviews" },
                ],
            },
        },
    ],
};
