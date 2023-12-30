import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import apple from '../../../assets/event_resources/apple.png';
import bond_grail from '../../../assets/event_resources/bond_grail.png';
import golden_fou from '../../../assets/event_resources/golden_fou.png';
import holy_grail from '../../../assets/event_resources/holy_grail.png';
import lore from '../../../assets/event_resources/lore.png';
import mana_prism from '../../../assets/event_resources/mana_prism.png';
import pure_prism from '../../../assets/event_resources/pure_prism.png';
import qp from '../../../assets/event_resources/qp.png';
import rare_prism from '../../../assets/event_resources/rare_prism.png';
import sq from '../../../assets/event_resources/sq.png';
import ticket from '../../../assets/event_resources/ticket.png';
import red_cicle from '../../../assets/event_resources/red_circle.png';
import green_cicle from '../../../assets/event_resources/green_circle.png';

function EventModal({ event, handleClose, show }) {
    const resource = (img, amount) => {
        return (
            <Container className='d-flex justify-content-between my-2'>
                <Image src={img} width={64} />
                <p className='amount align-self-center'>{amount == undefined || amount == '' ? 0 : amount}</p>
            </Container>
        )
    }
    function check(statement) {
        if (statement) {
            return green_cicle;
        }
        return red_cicle;
    }
    function handleTest() {
    }
    return (
        <Modal dialogClassName='modal-70w' className='event-modal' onShow={handleTest} centered show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <h1>{event.title}</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container className='center-modal'>
                    <h2>{event.subtitle}</h2>
                    <Image src={event.img} fluid />
                    <h4 className='mt-2'>Início: {event.date}</h4>
                </Container>
                <hr />
                <Container className='center-modal'>
                    <h1>Características</h1>
                    <Row className='w-75 align-items-center'>
                        <Col className='checkboxes'>
                            <h4>História</h4>
                            <Image src={check(event.story == '1')} width={48} />
                        </Col>
                        <Col className='checkboxes'>
                            <h4>Loja</h4>
                            <Image src={check(event.shop == '1')} width={48} />
                        </Col>
                        <Col className='checkboxes'>
                            <h4>Servo Grátis</h4>
                            <Image src={check(event.welfare && event.welfare != '')} width={48} />
                        </Col>
                    </Row>
                </Container>
                <hr />
                <Container className='center-modal'>
                    <Row className='m-auto w-100 align-items-center'>
                        {event.detail && event.detail != '' && (
                            <Col className='info-welfare'>
                                <h1>Informações</h1>
                                {event.detail.split('\\n').map(str => <p>{str}</p>)}
                            </Col>
                        )}
                        {event.welfare && event.welfare != '' && (
                            <Col className='info-welfare'>
                                <h1>Servo Grátis</h1>
                                {event.welfare.length > 20 ? (
                                    <div>
                                        <Image src={event.welfare} className='mx-1' width={64} />
                                    </div>
                                ) : event.welfare}
                            </Col>
                        )}
                    </Row>
                </Container>
                {(event.detail && event.detail != '') || (event.welfare && event.welfare != '') && <hr />}
                <Container className='center-modal'>
                    <h1>Recursos</h1>
                    <Row className='w-100 align-items-center'>
                        <Col>
                            {resource(rare_prism, event.rare_prism)}
                            {resource(mana_prism, event.mana_prism)}
                            {resource(pure_prism, event.pure_prism)}
                        </Col>
                        <Col>
                            {resource(apple, event.golden_apple)}
                            {resource(lore, event.lore)}
                            {resource(golden_fou, event.golden_fou)}
                        </Col>
                        <Col>
                            {resource(sq, event.sq)}
                            {resource(ticket, event.ticket)}
                            {resource(qp, event.qp)}
                        </Col>
                    </Row>
                    <Row className='w-50 align-items-center'>
                        <Col>
                            {resource(bond_grail, event.bond_grail)}
                        </Col>
                        <Col>
                            {resource(holy_grail, event.holy_grail)}
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Sair
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EventModal;