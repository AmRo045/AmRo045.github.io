import styles from "@/app/components/css/ActivityDescription.module.css";

import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const ActivityDescription = ({ children }: Props): JSX.Element => {
    return <div className={styles.activityDescription}>{children}</div>;
};

export default ActivityDescription;
