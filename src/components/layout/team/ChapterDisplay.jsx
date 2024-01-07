import Container from 'react-bootstrap/Container'
import Image from "react-bootstrap/esm/Image";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ChapterDisplay({ chapters, handleModal }) {
    const arc1 = {
        values: chapters?.slice(0, 8),
        ids: ["fuyuki", "orleans", "septem", "okeanos", "london", "america", "camelot", "babylonia", "solomon"]
    };
    const eor = {
        values: chapters?.slice(9, 13),
        ids: ["shinjuku", "seraph", "agartha", "shimousa", "salem"]
    };
    const arc2 = {
        values: chapters?.slice(14, 25),
        ids: ["lostbelt-prologue", "anastasia", "gotterdammerung", "sin", "yugakshetra", "atlantis", "olympus", "heian-kyo", "avalon-le-fae", "tunguska", "traum", "nahui-mictlan"]
    };
    const events = {
        values: chapters?.slice(28),
        ids: ["all-the-statesmen", "ooku", "imaginary-scramble", "merry-christmas-in-the-underworld"]
    };
    const ids = ["sovereigns-memoir", "paper-moon"];
    function getChapter(index) {
        return `/static/img/icons/${ids[index]}.png`
    }
    return (
        <Container className='chapters-container px-5'>
            {chapters &&
                <>
                    <Row>
                        {arc1.ids.map((id, index) => (
                            <Col className='mx-4 chapter-badge'><Image onClick={() => handleModal(id, arc1.values[index])} className={arc1.values[index] == true ? 'part-true' : 'part-false'} src={`/static/img/icons/${id}.png`} width={64} /></Col>
                        ))}
                    </Row>
                    <hr />
                    <Row>
                        {eor.ids.map((id, index) => (
                            <Col className='mx-4 chapter-badge'><Image onClick={() => handleModal(id, eor.values[index])} className={eor.values[index] == true ? 'part-true' : 'part-false'} src={`/static/img/icons/${id}.png`} width={64} /></Col>
                        ))}
                    </Row>
                    <hr />
                    <Row>
                        {arc2.ids.map((id, index) => (
                            <Col className='mx-4 chapter-badge'><Image onClick={() => handleModal(id, arc2.values[index])} className={arc2.values[index] == true ? 'part-true' : 'part-false'} src={`/static/img/icons/${id}.png`} width={64} /></Col>
                        ))}
                    </Row>
                    <hr />
                    <Row>
                        {events.ids.map((id, index) => (
                            <Col className='mx-4 chapter-badge'><Image onClick={() => handleModal(id, events.values[index])} className={events.values[index] == true ? 'part-true' : 'part-false'} src={`/static/img/icons/${id}.png`} width={64} /></Col>
                        ))}
                    </Row>
                </>
            }
        </Container>
    );
}

export default ChapterDisplay;