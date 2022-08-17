require("dotenv").config();

module.exports = {
    siteMetadata: {
        title: `Jaideep Guntupalli`,
        siteUrl: `http://localhost:8000/s`,
    },
    plugins: [
        "gatsby-plugin-postcss",
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Jaideep Guntupalli`,
                icon: "src/images/favicon.png",
            },
        },
        {
            resolve: `gatsby-source-sanity`,
            options: {
                projectId: `yr7gi15i`,
                dataset: `blog`,
                token: process.env.SANITY_TOKEN,
            },
        },
    ],
};
