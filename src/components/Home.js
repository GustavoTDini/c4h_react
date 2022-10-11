import {Container} from "react-bootstrap";
import HomeCarousel from "./HomeCarousel";
import Footer from "./Footer";
import HomeContent from "./HomeContent";


function Home() {
    return(<Container className="mt-5">
            <HomeCarousel/>
            <HomeContent/>
            <Footer/>
        </Container>
    );
}

export default Home;
