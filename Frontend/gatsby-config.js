module.exports = {
    siteMetadata: {
        title: `Jaideep Guntupalli`,
        siteUrl: `http://localhost:8000/s`,
    },
    plugins: [
        // {
        //     resolve: `gatsby-source-sanity`,
        //     options: {
        //         projectId: `1y9wgybg`,
        //         dataset: `production`,
        //         // a token with read permissions is required
        //         // if you have a private dataset
        //         token: process.env.SANITY_TOKEN,

        //         // If the Sanity GraphQL API was deployed using `--tag <name>`,
        //         // use `graphqlTag` to specify the tag name. Defaults to `default`.
        //         graphqlTag: "default",
        //     },
        // },
        "gatsby-plugin-postcss",
        "gatsby-plugin-react-helmet",
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Jaideep Guntupalli`,
                icon: "src/images/favicon.png",
            },
        },
    ],
};
