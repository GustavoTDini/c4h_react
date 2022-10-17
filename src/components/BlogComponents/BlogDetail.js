import {Button, Col, Container, Image, Row, Stack} from "react-bootstrap";
import {meses} from "../../HelperFunctions";
import Footer from "../HomeComponents/Footer";
import backIcon from "../../res/back.svg";
import * as React from "react";

function BlogDetail({blog}) {
    return(<Container className="mt-5">
            <Row className="mt-5">
                <Col md="2">
                    <Button>
                        <Image src={backIcon} alt="icone voltar" className="mr-4"/>
                    </Button>
                </Col>
                <Stack direction="horizontal" className="yellow-background blue-text">
                    <h5 className="blue-background yellow-text p-2">{blog.data.getDate()}</h5>
                    <h5 className="blue-background yellow-text p-2">{meses[blog.data.getMonth()]}</h5>
                </Stack>
            </Row>
            <Row className="mt-3 mb-5">
                <Image alt="imagem sobre a organização mb-5 mt-5" src={blog.image}/>
                <p className="light-blue-text fw-bold h1 mb-5 mt-5">{blog.titulo}</p>
                <p className="blue-text  content-text mb-3">{blog.texto}</p>
            </Row>
            <Footer/>
        </Container>
    );
}

export default BlogDetail;
