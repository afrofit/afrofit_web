import * as React from "react";
import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { AppLayout } from "../components/layout/AppLayout/AppLayout";

import { FullPageLoadingSpinner } from "../components/elements/FullPageLoadingSpinner";
import { useSelector } from "react-redux";
import { selectUserIsLoggedIn } from "../store/reducers/auth/auth.slice";

// No auth pages
const WelcomePage = lazy(() => import("../pages/Auth/WelcomePage/WelcomePage"));
const JoinUsPage = lazy(() => import("../pages/Auth/JoinUsPage/JoinUsPage"));
const LoginPage = lazy(() => import("../pages/Auth/LoginPage/LoginPage"));
const RegisterPage = lazy(
  () => import("../pages/Auth/RegisterPage/RegisterPage")
);
const ForgotPasswordPage = lazy(
  () => import("../pages/Auth/ForgotPasswordPage/ForgotPasswordPage")
);
const SetNewPasswordPage = lazy(
  () => import("../pages/Auth/ForgotPasswordPage/SetNewPasswordPage")
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
const PrivacyPage = lazy(() => import("../pages/App/PrivacyPage"));
const BlogPage = lazy(() => import("../pages/App/BlogPage"));

// Payment Pages
const PaymentSuccessPage = lazy(
  () => import("../pages/Shared/PaymentSuccessPage")
);
const PaymentFailurePage = lazy(
  () => import("../pages/Shared/PaymentFailurePage")
);

export const AppRouter: React.FC = () => {
  const currentUser = useSelector(selectUserIsLoggedIn);

  return (
    <Suspense fallback={<FullPageLoadingSpinner isLoading />}>
      {currentUser ? (
        <AppLayout authorized={true}>
          <Routes>
            <Route path="classes" element={<ClassesPage />} />
            <Route path="events" element={<EventsPage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="about" element={<MusicPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="*/*" element={<NotFoundPage />} />
            <Route path="payments">
              <Route path="success" element={<PaymentSuccessPage />} />
              <Route path="cancel" element={<PaymentFailurePage />} />
            </Route>
            <Route path="/*" element={<Navigate replace to="profile" />} />
          </Routes>
        </AppLayout>
      ) : (
        <AppLayout authorized={false}>
          <Routes>
            <Route path="welcome" element={<WelcomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="join-us" element={<JoinUsPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="forgot-password" element={<ForgotPasswordPage />} />
            <Route
              path="set-new-password/:userId/:hash"
              element={<SetNewPasswordPage />}
            />
            <Route path="/*" element={<Navigate replace to="welcome" />} />
          </Routes>
        </AppLayout>
      )}
    </Suspense>
  );
};
