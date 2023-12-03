"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import Tech from "app/components/tech";

type Props = {
    project: {
        url?: string;
        title: string;
        description: string;
        repository?: string;
        tech?: string;
    };
};
export const Header: React.FC<Props> = ({ project }) => {
    const ref = useRef<HTMLElement>(null);
    const [isIntersecting, setIntersecting] = useState(true);

    const links: { label: string; href: string }[] = [];
    if (project.repository) {
        links.push({
            label: "GitHub",
            href: `https://github.com/${project.repository}`,
        });
    }
    if (project.url) {
        links.push({
            label: "Website",
            href: project.url,
        });
    }
    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting)
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <header ref={ref} className="relative isolate overflow-hidden ">
            <div className="container mx-auto relative isolate overflow-hidden pb-12 sm:pb-16">
                <div className="text-left flex flex-col items-start">
                    <Link
                        href="/projects"
                        className={`duration-200 mb-6 hover:font-medium ${
                            isIntersecting
                                ? " text-zinc-400 hover:text-zinc-100"
                                : "text-zinc-600 hover:text-zinc-900"
                        } `}
                    >
                        <ArrowLeft className="w-6 h-6 " />
                    </Link>
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
                            {project.title}
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-zinc-300">
                            {project.description}
                        </p>
                        {project.tech && (
                            <div className="mt-6">
                                <Tech techStr={project.tech} />
                            </div>
                        )}
                    </div>

                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                            {links.map((link) => (
                                <Link
                                    target="_blank"
                                    key={link.label}
                                    href={link.href}
                                >
                                    {link.label}{" "}
                                    <span aria-hidden="true">&rarr;</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
