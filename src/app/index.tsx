import React from "react";

import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";
import { store } from "./store";

export const App: React.FC = () => {
    return (
        <div className="app">
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </div>
    );
};
