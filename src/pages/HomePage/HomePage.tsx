import * as React from "react";
import { FitnessBanner } from "./components/FitnessBanner";
import { RhythmBanner } from "./components/RhythmBanner";
import { TopBanner } from "./components/TopBanner";

const HomePage: React.FC = () => {
  return (
    <>
      <TopBanner />
      <RhythmBanner />
      <FitnessBanner />
    </>
  );
};

export default HomePage;
