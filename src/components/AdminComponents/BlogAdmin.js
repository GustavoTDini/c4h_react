import {Button, Col, Container, ListGroup, Row, Stack} from "react-bootstrap";
import * as React from "react";
import BlogListItem from "./BlogListItem";
import {blog} from "../../utilities/HelperFunctions";
import BlogMiniCard from "./BlogMiniCard";
import {useNavigate} from "react-router";

const BlogAdmin = () =>  {
    const navigate = useNavigate();

    const handleClickAddBLog = ()=>{
        navigate("/addBlog")
    }

    return (
        < Container className="mt-5">
            <Row>
                <Col md="9">
                    <Container className="list-scroll list-height-large ">
                        <ListGroup variant="flush">
                            <BlogListItem blog={blog}/>
                            <BlogListItem blog={blog}/>
                            <BlogListItem blog={blog}/>
                            <BlogListItem blog={blog}/>
                            <BlogListItem blog={blog}/>
                        </ListGroup>
                    </Container>
                </Col>
                <Col md="3">
                    <h2 className="blue-text">Destaques</h2>
                    <Stack direction={"vertical"} gap={3}>
                        <BlogMiniCard blog={blog}/>
                        <BlogMiniCard blog={blog}/>
                        <BlogMiniCard blog={blog}/>
                        <BlogMiniCard blog={blog}/>
                    </Stack>
                </Col>
            </Row>
            <Col md="3">
                <Button className="w-100 mb-3" size="lg" onClick={()=>handleClickAddBLog()}>Adicionar Blog</Button>
            </Col>
        </Container>
    )
}


export default BlogAdmin
