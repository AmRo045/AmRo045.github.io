import fs from "fs";
import path from "path";

import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

import { BlogPost, BlogPostMetaData, PostSummary } from "@/src/core/types";

export namespace PostsService {
    const postsDirectory = path.join(process.cwd(), "static/posts");

    export function getSlugs(): string[] {
        const fileNames = fs.readdirSync(postsDirectory);

        return fileNames.map((fileName) => fileName.replace(/\.md$/, ""));
    }

    export async function getBySlug(slug: string): Promise<BlogPost> {
        const fullPath = path.join(postsDirectory, `${slug}.md`);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const matterResult = matter(fileContents);
        const processedContent = await remark().use(html).process(matterResult.content);
        const contentHtml = processedContent.toString();

        return {
            id: slug,
            contentHtml,
            ...(matterResult.data as BlogPostMetaData)
        };
    }

    export function getAll(): PostSummary[] {
        const slugs = getSlugs();

        const posts: PostSummary[] = slugs.map((slug) => {
            const fullPath = path.join(postsDirectory, `${slug}.md`);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data } = matter(fileContents);

            return {
                title: data.title || "Untitled",
                slug,
                image: data.image || "",
                date: data.date || "1970-01-01"
            };
        });

        return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
}
