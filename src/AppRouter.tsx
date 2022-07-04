import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout/AppLayout";

const AppRouter: React.FC = () => (
  <AppLayout>
    <div>App or App!</div>
  </AppLayout>
);

export { AppRouter };
