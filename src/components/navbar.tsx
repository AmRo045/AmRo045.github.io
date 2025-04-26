"use client";

import { Tab, Tabs } from "@heroui/tabs";
import { Link } from "@heroui/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { ThemeSwitch } from "@/src/components/theme-switch";
import { BlogIcon, CodeIcon, HomeIcon, Logo } from "@/src/components/icons";

const HOME_PATH = "/";
const PROJECTS_PATH = "/projects";
const BLOG_PATH = "/blog";

enum TabSection {
    Home = "Home",
    Projects = "Projects",
    Blog = "Blog"
}

export const Navbar = () => {
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState<TabSection>(TabSection.Home);

    useEffect(() => {
        if (pathname.startsWith(PROJECTS_PATH)) {
            setActiveTab(TabSection.Projects);
        } else if (pathname.startsWith(BLOG_PATH)) {
            setActiveTab(TabSection.Blog);
        } else {
            setActiveTab(TabSection.Home);
        }
    }, [pathname]);

    return (
        <div className="fixed w-full z-20 top-0 backdrop-blur bg-opacity-0">
            <div className="bg-content2 bg-opacity-20 backdrop-blur shadow-md rounded-xl p-1 flex justify-center items-center gap-4 w-fit mx-auto mt-2">
                <div className="flex items-center ms-2">
                    <Link href="/">
                        <Logo height={28} width={28} />
                    </Link>
                </div>

                <Tabs
                    aria-label="Navbar items"
                    classNames={{
                        tabList: "gap-0.5 uppercase"
                    }}
                    color="primary"
                    selectedKey={activeTab}
                    size="sm"
                    variant="underlined"
                >
                    <Tab
                        key={TabSection.Home}
                        as={Link}
                        className="px-2"
                        href={HOME_PATH}
                        title={
                            <div className="flex space-x-1 items-center">
                                <HomeIcon height={20} width={20} />
                                <span className="text-xs">Home</span>
                            </div>
                        }
                    />
                    <Tab
                        key={TabSection.Projects}
                        as={Link}
                        className="px-2"
                        href={PROJECTS_PATH}
                        title={
                            <div className="flex space-x-1 items-center">
                                <CodeIcon height={20} width={20} />
                                <span>Projects</span>
                            </div>
                        }
                    />
                    <Tab
                        key={TabSection.Blog}
                        as={Link}
                        className="px-2"
                        href={BLOG_PATH}
                        title={
                            <div className="flex space-x-1 items-center">
                                <BlogIcon height={20} width={20} />
                                <span>Blog</span>
                            </div>
                        }
                    />
                </Tabs>

                <div className="flex items-center me-2">
                    <ThemeSwitch />
                </div>
            </div>
        </div>
    );
};
