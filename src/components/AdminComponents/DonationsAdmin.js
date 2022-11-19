import {Button, Col, Container, Row, Stack} from "react-bootstrap";
import DonationChart from "./DonationChart";
import * as React from "react";
import {useEffect, useState} from "react";
import {_getAllDonations} from "../../api/donations";
import {tokenKey} from "../../utilities/apiHelpers";
import DonationByMonth from "./DonationByMonth";
import DonationsList from "../ListsComponents/DonationsList";

const DonationsAdmin = () => {
    const [donations, setDonations] = useState({list: [], isFetching: false, fetched: false});

    useEffect(() => {
        setDonationsList()
    },[]);

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

    const setDonationsList = () =>{
        fetchDonations().then(res =>{
            if (res === false){
                setDonations((donations) => ({list: donations.list, isFetching: false, fetched: false}));
            } else{
                setDonations({list: [...res], isFetching: false, fetched: true});
            }
        })
    }

    const updateList = (newList) => {
        setDonations({list: [...newList], isFetching: false, fetched: true});
    }

    return(
        <Container>
            <Row>
            <Col md={8}>
                <Stack className="w-100 list-height-large p-0 mb-5" gap={4}>
                    <h2 className="blue-text mt-3">Doações</h2>
                    <DonationsList donations={donations}/>
                    <Button className="w-100" onClick={()=>setDonationsList()}>Ver todas as Doações</Button>
                </Stack>
            </Col>
            <DonationByMonth updateList = {updateList}/>
        </Row>
        <DonationChart/>
</Container>



    )
}

export default DonationsAdmin

