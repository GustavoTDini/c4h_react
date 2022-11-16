import {Button, Col, Dropdown, DropdownButton, InputGroup, Stack} from "react-bootstrap";
import * as React from "react";
import {useState} from "react";
import {_getDonationsByMonth} from "../../api/donations";
import {tokenKey} from "../../utilities/apiHelpers";
import {anos, meses, realNotation} from "../../utilities/HelperFunctions";

const DonationByMonth = ({updateList}) => {
    const [selectedDonations, setSelectedDonations] = useState({list: [], isFetching: false, fetched: false});
    const [ano, setAno] = useState(anos[0])
    const [mes, setMes] = useState(meses[0].numero)
    const [total, setTotal] = useState(0)
    const [totalDonations, setTotalDonations] = useState(0)
    const [media, setMedia] = useState(0)

    const getDonations = () => {
        const fetchDonations = async () => {
            try {
                setSelectedDonations(selectedDonations => ({list: selectedDonations.list, isFetching: true, fetched: false}));
                const response = await _getDonationsByMonth(localStorage.getItem(tokenKey), mes, ano)
                return response.message
            } catch (e) {
                console.log(e);
                return false
            }
        };
        fetchDonations().then(res =>{
            if (res === false){
                setSelectedDonations((selectedDonations) => ({list: selectedDonations.list, isFetching: false, fetched: false}));
            } else{
                setSelectedDonations({list: [...res], isFetching: false, fetched: false});
                if (res.length > 0){
                    setTotalDonations(res.length)
                    let totalSum = 0
                    for (let i = 0; i < res.length; i++){
                        totalSum += res[i].valor
                    }
                    setTotal(totalSum)
                    setMedia(totalSum/res.length)
                }
                updateList(res);
            }
            setSelectedDonations(selectedDonations => ({list: [...selectedDonations.list], isFetching: false, fetched: true}));

        })
    }

    return(
        <Col md={4}>
            <Stack className="w-100 list-height-large p-0 mb-5" gap={4}>
                <h2 className="blue-text mt-3 text-center">Doações por Mês</h2>
                <Button className="w-100" size="lg" onClick={()=> getDonations()}>Verificar</Button>
                <Stack className="justify-content-between mt-2" direction="horizontal">
                    <InputGroup className="mb-3 w-auto">
                        <InputGroup.Text id="basic-addon1">Mês</InputGroup.Text>
                        <DropdownButton
                            variant="outline-secondary"
                            title={meses[mes-1].nome}
                            id="input-group-dropdown-2"
                            align="end"
                            onSelect={(e) => setMes(e)}>
                            {meses.map((mes)=>(
                                <Dropdown.Item
                                    eventKey={mes.numero}
                                >{mes.nome}</Dropdown.Item>
                            ))}
                        </DropdownButton>
                    </InputGroup>
                    <InputGroup className="mb-3 w-auto">
                        <InputGroup.Text id="basic-addon1">Ano</InputGroup.Text>
                        <DropdownButton
                            variant="outline-secondary"
                            title={ano}
                            id="input-group-dropdown-2"
                            align="end"
                            onSelect={(e) => setAno(e)}>
                            {anos.map((ano)=>(
                                <Dropdown.Item
                                    eventKey={ano}
                                >{ano}</Dropdown.Item>
                            ))}
                        </DropdownButton>
                    </InputGroup>
                </Stack>
                {(selectedDonations.fetched && selectedDonations.list.length === 0) &&
                    <h4 className="blue-text text-center">Não houveram doações em {meses[mes-1].nome} de {ano}</h4>}
                {(selectedDonations.fetched && selectedDonations.list.length > 0) &&
                    <Stack>
                        <h4 className="blue-text text-center">Em {meses[mes-1].nome} de {ano}, foram doados no total {realNotation.format(total)}</h4>
                        <h4 className="blue-text text-center">Houveram neste mês um total de {totalDonations} doações</h4>
                        <h4 className="blue-text text-center">Assim a média por doação foi de {realNotation.format(media)}</h4>
                    </Stack>
                }
            </Stack>
        </Col>
    )
}

export default DonationByMonth
