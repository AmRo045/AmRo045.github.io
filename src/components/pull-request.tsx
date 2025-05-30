import Link from "next/link";

const convertBacktickToCodeTag = (input: string): string => input.replace(/`(.*)`/, "<code>$1</code>");

interface Props {
    title: string;
    url: string;
    creationDate: string;
}

export default function PullRequest({ title, url, creationDate }: Props) {
    return (
        <div>
            <span className="text-foreground-500 me-2">[{new Date(creationDate).toDateString()}]</span>

            <Link
                className="text-sm hover:text-primary"
                dangerouslySetInnerHTML={{
                    __html: convertBacktickToCodeTag(title)
                }}
                href={url}
                rel="noopener noreferrer"
                target="_blank"
            />
        </div>
    );
}
