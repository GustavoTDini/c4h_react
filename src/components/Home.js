import {Container} from "react-bootstrap";
import HomeCarousel from "./HomeComponents/HomeCarousel";
import Footer from "./HomeComponents/Footer";
import HomeContent from "./HomeComponents/HomeContent";


function Home() {
    return(<Container className="mt-5">
            <HomeCarousel/>
            <HomeContent/>
            <Footer/>
        </Container>
    );
}

export default Home;
