import {Row, Dropdown, DropdownButton, Col} from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";
import * as React from "react";
import {useEffect} from "react";


function BlogCategories({position}){
    const [selecionadas, setSelecionadas]  = React.useState([])
    const [className, setClassName]  = React.useState(["d-flex justify-content-end"])

    useEffect(()=> {
        if (position === "inicio"){
            setClassName("d-flex justify-content-start")
        }
    },[className]);


    const categorias = ["Projetos", "Eventos", "Copa", "Ajuda"]

    const handleAddCategoria = (e) =>{
        if (selecionadas.includes(e)){
            setSelecionadas(selecionadas.filter(remove=> remove!==e))
        } else{
            setSelecionadas(selecionas => [...selecionas, e]);
        }
    };

    if (position === "inicio"){
        return(
            <Row className="mt-2 justify-content-start">
                <Col md="2">
                    <DropdownButton
                        className="d-flex justify-content-start md-4"
                        title="Categorias"
                        onSelect={(e) => handleAddCategoria(e)}>
                        {categorias.map((categoria)=>(
                            <Dropdown.Item
                                key={categorias.indexOf(categoria)}
                                eventKey={categoria}
                            >{categoria}</Dropdown.Item>
                        ))}
                    </DropdownButton>
                </Col>
                <Col md="10" className="d-flex justify-content-start">
                    {selecionadas.map((selecionada)=>(
                        <p  key={selecionadas.indexOf(selecionada)}
                            className="light-grey-background blue-text border-1 mx-2 px-3 pt-1 pb-1 mb-0">{selecionada}</p>
                    ))}
                </Col>
            </Row>
        )
    } else{
        return(
            <Row className="mt-5 justify-content-end me-3">
                <Col md="10" className="d-flex justify-content-end">
                    {selecionadas.map((selecionada)=>(
                        <p  key={selecionadas.indexOf(selecionada)}
                            className="light-grey-background blue-text border-1 mx-2 px-3 pt-1 pb-1 mb-0">{selecionada}</p>
                    ))}
                </Col>
                <Col md="2">
                    <DropdownButton
                        className="d-flex justify-content-end md-4"
                        title="Categorias"
                        onSelect={(e) => handleAddCategoria(e)}>
                        {categorias.map((categoria)=>(
                            <Dropdown.Item
                                key={categorias.indexOf(categoria)}
                                eventKey={categoria}
                            >{categoria}</Dropdown.Item>
                        ))}
                    </DropdownButton>
                </Col>
            </Row>
        )
    }


}

export default BlogCategories
