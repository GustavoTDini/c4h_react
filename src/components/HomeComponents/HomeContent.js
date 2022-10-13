import {Button, Col, Container, Image, Row} from "react-bootstrap";
import PeopleCarousel from "./PeopleCarousel";
import MapWrapper from "./MapWrapper";
import HomePrincipalBlock from "./HomePrincipalBlock";
import HomeServicoBlock from "./HomeServicoBlock";
import HomeColaboradoresBlock from "./HomeColaboradoresBlock";
import HomeDiferencaBlock from "./HomeDiferencaBlock";
import HomeVoluntariosBlock from "./HomeVoluntariosBlock";
import HomeMapBlock from "./HomeMapBlock";

const HomeContent = () => (
    <>
        <HomePrincipalBlock/>
        <HomeServicoBlock/>
        <HomeDiferencaBlock/>
        <HomeColaboradoresBlock/>
        <HomeVoluntariosBlock/>
        <HomeMapBlock/>
    </>

)

export default HomeContent;
