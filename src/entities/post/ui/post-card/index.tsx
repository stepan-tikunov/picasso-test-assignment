import React from "react";

import { Button, Card } from "antd";
import { Link, useNavigate } from "react-router-dom";

import { Post } from "shared/api";

import styles from "./styles.module.css";

interface PostCardProps {
    post: Post;
}

export const PostCard: React.FC<PostCardProps> = React.memo((props) => {
    const { post, ...cardProps } = props;

    const navigate = useNavigate();
    const goToPost = () => navigate(`/post/${post.id}`);

    return (
        <Card
            className={styles.postCard}
            title={
                <span>
                    <Link to={`/post/${post.id}`}>#{post.id}</Link>
                    {" " + post.title}
                </span>
            }
            actions={[
                <Button
                    className={styles.openPost}
                    type="primary"
                    size="small"
                    onClick={goToPost}
                >
                    Open Post
                </Button>,
            ]}
            {...cardProps}
        >
            <div className={styles.postBody}>{post.body}</div>
        </Card>
    );
});
