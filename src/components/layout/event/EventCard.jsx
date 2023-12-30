import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card'

function EventCard({ event, handleModal }) {
    const [type, setType] = useState("");
    //story	shop	welfare	raid	lottery	mission	ladder
    useEffect(() => {
        event.story ? setType("Possui história") : setType("Não possui história");
    }, []);
    return (
        <>
            <Card className='event-card'>
                <Card.Body>
                    <Card.Title className='event-title'>{event.title}</Card.Title>
                    <Card.Img className='c-pointer event-img' onClick={() => handleModal(event)} src={event.img} />
                    <Card.Text>
                        Requer: {event.requirement != '' ? event.requirement : '-'}
                    </Card.Text>
                    <Card.Text>
                        {type}
                    </Card.Text>
                    <Card.Text>
                        {event.date}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default EventCard;