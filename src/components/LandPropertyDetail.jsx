import Lottie from "lottie-react";
import React from "react";
import { BiBuilding } from "react-icons/bi";
import { Col, Row } from "reactstrap";
import Details from "./Find/Details";
import ProductSpecification from "./Find/Index";
import ItemHeading from "./ItemOverview/ItemHeading";
import FlexContainer from "./Layouts/FlexContainer";
import PropertyOverview from "./PropertyOverview/PropertyOverview";
import building from "../assets/lottie/building.json";
import { Paragraph } from "./Typography/ParagraphText";
import { HeadingText } from "./Typography/HeadingText";
import sample from "../assets/images/sample.jpg";
import { CurrencyFormatter } from "../utils/CurrencyFormatter";
import styled from "styled-components";
import { useState } from "react";
import { FlatButton2 } from "./Buttons/FlatButton2";
import { useEffect } from "react";

const LandPropertyDetail = ({ item }) => {
  const [selected, setSelected] = useState({
    response: [],
  });

  useEffect(() => {}, [selected]);

  const handleChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelected({
        response: [...selected.response, value],
      });
    } else {
      setSelected({
        response: selected.response.filter((e) => e !== value),
      });
    }
  };
  return (
    <div>
      <div className="item-detail-top">
        <Row>
          <Col md={12}>
            <ItemHeading title={item.j_title} />

            <p>image will be here</p>

            {/* <PropertyOverview payload={item} /> */}
          </Col>

          <Col>
            {/* <ItemHeading title={"See Plots"} />
            
            */}

            <FlexContainer justify_content="space-between" align_items="center">
              <HeadingText>
                {" "}
                Select Plot to Purchase ({selected.response.length})
              </HeadingText>
              <FlatButton2> Show Selected</FlatButton2>
            </FlexContainer>

            <Row>
              {item.plots &&
                item.plots.map((plot) => (
                  <>
                    <Col
                      md={2}
                      className=""
                      onClick={() => {
                        // console.log(plot.j_p_no);
                        // console.log(servi)
                      }}
                    >
                      <PlotContainer>
                        <input
                          type="checkbox"
                          id={plot.j_id}
                          className="check-box"
                          onChange={handleChange}
                        />
                        <img
                          src={sample}
                          alt=""
                          className="plot-image"
                          width={"150px"}
                        />
                        {/* <Lottie animationData={building} loop={false} /> */}
                        <Paragraph>{plot.j_p_no}</Paragraph>
                        <Paragraph>
                          {CurrencyFormatter(plot.j_amount)}
                        </Paragraph>

                        {/* {selected.includes(plot.j_p_no) && <> selected</>} */}
                        {/* <Paragraph>{plot.j_address}</Paragraph> */}
                      </PlotContainer>
                    </Col>
                  </>
                ))}
            </Row>
          </Col>
        </Row>
      </div>

      <div>
        <ItemHeading title={"Product Details"} />
        <Details details={item.j_desc} />
      </div>
      <div>
        <ItemHeading title={"Product Specification"} />

        <ProductSpecification data={item} />
      </div>
    </div>
  );
};

export default LandPropertyDetail;

const PlotContainer = styled.div`
  cursor: pointer;
  position: relative;

  .check-box {
    position: absolute;
  }

  .plot-image {
    border-radius: 4px;
  }
`;
