import React from "react";
import Banner from "../components/Landing/Banner";
import Counter from "../components/Landing/Counter";
import FeatureEstate from "../components/Landing/FeatureEstate";
import Choose from "../components/Landing/Choose";
import Build from "../components/Landing/Build";
import YoutubePlayer from "../components/YoutubePlayer";
import Carousel2 from "../components/Carousel/Carousel2";
import Plan from "../components/Landing/Plan";

const Landing = () => {
  return (
    <div>
      <Banner />
      <YoutubePlayer videoId={"W5VRq2S2UzU"} width={"100%"} height={500} />
      <Counter />
      <FeatureEstate />

      <Carousel2 />
      {/* <Choose /> */}
      <Build />
      <Plan/>
    </div>
  );
};

export default Landing;
