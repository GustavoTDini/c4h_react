import React from 'react';
import {
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {DropdownButton, InputGroup, Row, Stack} from "react-bootstrap";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Doações por Mês',
        },
    },
};

const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'];

export const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: 'Valor Total de Doações',
            data: labels.map(() => Math.random()*2000),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
            fill: true,
            label: 'Número Total de Doações',
            data: labels.map(() => Math.random()*2000),
            borderColor: 'rgb(71,235,53)',
            backgroundColor: 'rgba(53,235,56,0.5)',
        },
        {
            fill: true,
            label: 'Valor Médio das Doações',
            data: labels.map(() => Math.random()*2000),
            borderColor: 'rgb(235,53,53)',
            backgroundColor: 'rgba(235,53,53,0.5)',
        },
    ]
};

const DonationChart = () =>(
    <Row>
        <Stack className="justify-content-between mt-2" direction="horizontal">
            <InputGroup className="mb-3 w-auto">
                <InputGroup.Text id="basic-addon1">Verificar</InputGroup.Text>
                <DropdownButton
                    variant="outline-secondary"
                    title={"Verificar"}
                    id="input-group-dropdown-2"
                    align="end"
                    // onSelect={(e) => setMes(e)}
                >
                    {/*{meses.map((mes)=>(*/}
                    {/*    <Dropdown.Item*/}
                    {/*        eventKey={mes.numero}*/}
                    {/*    >{mes.nome}</Dropdown.Item>*/}
                    {/*))}*/}
                </DropdownButton>
            </InputGroup>
            <InputGroup className="mb-3 w-auto">
                <InputGroup.Text id="basic-addon1">Período</InputGroup.Text>
                <DropdownButton
                    variant="outline-secondary"
                    title={"tempo"}
                    id="input-group-dropdown-2"
                    align="end"
                    // onSelect={(e) => setAno(e)}
                >
                    {/*{anos.map((ano)=>(*/}
                    {/*    <Dropdown.Item*/}
                    {/*        eventKey={ano}*/}
                    {/*    >{ano}</Dropdown.Item>*/}
                    {/*))}*/}
                </DropdownButton>
            </InputGroup>
        </Stack>
        <Line options={options} data={data} />
    </Row>

)

export default DonationChart
