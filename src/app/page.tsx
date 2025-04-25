"use client";

import { Link } from "@heroui/link";

export default function Home() {
    return (
        <section className="grid space-y-6 max-w-[360px] mx-auto">
            <div className="grid gap-1">
                <span className="text-2xl text-foreground-400">[@]</span>
                <div>
                    <h1 className="text-xl">Amin Rostami</h1>
                    <p className="text-foreground-500">Love to learn</p>
                </div>
            </div>

            <div className="grid gap-1">
                <span className="text-2xl text-foreground-400">[Social]</span>
                <div className="grid gap-2">
                    <Link href="https://github.com/AmRo045">GitHub</Link>
                    <Link href="https://leetcode.com/AmRo045">LeetCode</Link>
                    <Link href="https://stackoverflow.com/users/11219312/amro">StackOverFlow</Link>
                    <Link href="https://instagram.com/AmRo045">Instagram</Link>
                    <Link href="https://t.me/AmRo045">Telegram</Link>
                    <Link href="https://www.linkedin.com/in/amin-rostami-50a606133">LinkedIn</Link>
                    <Link href="https://x.com/AmRo045">X/Twitter</Link>
                </div>
            </div>

            <div className="grid gap-1">
                <span className="text-2xl text-foreground-400">[Languages]</span>
                <div className="grid gap-2">
                    <span>Turkish/Azari/Ardabil</span>
                    <span>Persian/Iran</span>
                    <span>English/US</span>
                </div>
            </div>
        </section>
    );
}
