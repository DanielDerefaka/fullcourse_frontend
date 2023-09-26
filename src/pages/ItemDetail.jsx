import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";
import ItemImageComponent from "../components/ImageGallery/ItemImageComponent";
import ItemHeading from "../components/ItemOverview/ItemHeading";
import ItemOverview from "../components/ItemOverview/ItemOverview";
import ShopModel from "../components/models/ShopModel";
import NoData from "../components/NoData";
import Spinner from "../components/Spinner";
import { API_URL } from "../constants/types";
import { GetItemByID } from "../features/shop/shopAction";
import { FaInbox } from "react-icons/fa";
import Index from "../components/Find/Index";
import Details from "../components/Find/Details";

const ItemDetail = ({ images }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({
    value: "",
    message: "",
  });

  const { items } = useSelector((state) => state.shop);

  const fetchData = async () => {
    const response = await dispatch(GetItemByID(id));
    console.log(response.payload, "sambo");

    if (!response.payload) {
      setError({
        value: true,
        message: "No data ",
      });

      setLoading(false);

      return;
    }
    setItem(response.payload);
    setLoading(false);
    setError({});
  };
  useEffect(() => {
    // dispatch action here
    fetchData();
  }, []);

  if (!id) {
    return <> No id passed {id}</>;
  }

  if (loading) {
    <>
      <Spinner />
    </>;
  }

  return (
    <>
      {
        <div>
          <div className="item-detail-top">
            <Row>
              <Col md={6}>
                <ItemImageComponent images={item.image} />
              </Col>
              <Col md={6}>
                <ItemOverview
                  title={item.item_name}
                  available={item.quantity}
                  product_id={item.item_id}
                />
              </Col>
            </Row>
          </div>

          <div>
            <ItemHeading title={"Product Details"} />
            <p>
              {" "}
              Get inspired and stay accountable with Versa 4 + Premium - learn
              when to work out or recover, see real-time stats during exercise
              and find new ways to keep your routine fresh and fun Built for
              better fitness results: Daily Readiness Score(1), built-in GPS and
              workout intensity map, Active Zone Minutes, all-day activity
              tracking and 24/7 heart rate, 40+ exercise modes and automatic
              exercise tracking, water resistant to 50 meters Tools to measure
              and improve sleep quality: personalized Sleep Profile(1), daily
              sleep stages & Sleep Score, smart wake alarm and do not disturb
              mode Maintain a healthy body and mind: daily Stress Management
              Score, reflection logging, SpO2(2), health metrics dashboard(3),
              guided breathing sessions, menstrual health tracking and
              mindfulness content Includes 6-month Premium membership for deeper
              insights & guidance, exclusive workouts, mindfulness sessions and
              more(8)
            </p>
          </div>
          <Index />
          <div></div>
          <div>
            <ItemHeading title={"Product Details"} />

            <Details />
          </div>
        </div>
      }
    </>
  );
};

export default ItemDetail;
