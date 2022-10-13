import {Row} from "react-bootstrap";
import HomeImageText from "./HomeImageText";
import file from "../../res/file-earmark-text.svg";
import check from "../../res/check-circle.svg";
import person from "../../res/person-check.svg";
import calendar from "../../res/calendar4.svg";

const HomeServicoBlock = () => (
    <>
        <Row className="mt-5 mb-5">
            <p className="blue-text fw-bold h1">Serviços aos migrantes</p>
        </Row>
        <Row className="mt-5 mb-5 text-center">
            <HomeImageText
                imagem={file}
                titulo={"Assistência e Inclusão Social"}
                texto={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum egestas posuere. Nam eget nisl mollis, maximus tellus eget, imperdiet dolor. Sed a turpis ac neque facilisis commodo sit amet."}
            />
            <HomeImageText
                imagem={check}
                titulo={"Acompanhamento de Integração"}
                texto={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum egestas posuere. Nam eget nisl mollis, maximus tellus eget, imperdiet dolor. Sed a turpis ac neque facilisis commodo sit amet."}
            />
            <HomeImageText
                imagem={person}
                titulo={"Comunicação e Informação"}
                texto={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum egestas posuere. Nam eget nisl mollis, maximus tellus eget, imperdiet dolor. Sed a turpis ac neque facilisis commodo sit amet."}
            />
            <HomeImageText
                imagem={calendar}
                titulo={"Recepção de Pesquisadores"}
                texto={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum egestas posuere. Nam eget nisl mollis, maximus tellus eget, imperdiet dolor. Sed a turpis ac neque facilisis commodo sit amet."}
            />
        </Row>
    </>
)

export default HomeServicoBlock;
