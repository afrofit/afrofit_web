import * as React from "react";
import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { AppLayout } from "../components/layout/AppLayout/AppLayout";

import { FullPageLoadingSpinner } from "../components/elements/FullPageLoadingSpinner";
import { useSelector } from "react-redux";
import { selectCurrentUserProfile } from "../store/reducers/auth/auth.slice";

// No auth pages
const WelcomePage = lazy(() => import("../pages/Auth/WelcomePage/WelcomePage"));
const LoginPage = lazy(() => import("../pages/Auth/LoginPage/LoginPage"));
const RegisterPage = lazy(
  () => import("../pages/Auth/RegisterPage/RegisterPage")
);
const ForgotPasswordPage = lazy(
  () => import("../pages/Auth/ForgotPasswordPage/ForgotPasswordPage")
);
const NotFoundPage = lazy(
  () => import("../pages/Shared/NotFoundPage/NotFoundPage")
);

// App pages
const EventsPage = lazy(() => import("../pages/App/EventsPage"));
const MusicPage = lazy(() => import("../pages/App/MusicPage"));
const ProfilePage = lazy(() => import("../pages/App/ProfilePage"));
const ShopPage = lazy(() => import("../pages/App/ShopPage"));
const ClassesPage = lazy(() => import("../pages/App/ClassesPage"));

export const AppRouter: React.FC = () => {
  const currentUser = useSelector(selectCurrentUserProfile);
  const userExists = false;

  return (
    <Suspense fallback={<FullPageLoadingSpinner isLoading />}>
      {userExists ? (
        <AppLayout authorized={userExists}>
          <Routes>
            <Route path="/classes" element={<ClassesPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/*/*" element={<NotFoundPage />} />
            <Route path="/" element={<ProfilePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AppLayout>
      ) : (
        <AppLayout authorized={userExists}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/" element={<WelcomePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AppLayout>
      )}
    </Suspense>
  );
};
