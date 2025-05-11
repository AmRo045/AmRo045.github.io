import Image from "next/image";
import Link from "next/link";
import { Card, CardFooter } from "@heroui/card";

import { PostsService } from "@/src/core/posts-service";

const posts = PostsService.getAll();

export default function BlogPage() {
    return (
        <section className="grid space-y-4">
            {posts.map((post) => (
                <Card key={post.slug} as={Link} href={`/blog/${post.slug}`} isPressable={true} radius="md">
                    <Image
                        alt={post.title}
                        className="object-cover w-full max-h-[240px]"
                        height={200}
                        src={post.image}
                        unoptimized={true}
                        width={200}
                    />
                    <CardFooter className="grid gap-2">
                        <h2 className="text-medium">{post.title}</h2>
                        <div className="text-start text-foreground-500">{post.date}</div>
                    </CardFooter>
                </Card>
            ))}
        </section>
    );
}
