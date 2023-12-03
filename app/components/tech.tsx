export default function Tech({
    techStr,
    max = -1,
}: {
    techStr: string;
    max?: number;
}) {
    let tech: string[];
    if (max > 0) {
        tech = techStr
            .split(",")
            .map((t) => t.trim())
            .slice(0, max);
    } else {
        tech = techStr.split(",").map((t) => t.trim());
    }
    return (
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {tech.map((t) => (
                <li className="mr-1.5 mt-2" key={t}>
                    <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-sm font-medium leading-5 text-purple-300 ">
                        {t}
                    </div>
                </li>
            ))}
        </ul>
    );
}
