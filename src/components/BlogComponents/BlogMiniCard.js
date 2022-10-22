import {Card, CardGroup, CardImg, Col, Stack} from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";
import {meses} from "../../HelperFunctions";
import {Link} from "react-router-dom";


function BlogMiniCard({blog}) {

    return(
        <Card className="border p-2 blue-text">
            <CardHeader className="yellow-background"/>
            <CardGroup>
                <CardImg className="mb-3" src={blog.image}></CardImg>
                <h4 className="light-blue-text"><Link to={"/blog/" + blog.id}  state={{ blog: blog }}>{blog.titulo}</Link></h4>
            </CardGroup>
        </Card>
    )
}

export default BlogMiniCard
