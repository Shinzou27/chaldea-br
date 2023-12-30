import '../../pages/Roadmap.css';

function EventHover({ event, visibility }) {
    return (
        <>
            {visibility &&
                <div className='hover-info'>
                    SQ: {event.sq}, Ticket: {event.ticket}
                </div>
            }
        </>
    );
}

export default EventHover;