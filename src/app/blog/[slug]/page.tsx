import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { ArrowLeftIcon } from "@heroui/shared-icons";
import Image from "next/image";

import { PostsService } from "@/src/core/posts-service";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return PostsService.getSlugs().map((slug) => {
        return {
            slug
        };
    });
}

export default async function BlogPostPage({ params }: Props) {
    const resolvedParams = await params;
    const postData: any = await PostsService.getBySlug(resolvedParams.slug);

    return (
        <section className="grid gap-4">
            <div className="flex gap-1 items-center">
                <Button as={Link} href="/blog" isIconOnly={true} radius="full" size="sm" variant="light">
                    <ArrowLeftIcon />
                </Button>

                <span className="text-md font-bold text-foreground-500">Blog</span>
            </div>
            <article className="grid gap-2">
                <Image
                    alt={postData.title}
                    className="object-cover w-full h-[200px] rounded-xl border-2 border-default-50"
                    height={200}
                    src={postData.image}
                    unoptimized={true}
                    width={200}
                />
                <h1 className="text-xl">{postData.title}</h1>
                <div className="text-foreground-500">{postData.date}</div>
                <div
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                    className="markdown text-foreground-500"
                />
            </article>
        </section>
    );
}
