import React from "react";

import { Page } from "shared/ui";
import { PostBlock } from "widgets/post-block";

const MainPage: React.FC = () => {
    return (
        <Page>
            <h1>Posts</h1>
            <PostBlock />
        </Page>
    );
};

export default MainPage;
