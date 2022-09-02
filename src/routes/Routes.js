import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

import LoaderSpinner from "../components/Loader/LoaderSpinner";
import lazyWithRetry from "../components/LazyWithRetry/LazyWithRetry";
// import ErrorView from "components/Error/ErrorView";

const OnboardingPage = lazyWithRetry(() =>
    import(/* webpackChunkName: "OnboardingPage" */ "../pages/onboarding/OnboardingPage")
);

export const AllRoutes = () => {

    const myHistory = createBrowserHistory({ window });

    return (
        <Suspense fallback={<LoaderSpinner />}>
            <HistoryRouter history={myHistory}>
                <Routes>

                    <Route path="/" element={<Navigate replace to="onboarding" />} />

                    <Route
                        path="/onboarding"
                        element={<OnboardingPage />}/>

                </Routes>
            </HistoryRouter>
        </Suspense>
    );
};
