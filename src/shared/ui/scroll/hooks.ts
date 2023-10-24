import { useEffect, useRef, useState } from "react";

export const useInView = (): [React.MutableRefObject<null>, boolean] => {
    const observerTargetRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const inViewNow = entries[0].isIntersecting;

            if (inView !== inViewNow) {
                setInView(inViewNow);
            }
        });

        const observerTarget = observerTargetRef.current;

        if (observerTarget !== null) {
            observer.observe(observerTarget);
        }

        return () => {
            if (observerTarget !== null) {
                observer.unobserve(observerTarget);
            }
        };
    });

    return [observerTargetRef, inView];
};

export const useInfiniteScroll = (handleScroll: () => void) => {
    const observerTargetRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    handleScroll();
                }
            },
            {
                threshold: 1,
            }
        );

        const observerTarget = observerTargetRef.current;

        if (observerTarget !== null) {
            observer.observe(observerTarget);
        }

        return () => {
            if (observerTarget !== null) {
                observer.unobserve(observerTarget);
            }
        };
    });

    return observerTargetRef;
};
