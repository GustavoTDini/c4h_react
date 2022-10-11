import {Carousel} from "react-bootstrap";
import handsImage from '../res/maos.png'


function HomeCarousel() {
    return(<Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={handsImage}
                    alt="slide home"
                />
                <div className="carousel-caption-left carousel-caption-custom">
                    <h3 className="blue-text h1 border-light">Servimos a Migrantes e Refugiados de qualquer lugar do mundo</h3>
                    <p className="blue-text">Uma organização construída pela diversidade com meta integradora de migrantes, atuando na inclusão dos imigrantes/refugiados.</p>
                </div>
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default HomeCarousel;
