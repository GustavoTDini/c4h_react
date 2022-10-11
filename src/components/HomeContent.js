import {Button, Col, Container, Image, Row} from "react-bootstrap";
import calendar from '../res/calendar4.svg'
import check from '../res/check-circle.svg'
import file from '../res/file-earmark-text.svg'
import person from '../res/person-check.svg'
import PeopleCarousel from "./PeopleCarousel";
import Map from "./Map";
import MapWrapper from "./MapWrapper";

function HomeContent() {
    return(
        <div>
            <Row className="mt-5 mb-5">
                <p className="blue-text fw-bold h1" >Duas Principais Frentes</p>
            </Row>
            <Row className="mt-5 mb-5 text-start">
                <Col md={6}>
                    <p className="light-blue-text h2">Integração social e local</p>
                    <p className="blue-text content-text">Acompanhar a integração dos migrantes defendendo e promovendo seus direitos e protagonismo contra todas as formas de discriminação e xenofobia no Brasil. Denunciar todo tipo de violência contra direitos humanos e incentivando a fraternidade entre todos os povos.</p>
                </Col>
                <Col md ={6}>
                    <p className="light-blue-text h2">Incidência pública</p>
                    <p className="blue-text  content-text">Colaborar na formulação, implementação, monitoramento e avaliação de políticas voltadas para a população migrante. Ser agente propositor de pautas municipais, estaduais, nacionais e internacionais em especial para legislação migratória e controle social</p>
                </Col>
            </Row>
            <Row className="mt-5 mb-5">
                <p className="blue-text fw-bold h1">Serviços aos migrantes</p>
            </Row>
            <Row className="mt-5 mb-5 text-center">
                <Col md={3}>
                    <Image src={file} className="home-icons"/>
                    <p className="light-blue-text h3">Assistência e Inclusão Social</p>
                    <p className="blue-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum egestas posuere. Nam eget nisl mollis, maximus tellus eget, imperdiet dolor. Sed a turpis ac neque facilisis commodo sit amet.</p>
                </Col>
                <Col md ={3}>
                    <Image src={check} className="home-icons"/>
                    <p className="light-blue-text h3">Acompanhamento de Integração</p>
                    <p className="blue-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum egestas posuere. Nam eget nisl mollis, maximus tellus eget, imperdiet dolor. Sed a turpis ac neque facilisis commodo sit amet.</p>
                </Col>
                <Col md ={3}>
                    <Image src={person} className="home-icons"/>
                    <p className="light-blue-text h3">Comunicação e Informação</p>
                    <p className="blue-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum egestas posuere. Nam eget nisl mollis, maximus tellus eget, imperdiet dolor. Sed a turpis ac neque facilisis commodo sit amet.</p>
                </Col>
                <Col md ={3}>
                    <Image src={calendar} className="home-icons"/>
                    <p className="light-blue-text h3">Recepção de Pesquisadores</p>
                    <p className="blue-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum egestas posuere. Nam eget nisl mollis, maximus tellus eget, imperdiet dolor. Sed a turpis ac neque facilisis commodo sit amet.</p>
                </Col>
            </Row>
            <Row className="mt-5 mb-5 justify-content-between">
                <Col md="6">
                    <div className="mr-4 blue-background p-4 text-end">
                        <p className="yellow-text fw-bold h3">Migrante</p>
                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit ac lorem quis semper. Proin rhoncus leo eu libero consectetur vulputate. Donec vitae leo ut mauris semper posuere. Phasellus quis dolor diam. Nullam et tempor dolor. Curabitur metus leo, eleifend eu tempor ac, volutpat sed ligula. Etiam pulvinar nisl ac.</p>
                    </div>

                </Col>
                <Col md="6">
                    <div className="ml-4 blue-background p-4 text-start">
                        <p className="yellow-text fw-bold h3">Refugiados</p>
                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit ac lorem quis semper. Proin rhoncus leo eu libero consectetur vulputate. Donec vitae leo ut mauris semper posuere. Phasellus quis dolor diam. Nullam et tempor dolor. Curabitur metus leo, eleifend eu tempor ac, volutpat sed ligula. Etiam pulvinar nisl ac.</p>
                    </div>
                </Col>
            </Row>
            <Row className="mt-5 mb-5">
                <p className="blue-text fw-bold h1">Nossos Colaboradores</p>
            </Row>
            <Row className="mt-5 mb-5">
                <PeopleCarousel/>
            </Row>

            <Row className="mt-5 mb-5">
                <Col md="6">
                    <p className="large-text light-blue-text">VAMOS PRECISAR DE TODO MUNDO</p>
                </Col>
                <Col md="6">
                    <p className="blue-text content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a mi vitae nisi elementum cursus. Duis sed tellus felis. Duis consequat faucibus elit. Sed maximus scelerisque eleifend. Vestibulum porta sem.</p>
                    <div className="w-100 d-flex align-content-center">
                        <Button className="btn-lg yellow-background blue-text w-75 h-25 border-0 m-auto fw-bold">Seja um Voluntário</Button>
                    </div>


                </Col>
            </Row>

            <Row className="mt-5 mb-5">
                <p className="blue-text fw-bolder h1">Onde estamos</p>
                <Container className="light-grey-background map-container">
                    <MapWrapper/>
                </Container>
            </Row>
        </div>


    );
}

export default HomeContent;
