import {Container, Image, Row} from "react-bootstrap";
import imagemSobre from "../res/imagem-sobre.png";
import Footer from "./HomeComponents/Footer";

function About() {
    return(<Container className="mt-5">
            <Row className="mt-5 mb-5">
                <Image alt="imagem sobre a organização mb-5 mt-5" src={imagemSobre}/>
                <p className="light-blue-text fw-bold h1 mb-5 mt-5">Sobre a organização</p>
                <p className="blue-text  content-text mb-3">PDMIG - Pacto pelo Direito de Migrar é uma organização, de direito privado, sem fins lucrativos, apartidária e filantrópica, nos âmbitos educativo, sociocultural formada e fundada pelos proprios refugiados e imigrantes de diversas continentes e nacionalidades, que trabalha no desenvolvimento de um movimento global de migração e de politicas migratórias locais. Sendo uma das protagonistas das políticas que envolvem a matéria. As suas atividades são pautadas pela diversidade tendo como meta integrar migrantes, atuando na inclusão social dos imigrantes/refugiados dando e proporcionando a eles informações básicas e suporte para o exercício de sua cidadania e defesa da causa migratória.</p>
                <p className="blue-text  content-text mb-3">Fundada em 2013 se formalizou em 2016, PDMIG - África do Coração, uma organização da sociedade civil composta por migrantes, que desempenham o papel de protagonistas na defesa do direito de migrar e no combate ao preconceito e à discriminação. A fim de garantir os seus direitos e deveres, aí fazer a sua integração, promover o real papel dos migrantes e apresentar a realidade dos imigrantes / refugiados. Quebrando barreiras culturais para uma verdadeira inclusão social.</p>
                <p className="blue-text  content-text mb-3">Com missão de atuar como defensora dos Direitos de migrar, tendo como diretrizes principais: (i) a inserção social e a participação de migrantes como protagonistas da sua própria integração, (ii) incentivar sua participação nas discussões e no processo de elaboração das políticas públicas migratórias em nível local, nacional e internacional, (iii) incentivar e motivar diversos projetos com foco na inclusão permanente de refugiados e imigrantes e no fortalecimento da sua visibilidade, combater o preconceito, discriminação e xenofobia</p>
            </Row>
            <Footer/>
        </Container>
    );
}

export default About;
