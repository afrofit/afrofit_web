import * as React from "react";
import {
  AppBackground,
  AppContainer,
  AppFooterContainer,
  AppHeaderContainer,
} from "./styled";

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <AppBackground>
      <AppContainer>
        <AppHeaderContainer>
          <img
            src="../../../assets/img/logofull_nobg.png"
            style={{ height: "100px", width: "auto" }}
            alt="meaningful text"
          />
        </AppHeaderContainer>
        {children}
        <AppFooterContainer></AppFooterContainer>
      </AppContainer>
    </AppBackground>
  );
};
