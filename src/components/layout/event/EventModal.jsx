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
    const validations = {
        hasDetail: (event.detail && event.detail != ''),
        hasWelfare: (event.welfare && event.welfare != ''),
        hasSSR: (event.ssr && event.ssr != ''),
        hasSR: (event.sr && event.sr != ''),
        hasR: (event.r && event.r != ''),
        hasResources: !((event.golden_fou == undefined || event.golden_fou == '') && (event.mana_prism == undefined || event.mana_prism == '') && (event.rare_prism == undefined || event.rare_prism == '') && (event.pure_prism == undefined || event.pure_prism == '') && (event.evocation == undefined || event.evocation == '') && (event.qp == undefined || event.qp == '') && (event.golden_apple == undefined || event.golden_apple == '') && (event.sq == undefined || event.sq == '') && (event.ticket == undefined || event.ticket == '') && (event.lore == undefined || event.lore == '') && (event.bond_grail == undefined || event.bond_grail == '') && (event.holy_grail == undefined || event.holy_grail == ''))
    }
    const welfareIcons = (img) => {
        const images = img?.split(",").filter((img) => img.includes("http"));
        return (
            <div className='svt-div'>
                {images && images.map((image, index) => (
                    <Image key={index} src={image} className='m-1' width={64} />
                ))}
            </div>
        )
    }
    const resource = (img, amount, hoverTitle) => {
        return (
            <Container className='d-flex justify-content-between my-2 resource-col'>
                <Image title={hoverTitle} src={img} width={64} />
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
                    <Row className='m-auto w-100 align-items-center general-info-row'>
                        {event.date != '' &&
                            <Col className='info-svt'>
                                <h4>Início</h4>
                                <h4 className='mt-2 fw-lighter'>{event.date}</h4>
                            </Col>
                        }
                        {event.requirement != '' &&
                            <Col className='info-svt'>
                                <h4>Requer</h4>
                                <h4 className='mt-2 fw-lighter'>{event.requirement}</h4>
                            </Col>
                        }
                        {event.event_type != '' &&
                            <Col className='info-svt'>
                                <h4>Tipo de evento</h4>
                                <h4 className='mt-2 fw-lighter'>{event.event_type}</h4>
                            </Col>
                        }
                    </Row>
                </Container>
                <hr />
                <Container className='center-modal'>
                    <h2>Características</h2>
                    <Row className='w-75 align-items-center'>
                        <Col className='checkboxes'>
                            <h4 className='mt-2 fw-normal'>História</h4>
                            <Image src={check(event.story == '1')} width={48} />
                        </Col>
                        <Col className='checkboxes'>
                            <h4 className='mt-2 fw-normal'>Loja</h4>
                            <Image src={check(event.shop == '1')} width={48} />
                        </Col>
                        <Col className='checkboxes'>
                            <h4 className='mt-2 fw-normal'>Servo Grátis</h4>
                            <Image src={check(event.welfare && event.welfare != '')} width={48} />
                        </Col>
                        <Col className='checkboxes'>
                            <h4 className='mt-2 fw-normal'>Banner</h4>
                            <Image src={check(event.banner && event.banner != '')} width={48} />
                        </Col>
                    </Row>
                </Container>
                {(validations.hasDetail || validations.hasWelfare) && <hr />}
                <Container className='center-modal'>
                    <Row className='m-auto w-100 align-items-center'>
                        {event.detail && event.detail != '' && (
                            <Col className='info-svt'>
                                <h2>Informações</h2>
                                {event.detail.split('\\n').map((str, index) => <p key={index}>{str}</p>)}
                            </Col>
                        )}
                        {event.welfare && event.welfare != '' && (
                            <Col className='info-svt'>
                                <h2>Servo Grátis</h2>
                                {welfareIcons(event.welfare)}
                            </Col>
                        )}
                    </Row>
                </Container>
                {(validations.hasSSR || (event.sr && event.sr != '') || (event.r && event.r != '')) && <hr />}
                <Container className='center-modal'>
                    <Row className='w-100 align-items-center rate-up-row'>
                        {(event.ssr && event.ssr != '') &&
                            <Col className='info-svt'>
                                <h2>5★ em Rate-Up</h2>
                                {welfareIcons(event.ssr)}
                            </Col>}
                        {(event.sr && event.sr != '') &&
                            <Col className='info-svt'>
                                <h2>4★ em Rate-Up</h2>
                                {welfareIcons(event.sr)}
                            </Col>}
                        {(event.r && event.r != '') &&
                            <Col className='info-svt'>
                                <h2>3★ em Rate-Up</h2>
                                {welfareIcons(event.r)}
                            </Col>}
                    </Row>
                </Container>
                {validations.hasResources && <hr />}
                <Container className='center-modal'>
                    {validations.hasResources
                        &&
                        <>
                            <h2>Recursos</h2>
                            <Row className='w-100 align-items-center'>
                                <Col>
                                    {resource(rare_prism, event.rare_prism, 'Rare Prism')}
                                    {resource(mana_prism, event.mana_prism, 'Mana Prism')}
                                    {resource(pure_prism, event.pure_prism, 'Pure Prism')}
                                </Col>
                                <Col>
                                    {resource(apple, event.golden_apple, 'Maçã Dourada')}
                                    {resource(lore, event.lore, 'Lore')}
                                    {resource(golden_fou, event.golden_fou, 'Fou Dourado')}
                                </Col>
                                <Col>
                                    {resource(sq, event.sq, 'SQ')}
                                    {resource(ticket, event.ticket, 'Ticket')}
                                    {resource(qp, event.qp, 'QP')}
                                </Col>
                            </Row>
                            <Row className='w-50 align-items-center resources-last-row'>
                                <Col>
                                    {resource(bond_grail, event.bond_grail, 'Graal de Bond')}
                                </Col>
                                <Col>
                                    {resource(holy_grail, event.holy_grail, 'Santo Graal')}
                                </Col>
                            </Row>
                        </>
                    }
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