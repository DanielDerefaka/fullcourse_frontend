import React from "react";
import { Col, Row } from "reactstrap";
import { CurrencyFormatter } from "../utils/CurrencyFormatter";
import { FlatButton } from "./Buttons/FlatButton";
import Details from "./Find/Details";
import ProductSpecification from "./Find/Index";
import ItemHeading from "./ItemOverview/ItemHeading";
import FlexContainer from "./Layouts/FlexContainer";
import PropertyOverview from "./PropertyOverview/PropertyOverview";
import { HeadText } from "./Typography";
import { HeadingText } from "./Typography/HeadingText";
import { HeadingText2 } from "./Typography/HeadingText2";

const HousePropertyDetail = ({ item }) => {
  return (
    <div>
      <div className="item-detail-top">
        <Row>
          <Col md={12}>
            <PropertyOverview payload={item} />
          </Col>
          <Col md={12}>
            <FlexContainer
              justify_content="space-between"
              align_items="center"
              orientation="column"
            >
              <HeadingText>{item.j_title}</HeadingText>
              <FlexContainer
                justify_content="space-between"
                align_items="center"
              >
                <HeadingText>{CurrencyFormatter(item.j_price)}</HeadingText>
                <FlatButton> Contact Agent</FlatButton>
              </FlexContainer>
            </FlexContainer>
          </Col>
        </Row>
      </div>

      <div>
        <ItemHeading title={"Property Details"} />

        <Details details={item.j_desc} />
      </div>
      <div>
        <ItemHeading title={"Product Specification"} />

        <ProductSpecification data={item} />
      </div>
    </div>
  );
};

export default HousePropertyDetail;
