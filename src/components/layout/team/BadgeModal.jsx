import Modal from 'react-bootstrap/Modal';
function BadgeModal({ translator, chapter, isPresent, show, setShow }) {
    return (
        <Modal centered className='badge-modal' show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Insígnia de {chapter}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{translator?.name} {isPresent ? '' : ' não '} participou da tradução de {chapter}!</p>
            </Modal.Body>
        </Modal>
    );
}

export default BadgeModal;