import {Button, Container, Form, Image, InputGroup, Pagination, Row} from "react-bootstrap";
import searchIcon from "../../res/search.svg"
import Footer from "../HomeComponents/Footer";
import BlogCard from "./BlogCard";
import blogImage from "../../res/blogImage.jpg";
import {useEffect} from "react";
import * as React from "react";
import BlogPages from "./BlogPages";
import {spliceArray} from "../../HelperFunctions";



function Blogs() {
    const blog = {
        id: 12345,
        image: blogImage,
        titulo: "Copa dos Refugiados e Imigrantes 2022",
        texto: "Vai começar !!! \n Abertura oficial da Copa dos Refugiados e Imigrantes 2022. No Museu do Futebol nesta sexta feira, dia 26/08/2022 `as 11hs. A “Copa dos Refugiados e Imigrantes” é um projeto sócio-esportivo que tem o objetivo de integrar pessoas refugiadas e migrantes na comunidade local, incentivar seu protagonismo, gerar uma agenda positiva e colocar em destaque a agenda global de migração e deslocamento forçado. Bora conhecer o futebol de países do MUNDO que geralmente não conseguimos ver na COPA do MUNDO? Este ano de 2022, esta edição contará com a participação de 7 Estados brasileiros, nas seguintes capitais: Porto Alegre/RS, Curitiba/PR, São Paulo/SP, Rio de Janeiro/RJ, Belo Horizonte/MG, Recife/PE e Brasília / DF.",
        data: new Date(Date.now()),
        temas: ["Copa", "Eventos"]
    }

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
    }, [blogsTotal, pages, currentPage]);

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
                {spliceArray(blogs,((currentPage - 1) * 9)).map((blog) =>(
                    <BlogCard blog={blog}/>
                ))}
            </Row>
            <BlogPages pages={pages} currentPage={currentPage} handleSelectPage={handleSelectPage}/>
            <Footer/>
        </Container>
    );
}

export default Blogs;
