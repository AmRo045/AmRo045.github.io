"use client";

import Card from "@/app/components/common/Card";
import DataRow from "@/app/components/common/DataRow";
import Header from "../../components/Header";

export default function MaterialHubPage(): JSX.Element {
    return (
        <>
            <Header title="Shop Management System (WPF)" />

            <Card type="activities-details">
                <div className="activity-description">
                    Simple shop management system.
                </div>

                <DataRow label="Gallery">
                    <img
                        src="/images/shop-management/1.png"
                        alt="Shop Management 1"
                        decoding="async"
                    />
                    <img
                        src="/images/shop-management/2.png"
                        alt="Shop Management 2"
                        decoding="async"
                    />
                    <img
                        src="/images/shop-management/3.png"
                        alt="Shop Management 3"
                        decoding="async"
                    />
                    <img
                        src="/images/shop-management/4.png"
                        alt="Shop Management 4"
                        decoding="async"
                    />
                    <img
                        src="/images/shop-management/5.png"
                        alt="Shop Management 5"
                        decoding="async"
                    />
                </DataRow>
            </Card>
        </>
    );
}
