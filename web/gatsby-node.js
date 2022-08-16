const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(`
        query {
            allSanityPost {
                nodes {
                    _id
                    title
                    slug {
                        current
                    }
                }
            }
            allSanityCategory {
                nodes {
                    _id
                    categoryName
                }
            }
        }
    `);

    //create blog category page
    result.data.allSanityCategory.nodes.forEach((category) => {
        createPage({
            path: `/blog/${category.categoryName}`,
            component: path.resolve("./src/templates/blog/BlogCategory.jsx"),
            context: {
                categoryId: category._id,
            },
        });
    });

    //create blog pages
    result.data.allSanityPost.nodes.forEach((post) => {
        createPage({
            path: `/blog/${post.slug.current}`,
            component: path.resolve("./src/templates/blog/BlogPage.jsx"),
            context: {
                postId: post._id,
            },
        });
    });
};
