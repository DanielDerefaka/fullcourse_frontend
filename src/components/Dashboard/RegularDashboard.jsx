import React from "react";
import Card from "../Cards/Card";
import Gap from "../Gap";
import FlexContainer from "../Layouts/FlexContainer";
import CarouselComponent from "../Carousel/CarouselComponent";

const RegularDashboard = () => {
  return (
    <div>
      <FlexContainer orientation="column">
        <Gap>&nbsp;</Gap>

        <CarouselComponent>
          <Card title={"Property Acquired"} count={10} />
          <Card title={"Property Acquired"} count={10} />
          <Card title={"Property Acquired"} count={10} />
        </CarouselComponent>

        {/* <AllPropertyTable /> */}
      </FlexContainer>
    </div>
  );
};

export default RegularDashboard;
