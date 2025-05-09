import { Project } from "@/src/core/types";

export const projects: Project[] = [
    {
        id: "outline-vpn-admin-panel",
        name: "Outline VPN Admin Panel",
        description:
            "Outline Admin is a web interface for the Outline Manager API, " +
            "providing a simple and user-friendly UI for managing VPN servers.",
        links: [
            {
                title: "GitHub Page",
                url: "https://github.com/AmRo045/OutlineAdmin"
            },
            {
                title: "Outline VPN",
                url: "https://github.com/Jigsaw-Code/outline-apps"
            }
        ],
        images: [
            "/images/outline-admin/1-login.png",
            "/images/outline-admin/2-servers.png",
            "/images/outline-admin/3-new-server.png",
            "/images/outline-admin/4-server-settings.png",
            "/images/outline-admin/5-server-access-keys.png",
            "/images/outline-admin/6-dynamic-access-keys.png",
            "/images/outline-admin/7-dynamic-access-key-edit.png",
            "/images/outline-admin/8-dynamic-access-key-details.png",
            "/images/outline-admin/9-dynamic-access-key-access-keys.png"
        ],
        featuredImageIndex: 6,
        tags: ["admin-panel", "outline-vpn", "shadowsocks", "server-manager"]
    },
    {
        id: "outline-vpn-admin-panel-laravel",
        name: "Outline VPN Admin Panel (Laravel)",
        description:
            "[Laravel] Outline Admin is a web interface for the Outline Manager API, " +
            "providing a simple and user-friendly UI for managing VPN servers.",
        links: [
            {
                title: "GitHub Page",
                url: "https://github.com/AmRo045/OutlineAdminLaravel"
            },
            {
                title: "Outline VPN",
                url: "https://github.com/Jigsaw-Code/outline-apps"
            }
        ],
        images: [
            "/images/outline-admin-laravel/login.png",
            "/images/outline-admin-laravel/servers.png",
            "/images/outline-admin-laravel/new-server.png",
            "/images/outline-admin-laravel/server-settings.png",
            "/images/outline-admin-laravel/access-keys.png",
            "/images/outline-admin-laravel/qr-code.png",
            "/images/outline-admin-laravel/new-access-key.png"
        ],
        featuredImageIndex: 4,
        tags: ["admin-panel", "outline-vpn", "shadowsocks", "server-manager"]
    },
    {
        id: "online-compiler",
        name: "Online Compiler",
        description: "An online environment for writing, compiling, and executing your code.",
        links: [
            {
                title: "Related Article (Farsi)",
                url: "https://virgool.io/@sourcesara.info/%D9%85%D8%AD%DB%8C%D8%B7-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87-%D9%86%D9%88%DB%8C%D8%B3%DB%8C-%D8%A2%D9%86%D9%84%D8%A7%DB%8C%D9%86-%D8%A8%D8%B1%D8%A7%DB%8C-%D8%B2%D8%A8%D8%A7%D9%86-%D9%87%D8%A7%DB%8C-%D9%85%D8%AE%D8%AA%D9%84%D9%81-elyhzysgy3dt"
            }
        ],
        images: [
            "/images/online-compiler/1.png",
            "/images/online-compiler/2.png",
            "/images/online-compiler/3.png",
            "/images/online-compiler/4.png",
            "/images/online-compiler/5.png",
            "/images/online-compiler/6.png",
            "/images/online-compiler/7.png",
            "/images/online-compiler/8.png"
        ],
        featuredImageIndex: 0,
        tags: ["compiler", "code-editor", "code-runner"]
    },
    {
        id: "kherad-rayhan-com",
        name: "Kherad-Rayhan.Com",
        description: "School Enrollment Website (My first web project). The newer version never used.",
        links: [
            {
                title: "Plain PHP Version",
                url: "https://kherad-rayhan.Com"
            }
        ],
        images: ["/images/kherad-rayhan-com/0.png"],
        videos: ["https://www.dropbox.com/s/irbiv7tz6l04f1l/kherad-reyhan.test.mp4?dl=1"],
        featuredImageIndex: 0,
        tags: ["website", "school-management-system", "enrollment-management-system"]
    },
    {
        id: "shop-management",
        name: "Shop Management System (WPF)",
        description: "Simple shop management system.",
        images: [
            "/images/shop-management/1.png",
            "/images/shop-management/2.png",
            "/images/shop-management/3.png",
            "/images/shop-management/3.png",
            "/images/shop-management/4.png",
            "/images/shop-management/5.png"
        ],
        featuredImageIndex: 0,
        tags: ["desktop-app", "windows", "assets-management-system"]
    },
    {
        id: "c-sharp-messenger",
        name: "C# Messenger",
        description: "Simple messenger app for tutorial purposes.",
        links: [
            {
                title: "Related Article (Farsi)",
                url: "https://sourcesara.com/c-sharp-messenger-application/"
            }
        ],
        images: [
            "/images/c-sharp-messenger/1.jpg",
            "/images/c-sharp-messenger/2.jpg",
            "/images/c-sharp-messenger/3.jpg",
            "/images/c-sharp-messenger/4.jpg",
            "/images/c-sharp-messenger/5.jpg",
            "/images/c-sharp-messenger/6.jpg"
        ],
        videos: ["https://serverfiles.ir/dl/sourcesara/video/post/7439.mp4"],
        featuredImageIndex: 1,
        tags: ["desktop-app", "windows", "messenger", "server-client", "socket-programming"]
    },
    {
        id: "material-hub",
        name: "Material Hub",
        description: "A material management system for ArcoGroup.org company.",
        images: ["/images/material-hub/0.png"],
        videos: ["https://www.dropbox.com/s/zhrvf3qdyt5813f/MaterialHub.mp4?dl=1"],
        featuredImageIndex: 0,
        tags: ["desktop-app", "windows", "assets-management-system"]
    },
    {
        id: "shecan-desktop",
        name: "Shecan Desktop",
        description: "Simple Windows application for Shecan.ir service.",
        links: [
            {
                title: "GitHub Page",
                url: "https://github.com/AmRo045/ShecanDesktop"
            }
        ],
        images: ["/images/shecan-desktop/1.png"],
        featuredImageIndex: 0,
        tags: ["desktop-app", "windows", "dns-configuration-tool"]
    }
];
