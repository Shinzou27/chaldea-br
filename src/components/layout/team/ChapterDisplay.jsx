import Container from 'react-bootstrap/Container'
import Image from "react-bootstrap/esm/Image";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tab from 'react-bootstrap/Tab'
import { data as chapterInfo } from '../../../assets/static_data.json'

function ChapterDisplay({ chapters, handleModal }) {
    const arc1 = {
        values: chapters?.slice(0, 9),
        ids: getIds('1')
    };
    const eor = {
        values: chapters?.slice(9, 14),
        ids: getIds('1.5')
    };
    const arc2 = {
        values: chapters?.slice(14, 26),
        ids: getIds('2')
    };
    const events = {
        values: chapters?.slice(28),
        ids: getIds('eventos')
    };
    function getIds(arc) {
        const dataAsArray = [];
        Object.keys(chapterInfo).filter((chapter) => chapterInfo[chapter].arc == arc).forEach((chapter) => {
            dataAsArray.push(chapterInfo[chapter].id);
        });
        return dataAsArray;
    }
    return (
        <Container className='chapters-container px-5'>
            {chapters &&
                <>
                    <Row>
                        {arc1.ids.map((id, index) => (
                            <Col key={id} className='mx-4 chapter-badge'><Image onClick={() => handleModal(id, arc1.values[index])} className={arc1.values[index] == true ? 'part-true' : 'part-false'} src={`/static/img/icons/${id}.png`} width={64} /></Col>
                        ))}
                    </Row>
                    <hr />
                    <Row>
                        {eor.ids.map((id, index) => (
                            <Col key={id} className='mx-4 chapter-badge'><Image onClick={() => handleModal(id, eor.values[index])} className={eor.values[index] == true ? 'part-true' : 'part-false'} src={`/static/img/icons/${id}.png`} width={64} /></Col>
                        ))}
                    </Row>
                    <hr />
                    <Row>
                        {arc2.ids.map((id, index) => (
                            <Col key={id} className='mx-4 chapter-badge'><Image onClick={() => handleModal(id, arc2.values[index])} className={arc2.values[index] == true ? 'part-true' : 'part-false'} src={`/static/img/icons/${id}.png`} width={64} /></Col>
                        ))}
                    </Row>
                    <hr />
                    <Row>
                        {events.ids.map((id, index) => (
                            <Col key={id} className='mx-4 chapter-badge'><Image onClick={() => handleModal(id, events.values[index])} className={events.values[index] == true ? 'part-true' : 'part-false'} src={`/static/img/icons/${id}.png`} width={64} /></Col>
                        ))}
                    </Row>
                </>
            }
        </Container>
    );
}

export default ChapterDisplay;