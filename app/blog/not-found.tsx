import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="text-left flex flex-col items-start">
            <Link
                href="/blog"
                className={`duration-200 mb-6 hover:font-medium text-zinc-400 hover:text-zinc-100`}
            >
                <ArrowLeft className="w-6 h-6 " />
            </Link>
            <h2 className="font-bold text-2xl tracking-tighter max-w-[650px]">
                404
            </h2>
            <p className="mt-6 text-neutral-600 dark:text-neutral-400">
                Not Found - Could not find requested resource
            </p>
        </div>
    );
}
