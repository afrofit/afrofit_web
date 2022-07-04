import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout/AppLayout";
import { AppContainer } from "./components/layout/AppLayout/styled";

import { ButtonContainer, Gradient, Header, Par } from "./components/trash";

const AppRouter: React.FC = () => (
  <AppLayout>
    <div>App or App!</div>
  </AppLayout>
);

export { AppRouter };

/*

   <Header>Welcome to the React Patterns Workshop!</Header>
    <Par>
      A pragraph of text in Roboto 100 darkgrey again. !! Hot reloading is
      tight!!!!!
    </Par>
    <ButtonContainer>
      <Gradient startColor={261} midColor={341} endColor={1}>
        A generic gradient button
      </Gradient>
    </ButtonContainer> 
    
    */
