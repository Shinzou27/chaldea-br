import Container from "react-bootstrap/esm/Container";
import './Home.css'
import Image from "react-bootstrap/esm/Image";
import nobbu from '../../assets/nobbu.png'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

function Home() {
    return (
        <div>
            <Container className="bg-img">
            </Container>
            <Container fluid className="content my-5 py-5" >
                <Container className="title">
                    <h1>Chaldea BR</h1>
                    <h2>Projeto de Tradução</h2>
                </Container>
                <Container className="container-home">
                    <Col className="mx-3 about">
                        <h1 className="title py-2">Sobre o Projeto</h1>
                        <p className="p-2">O Projeto de Tradução Chaldea BR nasceu em Março de 2021, com um grupo pequeno de cinco pessoas almejando traduzir toda a história principal de Fate/Grand Order. Com o tempo, fomos crescendo na comunidade e atualmente contamos com mais de 30 pessoas na equipe e milhares de downloads. Quase dois anos depois da fundação, estamos na reta final da história e quase concluindo o objetivo principal do projeto!</p>
                    </Col>
                    <Col className="mx-3 future">
                        <h1 className="title py-2">Planos Futuros</h1>
                        <p className="p-2">Tradução simultânea do próximo capítulo da história a ser lançado (Tunguska)</p>
                        <p className="p-2">Tradução do Lostbelt 7: Nahui Mictlán</p>
                    </Col>
                </Container>
            </Container>
        </div>
    );
}

export default Home;