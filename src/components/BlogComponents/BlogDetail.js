import {Button, Col, Container, Image, Row, Stack} from "react-bootstrap";
import {meses} from "../../HelperFunctions";
import Footer from "../HomeComponents/Footer";
import backIcon from "../../res/back.svg";
import * as React from "react";
import {useLocation} from "react-router-dom";
import {useNavigate} from "react-router";
import * as DOMPurify from 'dompurify';
import BlogMiniCard from "./BlogMiniCard";

function BlogDetail(props) {
    const location = useLocation();
    const { blog } = location.state;
    const navigate = useNavigate();

    const cleanContent = DOMPurify.default.sanitize(blog.conteudo);

    return(<Container className="mt-5 align-content-center">
            <Row>
                <Col md="9">
                    <Row className="mt-5 yellow-background blue-text p-3 rounded-3 mt-auto">
                        <Col md="2" className="d-flex justify-content-start p-2">
                            <Button onClick={() => navigate(-1)} className="border-0 blue-background" size="lg">
                                <Image src={backIcon} alt="icon voltar" className="icon-image m-auto"/>
                            </Button>
                        </Col>
                        <Col md={{ span: 2, offset: 8 }} className="d-flex justify-content-end p-2 text-center">
                            <h3 className="rounded-3 blue-background yellow-text h-100 w-50 mx-1 pt-3">{blog.data.getDate()}</h3>
                            <h3 className="rounded-3 blue-background yellow-text h-100 w-50 mx-1 pt-3">{meses[blog.data.getMonth()]}</h3>
                        </Col>
                        <p className="blue-text fw-bold h1 mb-5 mt-5">{blog.titulo}</p>
                        <Image alt="imagem sobre a organização" className="h-auto" src={blog.image}/>
                        <Stack gap={1} direction="horizontal">
                            {blog.categorias.map((tema) =>(
                                <p className="light-grey-background border-1 m-3 px-2 pt-1 pb-1">{tema}</p>
                            ))}
                        </Stack>
                    </Row>
                    <Row className="mt-3 mb-5" md="8">
                        <div dangerouslySetInnerHTML={{ __html: cleanContent}}/>
                    </Row>
                </Col>
                <Col md="3">
                    <Stack direction={"vertical"} gap={3}>
                        <BlogMiniCard blog={blog}/>
                        <BlogMiniCard blog={blog}/>
                        <BlogMiniCard blog={blog}/>
                        <BlogMiniCard blog={blog}/>
                        <BlogMiniCard blog={blog}/>
                    </Stack>
                </Col>


            </Row>

            <Footer/>
        </Container>
    );
}

export default BlogDetail;
