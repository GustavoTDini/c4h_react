import {Button, Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import * as React from "react";
import UsersAdmin from "./UsersAdmin";
import BlogAdmin from "./BlogAdmin";
import DonationsAdmin from "./DonationsAdmin";
import SignaturesAdmin from "./SignaturesAdmin";

function Admin() {

    return(
        < Container className="mt-5 mb-2">
            <Row className="mt-5 justify-content-start">
                <Col md={4}>
                    <h1 className="light-blue-text fw-bold text-start">ADMINISTRADOR</h1>
                </Col>
            </Row>
            <Row className="mt-3 justify-content-lg-start h-auto">
                <Tabs
                    defaultActiveKey="usuarios"
                    id="uncontrolled-tab-example"
                    className="mb-12"
                >
                    <Tab eventKey="usuarios" title="Usuários">
                        <UsersAdmin/>
                    </Tab>
                    <Tab eventKey="doacoes" title="Doações">
                        <DonationsAdmin/>
                    </Tab>
                    <Tab eventKey="assinaturas" title="Assinaturas">
                        <SignaturesAdmin/>
                    </Tab>
                    <Tab eventKey="enderecos" title="Endereços">
                        <BlogAdmin/>
                    </Tab>
                    <Tab eventKey="contatos" title="Contatos">
                        <BlogAdmin/>
                    </Tab>
                    <Tab eventKey="social" title="Redes Sociais">
                        <BlogAdmin/>
                    </Tab>
                    <Tab eventKey="blogs" title="Blogs">
                        <BlogAdmin/>
                    </Tab>
                </Tabs>
            </Row>
            <Row className="mt-5 justify-content-end">
                <Col md="3">
                    <Button className="w-100 mb-3" size="lg">Sair</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Admin;
