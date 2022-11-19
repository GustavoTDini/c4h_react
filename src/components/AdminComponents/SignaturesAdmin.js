import {Col, Container, Row, Stack} from "react-bootstrap";
import * as React from "react";
import {useEffect, useState} from "react";
import {tokenKey} from "../../utilities/apiHelpers";
import {_getAllSignatures} from "../../api/signature";
import {realNotation} from "../../utilities/HelperFunctions";
import SignaturesList from "../ListsComponents/SignaturesList";

const SignaturesAdmin = () => {
    const [signatures, setSignatures] = useState({list: [], isFetching: false, fetched: false});
    const [valorTotal, setValorTotal] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setSignaturesList()
    },[]);

    const fetchSignatures = async () => {
        try {
            setSignatures(signature => ({list: signature.list, isFetching: true, fetched: false}));
            const response = await _getAllSignatures(localStorage.getItem(tokenKey))
            return response.message
        } catch (e) {
            console.log(e);
            return false
        }
    };

    const setSignaturesList = () =>{
        fetchSignatures().then(res =>{
            if (res === false){
                setSignatures((signature) => ({list: signature.list, isFetching: false, fetched: false}));
            } else{
                setSignatures({list: [...res], isFetching: false, fetched: true});
                if (res.length > 0){
                    setTotal(res.length)
                    let totalSum = 0
                    for (let i = 0; i < res.length; i++){
                        totalSum += res[i].valor
                    }
                    setValorTotal(totalSum)
                }
            }
        })
    }

    return(
        <Container>
            <Row>
                <Col md={8}>
                    <Stack className="w-100 list-height-large p-0 mb-5" gap={4}>
                        <h2 className="blue-text mt-3">Doações Mensais Ativas</h2>
                        <SignaturesList signatures={signatures}/>
                    </Stack>
                </Col>
                <Col md={4}>
                    <Stack className="w-100 list-height-large p-0 mb-5" gap={4}>
                        <h2 className="blue-text mt-3 text-center">Valor total de Doações Mensais prevista neste Mês</h2>
                        <h4 className="blue-text text-center">Está previsto {realNotation.format(valorTotal)} em doações programadas neste mês!</h4>
                        <h4 className="blue-text text-center">Há um total de {total} Doadores com Doações mensais</h4>
                    </Stack>
                </Col>
            </Row>

        </Container>



    )
}

export default SignaturesAdmin
