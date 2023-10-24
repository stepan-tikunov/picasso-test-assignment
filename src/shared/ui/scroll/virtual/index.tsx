import React from "react";

import { useInView } from "../hooks";

import styles from "./styles.module.css";

interface VirtualScrollProps {
    heightPx: number;
    children: React.ReactNode;
}

export const VirtualScroll: React.FC<VirtualScrollProps> = (props) => {
    const { heightPx: height, children } = props;

    const [ref, inView] = useInView();

    return (
        <div
            className={styles.virtualWrapper}
            ref={ref}
            style={{ height: `${height}px` }}
        >
            {inView ? children : null}
        </div>
    );
};
