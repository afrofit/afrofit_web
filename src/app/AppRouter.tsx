import * as React from "react";
import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { AppLayout } from "../components/layout/AppLayout/AppLayout";

import { FullPageLoadingSpinner } from "../components/elements/FullPageLoadingSpinner";
import { useSelector } from "react-redux";
import { selectUserIsLoggedIn } from "../store/reducers/auth/auth.slice";
import Plan from "../pages/App/Plan";
import Challenge from "../pages/App/components/Challenge";

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
const EventsPage = lazy(
  () => import("../pages/App/components/EventPage/EventsPage")
);
const MusicPage = lazy(() => import("../pages/App/MusicPage"));
const Faqs = lazy(() => import("../pages/App/components/FaqPage/Faqs"));
const ContactUs = lazy(
  () => import("../pages/App/components/Contactus/Contactus")
);

const ProfilePage = lazy(() => import("../pages/App/ProfilePage"));
const ShopPage = lazy(
  () => import("../pages/App/components/ShopPage/ShopPage")
);
const ShopDetails = lazy(
  () => import("../pages/App/components/ShopPage/ShopDetails")
);
const ClassesPage = lazy(
  () => import("../pages/App/components/ClassPage/ClassesPage")
);
const ClassDetails = lazy(
  () => import("../pages/App/components/ClassPage/ClassDetails")
);
const EventDetails = lazy(
  () => import("../pages/App/components/EventPage/EventDetails")
);
const PrivacyPage = lazy(() => import("../pages/App/PrivacyPage"));
const HomePage = lazy(() => import("../pages/App/HomePage"));
const BlogPage = lazy(() => import("../pages/App/BlogPage"));

// Payment Pages
const PaymentSuccessPage = lazy(
  () => import("../pages/Shared/PaymentSuccessPage")
);
const PaymentFailurePage = lazy(
  () => import("../pages/Shared/PaymentFailurePage")
);

const PrivateRoute = ({ children }: any) => {
  const token = sessionStorage.getItem("STORAGE_TOKEN_KEY_standin");
  // const currentUser = useSelector(selectUserIsLoggedIn)
  // const navigate = useNavigate()

  if (token) {
    return children;
  } else {
    return <Navigate to="/login" />;
    // navigate('/login')
  }
};
const PublicRoute = ({ children }: any) => {
  const token = sessionStorage.getItem("STORAGE_TOKEN_KEY_standin");
  // const currentUser = useSelector(selectUserIsLoggedIn)
  // const navigate = useNavigate()

  if (!token) {
    return <Navigate to="/" />;
  } else {
    return children;
    // navigate('/login')
  }
};

export const AppRouter: React.FC = () => {
  const currentUser = useSelector(selectUserIsLoggedIn);
  const token = sessionStorage.getItem("STORAGE_TOKEN_KEY_standin");

  return (
    <Suspense fallback={<FullPageLoadingSpinner isLoading />}>
      <AppLayout authorized={currentUser}>
        <Routes>
          <Route path="blog" element={<BlogPage />} />
          <Route path="about" element={<MusicPage />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="plan" element={<Plan />} />
          <Route path="contact-us" element={<ContactUs name="Name" />} />

          {/* // =================================== classes ================================ \\ */}
          <Route
            path="classes"
            element={
              <PrivateRoute>
                <ClassesPage />
              </PrivateRoute>
            }
          />
          <Route
            path={`classes/classDetails/:id`}
            element={
              <PrivateRoute>
                <ClassDetails />
              </PrivateRoute>
            }
          />

          <Route
            path="profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="payments">
            <Route
              path="success"
              element={
                <PrivateRoute>
                  <PaymentSuccessPage />
                </PrivateRoute>
              }
            />
            <Route
              path="cancel"
              element={
                <PrivateRoute>
                  <PaymentFailurePage />
                </PrivateRoute>
              }
            />
          </Route>

          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Navigate to="profile" />
              </PrivateRoute>
            }
          />
          <Route path="/" element={<HomePage />} />
          {!token && <Route path="login" element={<LoginPage />} />}
          {!token && <Route path="register" element={<RegisterPage />} />}
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          {!token && (
            <Route
              path="set-new-password/:userId/:hash"
              element={<SetNewPasswordPage />}
            />
          )}
          {/* // =================================== events ================================ \\ */}
          <Route
            path="events"
            element={
              <PrivateRoute>
                <EventsPage />
              </PrivateRoute>
            }
          />
          <Route
            path={`events/eventDetails/:id`}
            element={
              <PrivateRoute>
                <EventDetails />
              </PrivateRoute>
            }
          />
          {/* // =================================== shops ================================ \\ */}

          <Route
            path="shop"
            element={
              <PrivateRoute>
                <ShopPage />
              </PrivateRoute>
            }
          />
          <Route path={`shops/shopDetails/:id`} element={<ShopDetails />} />
          <Route path="challenge" element={<Challenge />} />

          <Route path="join-us" element={<JoinUsPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="/" element={<Navigate replace to="Afrofit" />} />
          <Route path="/*/" element={<NotFoundPage />} />
        </Routes>
      </AppLayout>
    </Suspense>
  );
};
