import Carousel from "react-bootstrap/Carousel";
import Choose from "../Landing/Choose";

const Carousel2 = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <Choose />

        {/* <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=f5f5f5"
          alt="First slide"
        /> */}
      </Carousel.Item>
      <Carousel.Item>
        <Choose />

        {/* <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <Choose />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousel2;
