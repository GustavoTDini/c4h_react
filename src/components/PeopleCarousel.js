import Slider from "react-slick";
import {Col, Image} from "react-bootstrap";

function PeopleCarousel() {
    const renderSlides = () =>
        [1, 2, 3, 4, 5, 6, 7, 8,9,10].map(num => (
            <Col md="4" className="d-flex align-content-center mb-5" key={num}>
                <Image src="https://placekitten.com/g/300/300" className="rounded-circle img-thumbnail thumb-size"/>
                <p className="blue-text h4 align-self-center ms-3">Nome {num}</p>
            </Col>
        ));

    return(
        <Slider
            dots={true}
            slidesToShow={3}
            slidesToScroll={1}
            autoplay={false}
            className="mt-5 mb-5"
        >
            {renderSlides()}
        </Slider>
    );
}

export default PeopleCarousel;
