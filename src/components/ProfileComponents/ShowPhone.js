import {Accordion, Button, Container, Stack} from "react-bootstrap";
import * as React from "react";
import {useEffect, useState} from "react";
import AddPhone from "./AddPhone";
import PhoneCard from "./PhoneCard";
import {useNavigate} from "react-router";
import {resetToken, tokenKey} from "../../utilities/apiHelpers";
import {_getPhonesByUserId} from "../../api/phone";

function ShowPhone({userId}) {
    const navigate = useNavigate()
    const [showPhones, setShowPhones]= useState(false);
    const [phones, setPhones] = useState({list: [], isFetching: false, fetched: false});

    useEffect(() => {
        refreshData()
    }, [userId]);

    const handleClosePhone = () =>{
        setShowPhones(false);
        refreshData()
    }

    const refreshData = () =>{
        setPhonesList(fetchPhones)
    }
    const handleShowPhone = () => setShowPhones(true);

    const fetchPhones = async () => {
        try {
            setPhones(phones => ({list: phones.list, isFetching: true, fetched: false}));
            const response = await _getPhonesByUserId(localStorage.getItem(tokenKey), userId)
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

    function setPhonesList(fetchPhones){
        fetchPhones().then(res =>{
            console.log(res)
            if (res === false){
                setPhones((phones) => ({list: phones.list, isFetching: false, fetched: false}));
            } else{
                setPhones({list: [...res], isFetching: true, fetched: true});
            }
        })
    }

    return(
        <Container className="p-0">
            <Accordion defaultActiveKey="1" className="justify-content-start">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <h2 className="blue-text h4">Telefones:</h2>
                    </Accordion.Header>
                    <Accordion.Body className="mt-2 justify-content-start card-scroll" style={{height: "220px"}}>
                        <Stack direction="horizontal">
                            <Button className="h-75" onClick={()=> handleShowPhone()}>Adicionar Telefone</Button>
                            {phones.fetched && phones.list.map((phone)=>(
                                <PhoneCard
                                    userId={userId}
                                    key={phone.id}
                                    phone={phone}
                                    refreshData={()=>refreshData()}/>
                            ))}
                        </Stack>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <AddPhone show={showPhones} handleClose={handleClosePhone} id={null} userId={userId}/>
        </Container>
    );
}

export default ShowPhone;
