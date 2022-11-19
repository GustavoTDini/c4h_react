import {Button, Col, Container, Form, Row, Stack} from "react-bootstrap";
import * as React from "react";
import {useState} from "react";
import AddSocialMedia from "./AddSocialMedia";
import SocialMediaCard from "./SocialMediaCard";

function ShowSocialMedia() {
    const [showSocialMedia, setShowSocialMedia] = useState(false);

    const handleCloseSocialMedia = () => setShowSocialMedia(false);
    const handleShowSocialMedia = () => setShowSocialMedia(true);

    return(
        <Container>
            <Row className="mt-5 justify-content-start">
                <Col md={8}>
                    <Stack className="justify-content-between" direction="horizontal">
                        <Form.Label className="blue-text h4">Mídias Sociais:</Form.Label>
                        <Button className="w-50" onClick={()=> handleShowSocialMedia()}>Adicionar Mídia</Button>
                    </Stack>
                </Col>
            </Row>
            <Row className="mt-2 justify-content-start card-scroll" style={{height: "250px"}}>
                <Stack direction="horizontal">
                    <SocialMediaCard/>
                </Stack>
            </Row>
            <AddSocialMedia show={showSocialMedia} handleClose={handleCloseSocialMedia}/>
        </Container>
    );
}

export default ShowSocialMedia;
