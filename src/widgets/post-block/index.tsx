import React from "react";

import { Flex } from "antd";
import { useEffect, useRef, useState } from "react";

import { PostCard } from "entities/post";
import { useListPostsQuery } from "shared/api";
import {
    useInfiniteScroll,
    ErrorAlert,
    Loading,
    VirtualScroll,
} from "shared/ui";

export const PostBlock: React.FC = () => {
    const [page, setPage] = useState(1);
    const { data: posts, isFetching, error, refetch } = useListPostsQuery(page);
    const prevLength = useRef(0);

    const scrollRef = useInfiniteScroll(() => {
        if (posts === undefined) {
            return;
        }

        if (prevLength.current !== posts.length) {
            setPage(page + 1);
        }

        prevLength.current = posts.length;
    });

    useEffect(() => {
        if (posts === undefined) {
            return;
        }

        const actualPages = Math.ceil(posts.length / 10);

        if (posts !== undefined && actualPages > page) {
            setPage(actualPages);
        }
    }, [page, posts]);

    return (
        <Flex vertical={true} gap="20px">
            {posts &&
                posts.map((post, index) => (
                    <VirtualScroll heightPx={200}>
                        <PostCard key={index} post={post} />
                    </VirtualScroll>
                ))}
            {error && (
                <ErrorAlert
                    description="Couldn't load posts."
                    action={{ fn: refetch, description: "Retry" }}
                />
            )}
            {isFetching ? <Loading /> : <div ref={scrollRef}></div>}
        </Flex>
    );
};
