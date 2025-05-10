import fs from "fs";
import path from "path";

import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export namespace PostsService {
    const postsDirectory = path.join(process.cwd(), "static/posts");

    export function getSlugs(): string[] {
        const fileNames = fs.readdirSync(postsDirectory);

        return fileNames.map((fileName) => fileName.replace(/\.md$/, ""));
    }

    export async function getBySlug(slug: string) {
        const fullPath = path.join(postsDirectory, `${slug}.md`);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const matterResult = matter(fileContents);
        const processedContent = await remark().use(html).process(matterResult.content);
        const contentHtml = processedContent.toString();

        return {
            id: slug,
            contentHtml,
            ...matterResult.data
        };
    }
}
