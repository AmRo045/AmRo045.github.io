import { Card, CardFooter, CardHeader } from "@heroui/card";
import Image from "next/image";
import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";
import { Metadata } from "next";

import { projects } from "@/src/core/data";
import { siteConfig } from "@/src/core/config";

export const metadata: Metadata = {
    title: "Projects",
    description: `Explore side projects and experiments by ${siteConfig.name}`,
    openGraph: {
        title: "Projects",
        description: `Explore side projects and experiments by ${siteConfig.name}`,
        url: `${siteConfig.homepage}/projects`,
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Projects",
        description: `Explore side projects and experiments by ${siteConfig.name}`
    }
};

export default function ProjectsPage() {
    return (
        <section className="grid space-y-4">
            {projects.map((project) => (
                <Card key={project.id} as={Link} href={`/projects/${project.id}`} isPressable={true} radius="md">
                    <CardHeader>{project.name}</CardHeader>
                    <Image
                        alt={project.name}
                        className="object-cover w-full max-h-[240px]"
                        height={200}
                        src={project.images[project.featuredImageIndex]}
                        unoptimized={true}
                        width={200}
                    />
                    <CardFooter className="grid gap-2">
                        <div className="text-start text-foreground-500">{project.description}</div>
                        {project.tags && (
                            <div className="flex flex-wrap gap-2 items-center justify-start">
                                {project.tags.map((tag) => (
                                    <Chip key={tag} size="sm" variant="flat">
                                        {tag}
                                    </Chip>
                                ))}
                            </div>
                        )}
                    </CardFooter>
                </Card>
            ))}
        </section>
    );
}
