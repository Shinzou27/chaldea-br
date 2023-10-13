import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/esm/Image';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/esm/Col';
import ListGroup from 'react-bootstrap/ListGroup'
import Iframe from '../layout/Iframe'

import print_1 from '../../assets/print_1.png'
import print_2 from '../../assets/print_2.png'
import print_3 from '../../assets/print_3.png'

function Tutorial() {
    return (
        <Container fluid className='my-5 py-5'>
            <h1>Guia de instalação</h1>
            <Row className='py-2'>
                <Col md={7}>
                    <Carousel fade slide={false} >
                        <Carousel.Item interval={3000}>
                            <Image fluid width={500} src={print_1}></Image>
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <Image fluid width={500} src={print_2}></Image>
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <Image fluid width={500} src={print_3}></Image>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col md={5}>
                    <ListGroup as="ol" numbered>
                        <ListGroup.Item className='my-2 py-2' variant='dark' as="li">Instale a última versão do app Rayshift.io</ListGroup.Item>
                        <ListGroup.Item className='my-2 py-2' variant='dark' as="li">Selecione a pasta Android na instalação</ListGroup.Item>
                        <ListGroup.Item className='my-2 py-2' variant='dark' as="li">Selecione o servidor no qual você está jogando</ListGroup.Item>
                        <ListGroup.Item className='my-2 py-2' variant='dark' as="li">Instale o patch PT-BR</ListGroup.Item>
                        <ListGroup.Item className='my-2 py-2' variant='dark' as="li">Leia o jogo!</ListGroup.Item>                        
                    </ListGroup>
                </Col>
            </Row>
            <a className='app-link' target='_blank' href="https://github.com/rayshift/translatefgo/releases">
                <h1>Ir para a página do Rayshift.io</h1>
            </a>
            <hr />
            <h1>Tutorial de instalação</h1>
            <Row className='py-2'>
                <Col>
                <Iframe src={"https://www.youtube.com/embed/AGUCAFJenxM"}/>
                </Col>
            </Row>
        </Container>
    );
}

export default Tutorial;