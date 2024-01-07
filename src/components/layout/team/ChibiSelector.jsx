import Container from 'react-bootstrap/Container'
import Image from "react-bootstrap/esm/Image";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import blankImg from '../../../../public/static/img/chibi/blank.png'

function ChibiSelection({ data, highlight, handleHighlight }) {
    return (
        <Container className='chibi-container'>
            <Container className='main-chibi m-1'>
                <Container className='my-3'>
                    <h4 className='fw-bold'>{highlight?.name ? highlight.name : "Escolha um dos chibis!"}</h4>
                    <hr />
                </Container>
                <Image src={highlight != undefined ? `/static/img/chibi/${highlight.servant}.png` : blankImg} width={256} fluid />
                <hr />
            </Container>
            <Container className='lesser-chibi-container'>
                <Row>
                    {data.map((item, index) => (
                        <Col key={item.id} >
                            <Image onClick={() => handleHighlight(item.id)} src={`/static/img/chibi/${item.servant}.png`} width={48} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    );
}

export default ChibiSelection;