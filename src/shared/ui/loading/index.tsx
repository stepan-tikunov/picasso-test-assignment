import React from "react";

import { Spin } from "antd";

import styles from "./styles.module.css";

export const Loading: React.FC = () => {
    return (
        <div className={styles.loading}>
            <Spin tip="Loading">
                <div></div>
            </Spin>
        </div>
    );
};
