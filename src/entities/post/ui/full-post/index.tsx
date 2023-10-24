import React from "react";

import { Divider } from "antd";

import { Post } from "shared/api";

interface FullPostProps {
    post: Post;
}

export const FullPost: React.FC<FullPostProps> = (props) => {
    const { post } = props;

    return (
        <div>
            <h2>{post.title}</h2>
            <Divider />
            <div>{post.body}</div>
        </div>
    );
};
