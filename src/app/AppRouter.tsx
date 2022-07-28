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
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

const ForgotPasswordPage = lazy(
  () => import("../pages/ForgotPasswordPage/ForgotPasswordPage")
);

export const AppRouter: React.FC = () => {
  const currentUser = useSelector(selectCurrentUserProfile);
  const userExists = true;

  return (
    <Suspense fallback={<FullPageLoadingSpinner isLoading />}>
      {userExists ? (
        <AppLayout authorized={userExists}>
          <Routes>
            <Route path="/classes" element={<HomePage />} />
            <Route path="/events" element={<HomePage />} />
            <Route path="/shop" element={<HomePage />} />
            <Route path="/music" element={<HomePage />} />
            <Route path="/profile" element={<HomePage />} />
            <Route path="/*/*" element={<NotFoundPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AppLayout>
      ) : (
        <AppLayout authorized={userExists}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AppLayout>
      )}
    </Suspense>
  );
};
