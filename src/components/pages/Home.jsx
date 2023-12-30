import Container from "react-bootstrap/esm/Container";
import './Home.css'
import Image from "react-bootstrap/esm/Image";
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import traum_logo from '../../assets/traum_logo.png'
import { useEffect, useState } from "react";
import axios from 'axios';

function Home() {
    const [newsInfo, setNewsInfo] = useState({});
    const [futureInfo, setFutureInfo] = useState({});
    useEffect(() => {
        axios.get('https://opensheet.elk.sh/11E0aTF0DIx3nzDX2Cj0EpbxKJf5alndmkRMbAma0bIk/misc').then((response) => {
            let aux = response.data.filter((item) => item.type == 'news');
            setNewsInfo(aux[aux.length - 1]);
            aux = response.data.filter((item) => item.type == 'future');
            setFutureInfo(aux[aux.length - 1]);
        })
    }, [])
    const aboutUs = <Col className="mx-3 left">
        <h1 className="title py-1">Sobre o Projeto</h1>
        <p className="p-1">O Projeto de Tradução Chaldea BR nasceu em Março de 2021, com um grupo pequeno de cinco pessoas almejando traduzir toda a história principal de Fate/Grand Order. Com o tempo, fomos crescendo na comunidade e atualmente contamos com mais de 30 pessoas na equipe e milhares de downloads. Quase dois anos depois da fundação, estamos na reta final da história e quase concluindo o objetivo principal do projeto!</p>
    </Col>
    const news = <Col className="m-3 left">
        <h1 className="title py-1">{newsInfo.title}</h1>
        <h4>{newsInfo.subtitle}</h4>
        <a href={newsInfo.redirect}>
            <Image className="chapter-img" src={newsInfo.asset} />
        </a>
    </Col>
    const future = <Col className="m-3 future">
        <h1 className="title py-1">{futureInfo.title}</h1>
        <div>
            <a href={futureInfo.redirect}>
                <Image src={futureInfo.asset} fluid />
            </a>
        </div>
    </Col>
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
                    {news}
                    {future}
                </Container>
            </Container>
        </div>
    );
}

export default Home;