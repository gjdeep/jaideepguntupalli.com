module.exports = {
    siteMetadata: {
        title: `Jaideep Guntupalli`,
        siteUrl: `http://localhost:8000/s`,
    },
    plugins: [
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
