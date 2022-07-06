import * as React from "react";
import { FitnessBanner } from "./components/FitnessBanner";
import { RhythmBanner } from "./components/RhythmBanner";
import { TopBanner } from "./components/TopBanner";

export const HomePage: React.FC = () => {
  return (
    <>
      <TopBanner />
      <RhythmBanner />
      <FitnessBanner />
    </>
  );
};
