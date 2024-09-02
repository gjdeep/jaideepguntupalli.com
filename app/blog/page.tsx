import { allBlogs } from "contentlayer/generated";
// import { getViewsCount } from "lib/metrics";
import type { Metadata } from "next";
import Link from "next/link";
import MetaData from "./meta-data";

export const metadata: Metadata = {
    title: "Blog",
    description: "Read my thoughts on software development, design, and more.",
};

export default async function BlogPage() {
    // const allViews = await getViewsCount();

    return (
        <section>
            <h1 className="font-bold text-2xl mb-8 tracking-tighter">
                read my blog
            </h1>
            {allBlogs
                .sort((a, b) => {
                    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                        return -1;
                    }
                    return 1;
                })
                .map((post) => (
                    <Link
                        key={post.slug}
                        className="flex flex-col space-y-1 mb-4 border-b border-neutral-200 dark:border-neutral-700 pb-3"
                        href={`/blog/${post.slug}`}
                    >
                        <div className="w-full flex flex-col gap-[0.125rem]">
                            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                                {post.title}
                            </p>

                            <MetaData
                                publishedAt={post.publishedAt}
                                // allViews={allViews}
                                slug={post.slug}
                                trackView={false}
                            />
                        </div>
                    </Link>
                ))}
        </section>
    );
}
