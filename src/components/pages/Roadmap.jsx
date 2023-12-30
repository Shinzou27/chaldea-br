import axios from 'axios';
import { useEffect, useState } from 'react';
import EventCard from './../layout/event/EventCard';
import EventModal from '../layout/event/EventModal';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { v4 as uuid } from 'uuid'
import './Roadmap.css';

function Roadmap() {
    const [events, setEvents] = useState();
    const [show, setShow] = useState(false);
    const [modalEvent, setModalEvent] = useState({});
    function handleModal(event) {
        setShow(true);
        setModalEvent(event);
    }
    function handleClose() {
        setShow(false);
    }
    useEffect(() => {
        axios.get('https://opensheet.elk.sh/11E0aTF0DIx3nzDX2Cj0EpbxKJf5alndmkRMbAma0bIk/events').then((response) => {
            setEvents(response.data);
        })
    }, []);
    const eventGrid = (year) => {
        return <Row>
        {events && events.filter((item) => item.year == year).map((item) => (
            <Col key={uuid()} className='my-2' md={4}>
                <EventCard event={item} handleModal={handleModal} />
            </Col>
        ))}
    </Row>
    }
    return (
        <div className='my-3'>
            <div className='pt-5'>
                <h1>Roadmap de eventos</h1>
            </div>
            <Tabs justify>
                <Tab eventKey="2022" title="2022">
                    {eventGrid("2022")}
                </Tab>
                <Tab eventKey="2023" title="2023">
                    {eventGrid("2023")}
                </Tab>
            </Tabs>
            <EventModal event={modalEvent} handleClose={handleClose} show={show} />
        </div>
    );
}

export default Roadmap;