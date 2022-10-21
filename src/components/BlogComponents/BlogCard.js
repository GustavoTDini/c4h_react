import {Card, CardGroup, CardImg, Col, Stack} from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";
import {meses} from "../../HelperFunctions";
import {Link} from "react-router-dom";


function BlogCard({blog}) {

    return(
        <Col md="4" className="mb-5">
            <Card className="border p-2 blue-text">
                <CardHeader className="yellow-background">
                    <Stack direction={"horizontal"} gap={2} className="pt-2">
                        <h5 className="rounded-2 blue-background yellow-text p-2">{blog.data.getDate()}</h5>
                        <h5 className="rounded-2 blue-background yellow-text p-2">{meses[blog.data.getMonth()]}</h5>
                    </Stack>
                </CardHeader>
                <CardGroup>
                    <CardImg className="mb-3" src={blog.image}></CardImg>
                    {blog.categorias.map((categoria) =>(
                        <p  key={categoria.indexOf(categoria)}
                            className="light-grey-background border-1 mx-2 px-2 pt-1 pb-1">{categoria}</p>
                    ))}
                    <h2 className="light-blue-text">{blog.titulo}</h2>
                    <p className="blog-card-text">{blog.texto.slice(0,200) + " ..."}</p>
                    <p><Link to={"/blog/" + blog.id}  state={{ blog: blog }}>Ver mais</Link></p>
                </CardGroup>
            </Card>
        </Col>
    )
}

export default BlogCard
