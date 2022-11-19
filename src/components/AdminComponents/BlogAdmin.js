import {Col, Container, ListGroup, Row, Stack} from "react-bootstrap";
import * as React from "react";
import BlogListItem from "./BlogListItem";
import {blog} from "../../utilities/HelperFunctions";
import BlogMiniCard from "./BlogMiniCard";
import NavigateButton from "../ButtonsComponents/NavigateButton";

const BlogAdmin = () =>  {

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
                <NavigateButton
                label={"Adicionar Blog"}
                navigateTo={"/addBlog"}
                />
            </Col>
        </Container>
    )
}


export default BlogAdmin
