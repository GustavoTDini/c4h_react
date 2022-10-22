import {Button, Col, Container, FloatingLabel, Form, Row, Stack} from "react-bootstrap";
import SunEditor from "suneditor-react";
import {pt_Br} from "../../HelperFunctions";
import BlogCategories from "../BlogComponents/BlogCategories";



function Register() {

    return(
        < Container className="mt-5 mb-5">
            <Row className="mt-5 justify-content-around">
                <Col md={12}>
                    <h1 className="text-center blue-text fw-bolder align-items-center m-auto">Adicionar nova Entrada de Blog</h1>
                    <Form className="mt-5 px-5">
                        <Stack direction="vertical" gap={5}>
                            <FloatingLabel controlId="titulo" label="Titulo">
                                <Form.Control type="text"/>
                            </FloatingLabel>
                            <FloatingLabel controlId="texto" label="Chamada" className="h-auto">
                                <Form.Control as="textarea" rows={10} maxLenght={200} />
                            </FloatingLabel>
                            <div>
                                <Form.Label>Adicione uma Imagem</Form.Label>
                                <Form.Control type="file" accept=".png, .jpg, .jpeg"/>
                            </div>
                            <div>
                                <Form.Label>Selecione as Categorias</Form.Label>
                                <BlogCategories position={"inicio"}/>
                            </div>
                            <div>
                                <Form.Label>Adicionar nova Categorias</Form.Label>
                                <FloatingLabel controlId="titulo" label="Categoria">
                                    <Form.Control type="text"/>
                                </FloatingLabel>
                                <Button className="border-0 fw-bold mt-4">Adicionar Categoria</Button>
                            </div>
                            <div >
                                <Form.Label>Conteúdo do Blog</Form.Label>
                                <SunEditor
                                    setOptions={{
                                        "textTags": {
                                            "bold": "b",
                                            "underline": "u",
                                            "italic": "i",
                                            "strike": "s"
                                        },
                                        "value": "",
                                        "mode": "classic",
                                        "rtl": false,
                                        "katex": "window.katex",
                                        "showPathLabel": false,
                                        "charCounter": false,
                                        "width": "auto",
                                        "height": "auto",
                                        "font": [
                                            "Arial",
                                            "tahoma",
                                            "Courier New,Courier"
                                        ],
                                        "fontSize": [
                                            8,
                                            10,
                                            14,
                                            18,
                                            24,
                                            36,
                                            48
                                        ],
                                        "formats": [
                                            "p",
                                            "blockquote",
                                            "h1",
                                            "h2",
                                            "h3",
                                            "h4"
                                        ],
                                        "colorList": [
                                            [
                                                "#000000",
                                                "#FFFFFF",
                                                "#FF0000",
                                                "#00FF00"
                                            ],
                                            [
                                                "#0000FF",
                                                "#FFFF00",
                                                "#00FFFF",
                                                "#FF00FF",
                                            ],
                                            [
                                                "#C0C0C0",
                                                "#808080",
                                                "#800000",
                                                "#808000",
                                            ],
                                            [
                                                "#008000",
                                                "#800080",
                                                "#008080",
                                                "#000080",
                                            ]
                                        ],
                                        "imageGalleryUrl": "https://etyswjpn79.execute-api.ap-northeast-1.amazonaws.com/suneditor-demo",
                                        "videoFileInput": false,
                                        "audioFileInput": true,
                                        "tabDisable": false,
                                        "linkTargetNewWindow": true,
                                        "paragraphStyles": [
                                            "spaced",
                                            {
                                                "name": "Box",
                                                "class": "__se__customClass"
                                            }
                                        ],
                                        "mediaAutoSelect": false,
                                        "buttonList": [
                                            [
                                                "undo",
                                                "redo",
                                                "font",
                                                "fontSize",
                                                "formatBlock",
                                                "blockquote",
                                                "bold",
                                                "underline",
                                                "italic",
                                                "strike",
                                                "fontColor",
                                                "hiliteColor",
                                                "textStyle",
                                                "removeFormat",
                                                "outdent",
                                                "indent",
                                                "align",
                                                "horizontalRule",
                                                "list",
                                                "lineHeight",
                                                "table",
                                                "link",
                                                "image",
                                                "video",
                                                "audio",
                                                "imageGallery",
                                                "fullScreen",
                                                "preview",
                                            ]
                                        ],
                                        "lang": pt_Br,
                                        "lang(In nodejs)": "pt_br"
                                    }}
                                />
                            </div>

                            <Button className="yellow-background border-0 blue-text fw-bold" size="lg">Cadastrar</Button>
                        </Stack>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Register;







