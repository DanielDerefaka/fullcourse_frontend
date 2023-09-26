import React from "react";
import { Col, Row } from "reactstrap";
import Buttons from '../../Cart/Buttons'

const PlanCard = ({ src, title, description, icon, btnClass, btnFunc, btnFunc2, price, btnTxt, btnClass2 }) => {
  return (
    <Col md={3} className='mb-2' style={{ cursor: "pointer",  }}>
      <div className="shadow-sm w3-round mb-2" style={{height: '350px', background: '#fafafa'}}>
        <img src={src} alt="" className="w3-image w3-round" />
        <div className="w3-padding" >
          <Row>
            <Col xs={9}>
              <p className="w3-small">{title}</p>
              <p className="w3-tiny">N{price}</p>
            </Col>
            <Col xs={3}>
              <Buttons func={btnFunc} classes={btnClass} text={icon}/>
            </Col>
          </Row>
          
          
          <div className="w3-small">{description.substring(0, 100)} </div>
          <div className="mt-5">
            <div>
              <Buttons func={btnFunc2} classes={btnClass2} text={btnTxt}/>
            </div>
            
          </div>
        </div>
      </div>
    </Col>
  );
};

export default PlanCard;
