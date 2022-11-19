import {Button, Col, Container, Form, Image, Row, Stack} from "react-bootstrap";
import medal from "../../res/certificado.png";
import * as React from "react";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import AlertMessage from "../AlertsComponents/AlertMessage";
import {resetToken, tokenKey} from "../../utilities/apiHelpers";
import {_getDonationsByUser} from "../../api/donations";
import NavigateButton from "../ButtonsComponents/NavigateButton";
import UserDetails from "./UserDetails";
import LogoutButton from "../ButtonsComponents/LogoutButton";
import DonationsList from "../ListsComponents/DonationsList";
import {_getCurrentLoggedUser} from "../../api/users";

function Profile() {
    const navigate = useNavigate();
    const [donations, setDonations] = useState({list: [], isFetching: false, fetched: false});
    const [currentUser, setCurrentUser] = useState(null)
    const [voluntario, setVoluntario] = useState(false)

    const [showMessage, setShowMessage] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    useEffect(() => {
        fetchUser();
        setDonationsList(fetchDonations)
    }, []);

    const fetchUser = async () => {
        try {
            const response = await _getCurrentLoggedUser(localStorage.getItem(tokenKey))
            if (response === "Unauthenticated." || response === false || response.status === 401){
                resetToken(navigate)
            } else {
                setCurrentUser(response);
            }
        } catch (e) {
            console.log(e);
            resetToken(navigate)
        }
    }

    const fetchDonations = async () => {
        try {
            setDonations(donations => ({list: donations.list, isFetching: true, fetched: false}));
            const response = await _getDonationsByUser(localStorage.getItem(tokenKey))
            if (response.message === "Unauthenticated."){
                resetToken(navigate)
            }
            return response.message
        } catch (e) {
            console.log(e);
            return false
        }
    };

    function setDonationsList(fetchDonations){
        fetchDonations().then(res =>{
            if (res === false){
                setDonations((donations) => ({list: donations.list, isFetching: false, fetched: false}));
            } else{
                setDonations({list: [...res], isFetching: true, fetched: true});
            }
        })
    }

    const handleCloseMessage = () => setShowMessage(false);
    const handleShowMessage = (message, title, button, variant) => {
        setAlertMessage({
            message: message,
            variant: variant,
            title: title,
            buttonText: button,
        })
        setShowMessage(true);
    }

    return(
        < Container className="mt-5 mb-5">
            <Row className="mt-5 justify-content-start">
                <Col md="4" className="mt-2 mb-2">
                    <h1 className="light-blue-text fw-bold text-start">PERFIL</h1>
                </Col>
            </Row>
            <Row className="mt-5 justify-content-lg-start">
                <Col md={8}>
                    <UserDetails admin={false} user={currentUser}/>
                </Col>
                <Col md={4}>
                    {(currentUser!== null && currentUser.doador)?
                        <Stack gap={1} direction={"vertical"} className="m-auto align-items-center">
                            <Image className="medal-image" alt="medalha" src={medal}/>
                            <h3>Doador Yeah!!</h3>
                        </Stack>:<div/>}
                    {(currentUser!== null && currentUser.doador)?
                        <div className="d-flex align-self-center justify-content-end">
                        <Stack className="w-100 list-height p-0 mb-5" gap={4}>
                            <h2 className="blue-text mt-3 text-center">Minhas Doações</h2>
                            <DonationsList donations={donations}/>
                        </Stack>
                    </div>:<div/>}
                    {(currentUser!== null && currentUser.assinante)?<div>
                        <h3 className="text-center">Assinatura programada</h3>
                        <Button className="w-100">Cancelar Assinatura</Button>
                    </div>:<div/>}
                    <Stack className="align-items-center">
                        <Form.Check
                            type="switch"
                            id="switch-Voluntário"
                            label="Voluntário"
                            onClick={()=> setVoluntario(!voluntario)}
                            value={voluntario}
                            size="lg"/>
                        {(currentUser!== null && currentUser.voluntario)?<div>
                            <h3 className="text-center mt-2">Beleza, bora ajudar!</h3>
                        </div>:<div/>}
                    </Stack>
                </Col>
            </Row>
            <Row className="mt-5 justify-content-start">
                <Col md={{ span: 4, offset: 8 }} className="mt-2 mb-2">
                    <Stack direction={"horizontal"} gap={2}>
                        <LogoutButton/>
                        {(currentUser!== null && currentUser.admin) &&
                            <NavigateButton
                                className="w-100"
                                size={"lg"}
                                label={"Administrador"}
                                navigateTo={"/admin"}/>
                        }
                    </Stack>
                </Col>

            </Row>
            <AlertMessage
                message={alertMessage}
                show={showMessage}
                handleButton={()=>handleCloseMessage()}
            />
        </Container>
    );
}

export default Profile;
