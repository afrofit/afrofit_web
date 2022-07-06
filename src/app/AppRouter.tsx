import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { AppLayout } from "../components/layout/AppLayout/AppLayout";

import { AppHeader } from "../components/layout/AppHeader/AppHeader";
import { AppFooter } from "../components/layout/AppFooter/AppFooter";
import { HomePage } from "../pages/HomePage/HomePage";

export const AppRouter: React.FC = () => {
  return (
    <AppLayout>
      <AppHeader />
      <HomePage />
      <AppFooter />
    </AppLayout>
  );
};
