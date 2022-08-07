export default {
    name: "skills",
    type: "document",
    title: "Skills Order",
    fields: [
        {
            name: "content",
            type: "array",
            title: "Skills Order",
            of: [
                {
                    title: "Skills",
                    name: "skil",
                    type: "reference",
                    to: [{ type: "skill" }],
                },
            ],
        },
    ],
};
