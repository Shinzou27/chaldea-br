import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card'

function EventCard({ event, handleModal }) {
    const [topColor, setTopColor] = useState("#2e006c");
    //story	shop	welfare	raid	lottery	mission	ladder
    const colors = ["#f4a297", "#b4bef0", "#cbfdd9", "#fdcd89", "#d5a2f0", "#76e2bd"];
    const months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    useEffect(() => {
        setTopColor(colors[months.indexOf(event.month)%6])
    }, []);
    return (
        <Card style={{
            background: `linear-gradient(135deg, ${topColor} 10%, #222222 10%)`
        }}>
            <Card.Body>
                <Card.Title className='event-title'>{event.title}</Card.Title>
                <Card.Img className='c-pointer event-img my-3' onClick={() => handleModal(event)} src={event.img} />
                <Card.Text className='fw-bold'>
                    {event.date}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default EventCard;