import Container from 'react-bootstrap/Container'
import Image from "react-bootstrap/esm/Image";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import placeholder from '../../../assets/event_resources/golden_fou.png'

function ChibiSelection({ data, highlight, handleHighlight }) {

    return (
        <Container className='chibi-container'>
            <Container className='main-chibi m-1'>
                <Container className='my-3'>
                    <h4>{highlight.name}</h4>
                </Container>
                <Image src={`/static/img/chibi/${highlight.id}.png`} width={256} fluid />
            </Container>
            <hr />
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