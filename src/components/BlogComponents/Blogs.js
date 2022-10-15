import {Button, Card, CardGroup, CardImg, Col, Container, Form, Image, InputGroup, Row} from "react-bootstrap";
import searchIcon from "../../res/search.svg"
import blogImage from "../../res/blogImage.jpg"
import CardHeader from "react-bootstrap/CardHeader";
import Footer from "../HomeComponents/Footer";

function Blogs() {

    const blog ={
        image: blogImage,
        titulo: "Copa dos Refugiados e Imigrantes 2022",
        texto: "Vai começar !!! \n Abertura oficial da Copa dos Refugiados e Imigrantes 2022. No Museu do Futebol nesta sexta feira, dia 26/08/2022 `as 11hs. A “Copa dos Refugiados e Imigrantes” é um projeto sócio-esportivo que tem o objetivo de integrar pessoas refugiadas e migrantes na comunidade local, incentivar seu protagonismo, gerar uma agenda positiva e colocar em destaque a agenda global de migração e deslocamento forçado. Bora conhecer o futebol de países do MUNDO que geralmente não conseguimos ver na COPA do MUNDO? Este ano de 2022, esta edição contará com a participação de 7 Estados brasileiros, nas seguintes capitais: Porto Alegre/RS, Curitiba/PR, São Paulo/SP, Rio de Janeiro/RJ, Belo Horizonte/MG, Recife/PE e Brasília / DF.",
        data: new Date(Date.now()),
        temas: ["Copa", "Eventos"]
    }

    return(<Container className="mt-5">
            <Row className="mt-5 mb-5 px-4 border-light">
                <InputGroup className="mb-3">
                    <Form.Control/>
                    <Button variant="outline-primary">
                        <Image src={searchIcon} alt="icon de lupa" className="mr-4"/>
                        Buscar
                    </Button>
                </InputGroup>
            </Row>
            <Row className="mt-5 mb-5 px-4 border-light">
                <Col md="4" className="mb-5">
                    <Card className="border p-2 blue-text">
                        <CardHeader>
                            <h5>{blog.data.getMonth()}</h5>
                        </CardHeader>
                        <CardGroup>
                            <CardImg src={blog.image}></CardImg>
                            <h2 className="mt-3 light-blue-text">{blog.titulo}</h2>
                            <p>{blog.texto}</p>
                            {blog.temas.map((tema) =>(
                                <p>{tema}</p>
                                ))}
                        </CardGroup>
                    </Card>
                </Col>
            </Row>
            <Footer/>
        </Container>

    );
}

export default Blogs;
