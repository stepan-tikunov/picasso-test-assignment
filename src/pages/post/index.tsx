import React from "react";

import { Flex } from "antd";
import { Link, useParams } from "react-router-dom";

import { FullPost } from "entities/post";
import { useGetPostByIdQuery } from "shared/api";
import { ErrorAlert, Loading, Page } from "shared/ui";

type PostUrlParams = {
    id?: string;
};

const PostPage: React.FC = () => {
    const { id } = useParams<PostUrlParams>();

    const {
        data: post,
        isFetching,
        error,
        refetch,
    } = useGetPostByIdQuery(id as string);

    return (
        <Page>
            <Flex justify="space-between" align="center">
                <h1>Post #{id}</h1>
                <Link to="/">Go Back</Link>
            </Flex>

            {post && <FullPost post={post} />}
            {error && (
                <ErrorAlert
                    description="Couldn't load this post"
                    action={{ fn: refetch, description: "Retry" }}
                />
            )}
            {isFetching && <Loading />}
        </Page>
    );
};

export default PostPage;
