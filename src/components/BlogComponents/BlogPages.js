import {Pagination, Row} from "react-bootstrap";
import * as React from "react";


function BlogPages({pages, currentPage, handleSelectPage}){

    let items = [];
    for (let number = 1; number <= pages; number++) {
        items.push(
            <Pagination.Item key={number} active={number === currentPage} onClick={()=>handleSelectPage(number)}>
                {number}
            </Pagination.Item>,
        );
    }


    if (pages <= 1){
        return (
            <div/>
        )
    } else{
        return(
            <Row>
                <Pagination className="justify-content-center">
                    {items}
                </Pagination>
            </Row>
        )
    }

}

export default BlogPages
