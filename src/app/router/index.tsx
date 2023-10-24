import React from "react";

import { createBrowserRouter } from "react-router-dom";

import LoadingPage from "pages/loading";

const MainPage = React.lazy(() => import("pages/main"));
const PostPage = React.lazy(() => import("pages/post"));

const suspense = (children: React.ReactNode) => {
    return (
        <React.Suspense fallback={<LoadingPage />}>{children}</React.Suspense>
    );
};

export const router = createBrowserRouter([
    {
        path: "/",
        element: suspense(<MainPage />),
    },
    {
        path: "/post/:id",
        element: suspense(<PostPage />),
    },
], {
    basename: "/picasso-test-assignment"
});
