import { projects } from "@/src/core/data";
import { Button } from "@heroui/button";
import { ArrowLeftIcon } from "@heroui/shared-icons";
import { notFound } from "next/navigation";
import { Link } from "@heroui/link";
import { Chip } from "@heroui/chip";
import Image from "next/image";
import { Metadata } from "next";

interface Props {
    params: Promise<{ project: string }>;
}

export async function generateStaticParams() {
    return projects.map((p) => {
        return {
            project: p.id
        };
    });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { project } = await params;
    const data = projects.find((p) => p.id === project);

    if (!data) {
        return {};
    }

    return {
        title: `${data.name} - Project Details`,
        description: data.description,
        openGraph: {
            title: `${data.name} - Project Details`,
            description: data.description,
            images: [
                {
                    url: data.images[data.featuredImageIndex],
                    width: 800,
                    height: 600,
                    alt: data.name
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title: `${data.name} - Project Details`,
            description: data.description,
            images: [data.images[data.featuredImageIndex]]
        }
    };
}

export default async function ProjectDetailsPage({ params }: Props) {
    const { project } = await params;
    const data = projects.find((p) => p.id === project);

    if (!data) {
        return notFound();
    }

    return (
        <section className="grid gap-4">
            <div className="flex gap-1 items-center">
                <Button as={Link} href="/projects" isIconOnly={true} variant="light" size="sm" radius="full">
                    <ArrowLeftIcon />
                </Button>

                <h2 className="text-md font-bold text-foreground-500">{data.name}</h2>
            </div>

            <Image
                alt={data.name}
                className="object-cover w-full max-h-[240px] rounded-xl border-2 border-default-50"
                unoptimized={true}
                height={200}
                src={data.images[data.featuredImageIndex]}
                width={200}
            />

            <p className="text-foreground-500">{data.description}</p>

            {data.links && (
                <div className="flex flex-wrap gap-2 items-center justify-start">
                    {data.links.map((link) => (
                        <Chip size="sm" variant="shadow" color="primary" as={Link} href={link.url} key={link.url}>
                            {link.title}
                        </Chip>
                    ))}
                </div>
            )}

            {data.tags && (
                <div className="flex flex-wrap gap-2 items-center justify-start">
                    {data.tags.map((tag) => (
                        <Chip size="sm" variant="flat" key={tag}>
                            {tag}
                        </Chip>
                    ))}
                </div>
            )}

            {data.videos && (
                <div className="flex flex-wrap gap-2 items-center justify-start">
                    {data.videos.map((video) => (
                        <video
                            key={video}
                            src={video}
                            poster={data.images[data.featuredImageIndex]}
                            controls={true}
                            className="object-cover w-full max-h-[240px] rounded-xl border-2 border-default-100"
                        />
                    ))}
                </div>
            )}

            {data.images.length > 1 && (
                <div className="flex flex-wrap gap-2 items-center justify-start">
                    {data.images
                        .filter((_, index) => index !== data.featuredImageIndex)
                        .map((image, index) => (
                            <Image
                                key={index}
                                alt={`${data.name} image no${index}`}
                                className="object-cover w-full max-h-[240px] rounded-xl border-2 border-default-100"
                                unoptimized={true}
                                height={200}
                                src={image}
                                width={200}
                            />
                        ))}
                </div>
            )}
        </section>
    );
}
