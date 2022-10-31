import {Button, ListGroup, Stack} from "react-bootstrap";
import * as React from "react";


const BlogListItem = ({blog}) => {
    return (
        <ListGroup.Item
            className="d-flex justify-content-between"
            action>
            {blog.titulo}
            <Stack gap={2} direction={"horizontal"}>
                <Button>Editar</Button>
                <Button>Destaque</Button>
            </Stack>
        </ListGroup.Item>
    )
}

export default BlogListItem
