import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="text-left flex flex-col items-start">
            <Link
                href="/projects"
                className={`duration-200 mb-6 hover:font-medium text-zinc-400 hover:text-zinc-100`}
            >
                <ArrowLeft className="w-6 h-6 " />
            </Link>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
                404
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
                Not Found - Could not find requested resource
            </p>
        </div>
    );
}
