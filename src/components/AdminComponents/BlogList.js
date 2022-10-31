import {Col, Container, ListGroup, Row, Stack} from "react-bootstrap";
import * as React from "react";
import BlogMiniCard from "./BlogMiniCard";
import {blog} from "../../utilities/HelperFunctions";
import BlogListItem from "./BlogListItem";

const BlogList = () =>  {


   return(
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
       </Container>


   )


}






export default BlogList
