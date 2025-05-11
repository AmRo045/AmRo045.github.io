import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { ArrowLeftIcon } from "@heroui/shared-icons";
import Image from "next/image";
import { Metadata } from "next";

import { PostsService } from "@/src/core/posts-service";
import { siteConfig } from "@/src/core/config";
import { BlogPost } from "@/src/core/types";

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const post = await PostsService.getBySlug(resolvedParams.slug);
    const imageFullUrl = siteConfig.homepage + post.image;

    return {
        title: post.title,
        description: post.metaDescription || post.title,
        openGraph: {
            title: post.title,
            description: post.metaDescription || post.title,
            url: `${siteConfig.homepage}/blog/${resolvedParams.slug}`,
            type: "article",
            images: [
                {
                    url: imageFullUrl,
                    width: 800,
                    height: 600,
                    alt: post.title
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.metaDescription || post.title,
            images: [imageFullUrl]
        }
    };
}

export default async function BlogPostPage({ params }: Props) {
    const resolvedParams = await params;
    const postData: BlogPost = await PostsService.getBySlug(resolvedParams.slug);

    const { title, image, date, contentHtml } = postData;

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
                    alt={title}
                    className="object-cover w-full h-[200px] rounded-xl border-2 border-default-50"
                    height={200}
                    src={image}
                    unoptimized={true}
                    width={200}
                />
                <h1 className="text-xl">{title}</h1>
                <div className="text-foreground-500">{date}</div>
                <div dangerouslySetInnerHTML={{ __html: contentHtml }} className="markdown text-foreground-500" />
            </article>
        </section>
    );
}
