import { allBlogs } from "contentlayer/generated";

export default async function sitemap() {
    const blogs = allBlogs.map((post) => ({
        url: `https://gjdeep.dev/blog/${post.slug}`,
        lastModified: post.publishedAt,
    }));

    const routes = ["", "/blog", "/guestbook", "/uses"].map((route) => ({
        url: `https://gjdeep.dev${route}`,
        lastModified: new Date().toISOString().split("T")[0],
    }));

    return [...routes, ...blogs];
}
