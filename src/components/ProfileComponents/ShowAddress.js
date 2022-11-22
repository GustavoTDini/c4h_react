import {Accordion, Button, Container, Form, Stack} from "react-bootstrap";
import * as React from "react";
import {useEffect, useState} from "react";
import AddAddress from "./AddAdress";
import AddressCard from "./AddressCard";
import {resetToken, tokenKey} from "../../utilities/apiHelpers";
import {_getAddressesByUserId} from "../../api/address";
import {useNavigate} from "react-router";

function ShowAddress({userId}) {
    const navigate = useNavigate()
    const [showAddress, setShowAddress] = useState(false);
    const [addresses, setAddresses] = useState({list: [], isFetching: false, fetched: false});

    useEffect(() => {
        setAddressesList(fetchAddresses)
    }, [userId]);

    const handleCloseAddress = () => setShowAddress(false);
    const handleShowAddress = () => setShowAddress(true);

    const fetchAddresses = async () => {
        try {
            setAddresses(addresses => ({list: addresses.list, isFetching: true, fetched: false}));
            const response = await _getAddressesByUserId(localStorage.getItem(tokenKey), userId)
            console.log(response.message)
            if (response.message === "Unauthenticated."){
                resetToken(navigate)
            }
            return response.message
        } catch (e) {
            console.log(e);
            return false
        }
    };

    function setAddressesList(fetchAddresses){
        fetchAddresses().then(res =>{
            console.log(res)
            if (res === false){
                setAddresses((addresses) => ({list: addresses.list, isFetching: false, fetched: false}));
            } else{
                setAddresses({list: [...res], isFetching: true, fetched: true});
            }
        })
    }

    return(
        <Container>
        <Accordion defaultActiveKey="1" className="mt-5 justify-content-start">
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <Stack className="justify-content-between" direction="horizontal">
                        <Form.Label className="blue-text h4">Endereços:</Form.Label>
                        <Button className="w-50" onClick={()=> handleShowAddress()}>Adicionar Endereço</Button>
                    </Stack>
                </Accordion.Header>
                <Accordion.Body className="mt-2 justify-content-start card-scroll" style={{height: "300px"}}>
                    <Stack direction="horizontal" gap={2}>
                        {addresses.fetched && addresses.list.map((address)=>(
                            <AddressCard key={address.id} address={address}/>
                        ))}
                    </Stack>
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            <AddAddress show={showAddress} handleClose={handleCloseAddress}/>
        </Container>
    );
}

export default ShowAddress;
