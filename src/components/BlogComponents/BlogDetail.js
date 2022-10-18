import {Button, Col, Container, Image, Row, Stack} from "react-bootstrap";
import {meses} from "../../HelperFunctions";
import Footer from "../HomeComponents/Footer";
import backIcon from "../../res/back.svg";
import * as React from "react";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {useNavigate} from "react-router";

function BlogDetail(props) {
    const location = useLocation();
    const { blog } = location.state;
    const navigate = useNavigate();

    return(<Container className="mt-5">
            <Row className="mt-5 yellow-background blue-text" >
                <Col md="2" className="d-flex justify-content-start p-2">
                    <Button onClick={() => navigate(-1)} className="border-0 blue-background" size="lg">
                        <Image src={backIcon} alt="icon voltar" className="icon-image m-auto"/>
                    </Button>
                </Col>
                <Col md={{ span: 2, offset: 8 }} className="d-flex justify-content-end p-2 text-center">
                    <h3 className="rounded-3 blue-background yellow-text h-100 w-50 mx-1 pt-3">{blog.data.getDate()}</h3>
                    <h3 className="rounded-3 blue-background yellow-text h-100 w-50 mx-1 pt-3">{meses[blog.data.getMonth()]}</h3>
                </Col>


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
