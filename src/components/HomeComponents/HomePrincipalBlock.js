import {Row} from "react-bootstrap";
import LightBlueTextBlock from "./LightBlueTextBlock";


const HomePrincipalBlock = () =>(
    <>
        <Row className="mt-5 mb-5">
            <p className="blue-text fw-bold h1" >Duas Principais Frentes</p>
        </Row>
        <Row className="mt-5 mb-5">
            <LightBlueTextBlock
                titulo={"Integração social e local"}
                texto={"Acompanhar a integração dos migrantes defendendo e promovendo seus direitos e protagonismo contra todas as formas de discriminação e xenofobia no Brasil. Denunciar todo tipo de violência contra direitos humanos e incentivando a fraternidade entre todos os povos."}
            />
            <LightBlueTextBlock
                titulo={"Incidência pública"}
                texto={"Colaborar na formulação, implementação, monitoramento e avaliação de políticas voltadas para a população migrante. Ser agente propositor de pautas municipais, estaduais, nacionais e internacionais em especial para legislação migratória e controle social."}
            />
        </Row>
    </>
)
export default HomePrincipalBlock;
