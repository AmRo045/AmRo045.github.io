"use client";

import Card from "@/app/components/common/Card";
import DataRow from "@/app/components/common/DataRow";
import Header from "../../components/Header";

export default function OnlineCompilerPage(): JSX.Element {
    return (
        <>
            <Header title="Online Compiler" />

            <Card type="activities-details">
                <div className="activity-description">
                    An online environment for writing, compiling, and executing
                    your code.
                </div>

                <DataRow label="Related Article">
                    <a
                        className="styled-link"
                        href="https://virgool.io/@sourcesara.info/%D9%85%D8%AD%DB%8C%D8%B7-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87-%D9%86%D9%88%DB%8C%D8%B3%DB%8C-%D8%A2%D9%86%D9%84%D8%A7%DB%8C%D9%86-%D8%A8%D8%B1%D8%A7%DB%8C-%D8%B2%D8%A8%D8%A7%D9%86-%D9%87%D8%A7%DB%8C-%D9%85%D8%AE%D8%AA%D9%84%D9%81-elyhzysgy3dt"
                        dir="auto"
                    >
                        محیط برنامه نویسی آنلاین برای زبان های مختلف
                    </a>
                </DataRow>

                <DataRow label="Gallery">
                    <img
                        src="/images/online-compiler/1.png"
                        alt="Online compiler 1"
                        decoding="async"
                    />
                    <img
                        src="/images/online-compiler/2.png"
                        alt="Online compiler 2"
                        decoding="async"
                    />
                    <img
                        src="/images/online-compiler/3.png"
                        alt="Online compiler 3"
                        decoding="async"
                    />
                    <img
                        src="/images/online-compiler/4.png"
                        alt="Online compiler 4"
                        decoding="async"
                    />
                    <img
                        src="/images/online-compiler/5.png"
                        alt="Online compiler 5"
                        decoding="async"
                    />
                    <img
                        src="/images/online-compiler/6.png"
                        alt="Online compiler 6"
                        decoding="async"
                    />
                    <img
                        src="/images/online-compiler/7.png"
                        alt="Online compiler 7"
                        decoding="async"
                    />
                    <img
                        src="/images/online-compiler/8.png"
                        alt="Online compiler 8"
                        decoding="async"
                    />
                </DataRow>
            </Card>
        </>
    );
}
