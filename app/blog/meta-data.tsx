"use client";

import { increment } from "app/actions";
import { useEffect } from "react";

export default function MetaData({
    slug,
    // allViews,
    trackView,
    publishedAt,
}: {
    slug: string;
    // allViews: {
    //     slug: string;
    //     count: number;
    // }[];
    trackView?: boolean;
    publishedAt: string;
}) {
    // const viewsForSlug =
    //     allViews && allViews.find((view) => view.slug === slug);
    // const number = new Number(viewsForSlug?.count || 0);

    useEffect(() => {
        if (trackView) {
            increment(slug);
        }
    }, []);

    return (
        <p className="text-neutral-500 dark:text-neutral-400 flex items-center gap-1 text-sm">
            {publishedAt}
            {/* {publishedAt + " • "} */}

            {/* {`${number.toLocaleString()} views`} */}
        </p>
    );
}
