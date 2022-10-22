import {Button, Container, Form, Image, InputGroup, Row} from "react-bootstrap";
import searchIcon from "../../res/search.svg"
import Footer from "../HomeComponents/Footer";
import BlogCard from "./BlogCard";
import * as React from "react";
import BlogPages from "./BlogPages";
import {blog, spliceArray} from "../../HelperFunctions";
import BlogCategories from "./BlogCategories";



function Blogs() {

    const blogs = [blog,blog,blog,blog,blog,blog,blog,blog,blog,blog,blog,blog,blog,blog]

    const [blogsTotal, setBlogsTotal]  = React.useState(0)
    const [pages, setPages]  = React.useState(0)
    const [currentPage, setCurrentPage]  = React.useState(1)


    const handleSelectPage = (e) =>{
        setCurrentPage(e);
    }

    React.useEffect(() => {
        setBlogsTotal(blogs.length);
        setPages(Math.round(blogsTotal/9));
    }, [blogsTotal, pages]);

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
            <BlogCategories/>
            <Row className="mt-5 mb-5 px-4 border-light">
                {spliceArray(blogs,((currentPage - 1) * 9)).map((blog) =>(
                    <BlogCard
                        key={blog.id}
                        blog={blog}/>
                ))}
            </Row>
            <BlogPages pages={pages} currentPage={currentPage} handleSelectPage={handleSelectPage}/>
            <Footer/>
        </Container>
    );
}

export default Blogs;
