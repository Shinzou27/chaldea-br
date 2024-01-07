import Container from 'react-bootstrap/Container'
import Image from "react-bootstrap/esm/Image";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import blankImg from '../../../../public/static/img/chibi/blank.png'

function ChibiSelection({ data, highlight, handleHighlight }) {
    console.log(highlight?.id);
    return (
        <Container className='chibi-container'>
            <Container className='main-chibi m-1'>
                <Container className='my-3'>
                    <h4 className='fw-bold'>{highlight?.name ? highlight.name : "Clique em um dos chibis abaixo!"}</h4>
                    <hr />
                </Container>
                <Image src={highlight != undefined ? `/static/img/chibi/${highlight.id}.png` : blankImg} width={256} fluid />
                <hr />
            </Container>
            <Container className='lesser-chibi-container'>
                <Row>
                    {data.map((item, index) => (
                        <Col key={item.id} >
                            <Image onClick={() => handleHighlight(index)} src={`/static/img/chibi/${index}.png`} width={48} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    );
}

export default ChibiSelection;