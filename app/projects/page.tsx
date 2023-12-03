import { Card } from "app/components/card";
import { allProjects } from "contentlayer/generated";
import { Metadata } from "next";
import { Article } from "./article";

export const metadata: Metadata = {
    title: "Projects",
    description: "A collection of projects I've worked on, both academically and personally.",
};

export default function Page() {
    const sorted = allProjects
        .filter((p) => p.published)
        .sort(
            (a, b) =>
                new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
                new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
        );

    return (
        <section className="min-h-[80vh] ">
            <h1 className="font-bold text-2xl mb-8 tracking-tighter">
                projects
            </h1>
            <p className="prose prose-neutral dark:prose-invert mb-10">
                a collection of projects I've worked on, both academically and
                personally.
            </p>

            <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-2 ">
                <div className="grid grid-cols-1 gap-4">
                    {sorted
                        .filter((_, i) => i % 2 === 0)
                        .map((project) => (
                            <Card key={project.slug}>
                                <Article project={project} max={5} />
                            </Card>
                        ))}
                </div>
                <div className="grid grid-cols-1 gap-4">
                    {sorted
                        .filter((_, i) => i % 2 === 1)
                        .map((project) => (
                            <Card key={project.slug}>
                                <Article project={project} max={7} />
                            </Card>
                        ))}
                </div>
            </div>
        </section>
    );
}
