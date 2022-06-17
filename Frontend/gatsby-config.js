module.exports = {
    siteMetadata: {
        title: ``,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        "gatsby-plugin-postcss",
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                icon: "src/images/icon.png",
            },
        },
    ],
};
