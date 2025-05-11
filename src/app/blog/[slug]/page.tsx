import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { ArrowLeftIcon } from "@heroui/shared-icons";
import Image from "next/image";
import Head from "next/head";

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

export default async function BlogPostPage({ params }: Props) {
    const resolvedParams = await params;
    const postData: BlogPost = await PostsService.getBySlug(resolvedParams.slug);

    const { title, metaDescription, image, date, contentHtml } = postData;

    const pageUrl = `${siteConfig.homepage}/blog/${resolvedParams.slug}`;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta content={metaDescription || title} name="description" />

                <meta content={title} property="og:title" />
                <meta content={metaDescription || title} property="og:description" />
                <meta content={image} property="og:image" />
                <meta content="article" property="og:type" />
                <meta content={pageUrl} property="og:url" />

                <meta content="summary_large_image" name="twitter:card" />
                <meta content={title} name="twitter:title" />
                <meta content={metaDescription || title} name="twitter:description" />
                <meta content={image} name="twitter:image" />
            </Head>

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
        </>
    );
}
