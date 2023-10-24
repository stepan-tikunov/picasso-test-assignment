import React from "react";

import { Layout } from "antd";

import styles from "./styles.module.css";

export const Page: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <Layout className={styles.page}>
            <Layout className={styles.content}>{children}</Layout>
        </Layout>
    );
};
