import {Card, CardGroup, CardImg, Col, Stack} from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";
import {useEffect} from "react";
import blogImage from "../../res/blogImage.jpg";


function BlogCard({blog}) {

    const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]

    return(
        <Col md="4" className="mb-5">
            <Card className="border p-2 blue-text">
                <CardHeader className="yellow-background">
                    <Stack direction={"horizontal"}>
                        <h5 className="blue-background yellow-text p-2">{blog.data.getDate()}</h5>
                        <h5 className="blue-background yellow-text p-2">{meses[blog.data.getMonth()]}</h5>
                    </Stack>
                </CardHeader>
                <CardGroup>
                    <CardImg src={blog.image}></CardImg>
                    <h2 className="mt-3 light-blue-text">{blog.titulo}</h2>
                    <p className="blog-card-text">{blog.texto.slice(0,200) + " ..."}</p>
                    {blog.temas.map((tema) =>(
                        <p className="light-grey-background border-1 m-1 p-1">{tema}</p>
                    ))}
                </CardGroup>
            </Card>
        </Col>
    )
}

export default BlogCard
