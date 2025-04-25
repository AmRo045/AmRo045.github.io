"use client";

import { BlogIcon, CodeIcon, HomeIcon, Logo } from "@/src/components/icons";
import { Tab, Tabs } from "@heroui/tabs";
import { Link } from "@heroui/link";
import { ThemeSwitch } from "@/src/components/theme-switch";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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
        <div className="fixed w-full z-10 top-1">
            <div className="bg-content2 shadow-md rounded-xl p-1 flex justify-center items-center gap-6 w-fit mx-auto mt-2 ">
                <Link href="/">
                    <Logo />
                </Link>

                <Tabs
                    classNames={{
                        tabList: "gap-0.5 uppercase"
                    }}
                    selectedKey={activeTab}
                    aria-label="Navbar items"
                    color="primary"
                    size="sm"
                    variant="light"
                >
                    <Tab
                        as={Link}
                        href={HOME_PATH}
                        key={TabSection.Home}
                        className="px-2"
                        title={
                            <div className="flex space-x-1 items-center">
                                <HomeIcon width={20} height={20} />
                                <span className="text-xs">Home</span>
                            </div>
                        }
                    />
                    <Tab
                        as={Link}
                        href={PROJECTS_PATH}
                        key={TabSection.Projects}
                        className="px-2"
                        title={
                            <div className="flex space-x-1 items-center">
                                <CodeIcon width={20} height={20} />
                                <span>Projects</span>
                            </div>
                        }
                    />
                    <Tab
                        as={Link}
                        href={BLOG_PATH}
                        key={TabSection.Blog}
                        className="px-2"
                        title={
                            <div className="flex space-x-1 items-center">
                                <BlogIcon width={20} height={20} />
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
