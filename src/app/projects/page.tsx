import { projects } from "@/src/core/data";
import { Card, CardFooter, CardHeader } from "@heroui/card";
import Image from "next/image";
import { Chip } from "@heroui/chip";

export default function ProjectsPage() {
    return (
        <section className="grid space-y-4">
            {projects.map((project) => (
                <Card isPressable={true} key={project.id} radius="md">
                    <CardHeader>{project.name}</CardHeader>
                    <Image
                        alt={project.name}
                        className="object-cover w-full max-h-[240px]"
                        unoptimized={true}
                        height={200}
                        src={project.gallery[project.featuredImageIndex]}
                        width={200}
                    />
                    <CardFooter className="grid gap-2">
                        <div className="text-start text-foreground-500">{project.description}</div>
                        {project.tags && (
                            <div className="flex flex-wrap gap-2 items-center justify-start">
                                {project.tags.map((tag) => (
                                    <Chip size="sm" variant="flat" key={tag}>
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
