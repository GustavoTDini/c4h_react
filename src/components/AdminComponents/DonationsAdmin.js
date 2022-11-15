import {Button, Col, Container, ListGroup, Row, Stack} from "react-bootstrap";
import DonationChart from "./DonationChart";
import * as React from "react";
import {useEffect, useState} from "react";
import {_getAllDonations} from "../../api/donations";
import {tokenKey} from "../../utilities/apiHelpers";
import {anos, meses, showDonations} from "../../utilities/HelperFunctions";
import DonationByMonth from "../ProfileComponents/DonationByMonth";

const DonationsAdmin = () => {
    const [donations, setDonations] = useState({list: [], isFetching: false, fetched: false});

    useEffect(() => {
        const fetchDonations = async () => {
            try {
                setDonations(donations => ({list: donations.list, isFetching: true, fetched: false}));
                const response = await _getAllDonations(localStorage.getItem(tokenKey))
                return response.message
            } catch (e) {
                console.log(e);
                return false
            }
        };
        fetchDonations().then(res =>{
            if (res === false){
                setDonations((donations) => ({list: donations.list, isFetching: false, fetched: false}));
            } else{
                setDonations({list: [...res], isFetching: true, fetched: true});
            }
        })
    }, []);

    const [ano, setAno] = useState(null)
    const [mes, setMes] = useState(null)

    useState(()=>{
        setAno(anos[0])
        setMes(meses[0].nome)
    })

    const selectMes = (e) =>{
        console.log(e)
        setMes(e)
    }

    const selectAno = (e) =>{
        setAno(e)
    }

    return(
        <Container>
            <Row>
            <Col md={8}>
                <Stack className="w-100 list-height-large p-0 mb-5" gap={4}>
                    <h2 className="blue-text mt-3">Doações</h2>
                    <Container className="list-scroll list-height-large">
                        <ListGroup variant="flush">
                            {donations.fetched && donations.list.map((donation)=>(
                                <ListGroup.Item key={donation.id} action>{showDonations(donation)}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Container>
                    <Button className="w-100">Verificar Doação</Button>
                </Stack>
            </Col>
            <DonationByMonth/>
        </Row>
    <Row className="justify-content-end">
        <DonationChart/>
    </Row>

</Container>



    )
}

export default DonationsAdmin

