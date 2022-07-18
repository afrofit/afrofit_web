import * as React from "react";
import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { AppLayout } from "../components/layout/AppLayout/AppLayout";

import { FullPageLoadingSpinner } from "../components/elements/FullPageLoadingSpinner";
import { NoAuthLayout } from "../components/layout/AppLayout/NoAuthLayout";
import { useSelector } from "react-redux";
import { selectCurrentUserProfile } from "../store/reducers/auth/auth.slice";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));

const ForgotPasswordPage = lazy(
  () => import("../pages/ForgotPasswordPage/ForgotPasswordPage")
);

export const AppRouter: React.FC = () => {
  const currentUser = useSelector(selectCurrentUserProfile);

  return (
    <Suspense fallback={<FullPageLoadingSpinner isLoading />}>
      {currentUser ? (
        <AppLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </AppLayout>
      ) : (
        <Routes>
          <Route
            path="/login"
            element={
              <NoAuthLayout>
                <LoginPage />
              </NoAuthLayout>
            }
          />
          <Route
            path="/register"
            element={
              <NoAuthLayout>
                <RegisterPage />
              </NoAuthLayout>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <NoAuthLayout>
                <ForgotPasswordPage />
              </NoAuthLayout>
            }
          />
          <Route
            path="/"
            element={
              <AppLayout>
                <HomePage />
              </AppLayout>
            }
          />
        </Routes>
      )}
    </Suspense>
  );
};
