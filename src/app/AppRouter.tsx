import * as React from "react";
import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { AppLayout } from "../components/layout/AppLayout/AppLayout";

import { FullPageLoadingSpinner } from "../components/elements/FullPageLoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentUserProfile,
  setCurrentUser,
} from "../store/reducers/auth/auth.slice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

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
  const dispatch = useDispatch();
  const [userExists, setUserExists] = React.useState(false);
  const currentUser = useSelector(selectCurrentUserProfile);

  React.useEffect(() => {
    const subbedUser = onAuthStateChanged(auth, (user) => {
      if (user != null) {
        // There's a user
        console.log("user", user);
        setUserExists(true);
      } else {
        // There's no user
        console.log("There's no user");
        setUserExists(false);
      }
    });

    return () => subbedUser();
  }, []);

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
            <Route path="/join-us" element={<JoinUsPage />} />
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
