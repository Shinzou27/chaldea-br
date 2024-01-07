import Container from 'react-bootstrap/Container'
import Image from "react-bootstrap/esm/Image";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {data} from '../../../assets/static_data.json'
function ChapterDisplay({ chapters, handleModal }) {
    const ids = ["fuyuki","orleans", "septem", "okeanos", "london", "america", "camelot", "babylonia", "solomon", "shinjuku", "seraph", "agartha", "shimousa", "salem", "lostbelt-prologue", "anastasia", "gotterdammerung", "sin", "yugakshetra", "atlantis", "olympus", "heian-kyo", "avalon-le-fae", "tunguska", "traum", "nahui-mictlan", "sovereigns-memoir", "paper-moon", "all-the-statesmen", "ooku", "imaginary-scramble", "merry-christmas-in-the-underworld"];
    function getChapter(index) {
        return `/static/img/icons/${ids[index]}.png`
    }
    return (
        <Container className='chapters-container p-5'>
            <Row>
                <Col className='chapter-badge'><Image onClick={() => handleModal(ids[0], chapters[0])} className={chapters[0] == true ? 'part-true' : 'part-false'} src={getChapter(0)} width={64} /></Col>
                <Col className='chapter-badge'><Image onClick={() => handleModal(ids[1], chapters[1])} className={chapters[1] == true ? 'part-true' : 'part-false'} src={getChapter(1)} width={64} /></Col>
                <Col className='chapter-badge'><Image onClick={() => handleModal(ids[2], chapters[2])} className={chapters[2] == true ? 'part-true' : 'part-false'} src={getChapter(2)} width={64} /></Col>
                <Col className='chapter-badge'><Image onClick={() => handleModal(ids[3], chapters[3])} className={chapters[3] == true ? 'part-true' : 'part-false'} src={getChapter(3)} width={64} /></Col>
                <Col className='chapter-badge'><Image onClick={() => handleModal(ids[4], chapters[4])} className={chapters[4] == true ? 'part-true' : 'part-false'} src={getChapter(4)} width={64} /></Col>
                <Col className='chapter-badge'><Image onClick={() => handleModal(ids[5], chapters[5])} className={chapters[5] == true ? 'part-true' : 'part-false'} src={getChapter(5)} width={64} /></Col>
                <Col className='chapter-badge'><Image onClick={() => handleModal(ids[6], chapters[6])} className={chapters[6] == true ? 'part-true' : 'part-false'} src={getChapter(6)} width={64} /></Col>
                <Col className='chapter-badge'><Image onClick={() => handleModal(ids[7], chapters[7])} className={chapters[7] == true ? 'part-true' : 'part-false'} src={getChapter(7)} width={64} /></Col>
                <Col className='chapter-badge'><Image onClick={() => handleModal(ids[8], chapters[8])} className={chapters[8] == true ? 'part-true' : 'part-false'} src={getChapter(8)} width={64} /></Col>
            </Row>
            <hr />
            <Row>
                <Col className='chapter-badge'><Image onClick={() => handleModal(ids[9], chapters[9])} className={chapters[9] == true ? 'part-true' : 'part-false'} src={getChapter(9)} width={64} /></Col>
                <Col className='chapter-badge'><Image onClick={() => handleModal(ids[10], chapters[10])} className={chapters[10] == true ? 'part-true' : 'part-false'} src={getChapter(10)} width={64} /></Col>
                <Col className='chapter-badge'><Image onClick={() => handleModal(ids[11], chapters[11])} className={chapters[11] == true ? 'part-true' : 'part-false'} src={getChapter(11)} width={64} /></Col>
                <Col className='chapter-badge'><Image onClick={() => handleModal(ids[12], chapters[12])} className={chapters[12] == true ? 'part-true' : 'part-false'} src={getChapter(12)} width={64} /></Col>
                <Col className='chapter-badge'><Image onClick={() => handleModal(ids[13], chapters[13])} className={chapters[13] == true ? 'part-true' : 'part-false'} src={getChapter(13)} width={64} /></Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <Row>
                        <Col className='chapter-badge'><Image onClick={() => handleModal(ids[14], chapters[14])} className={chapters[14] == true ? 'part-true' : 'part-false'} src={getChapter(14)} width={64} /></Col>
                        <Col className='chapter-badge'><Image onClick={() => handleModal(ids[15], chapters[15])} className={chapters[15] == true ? 'part-true' : 'part-false'} src={getChapter(15)} width={64} /></Col>
                        <Col className='chapter-badge'><Image onClick={() => handleModal(ids[16], chapters[16])} className={chapters[16] == true ? 'part-true' : 'part-false'} src={getChapter(16)} width={64} /></Col>
                        <Col className='chapter-badge'><Image onClick={() => handleModal(ids[17], chapters[17])} className={chapters[17] == true ? 'part-true' : 'part-false'} src={getChapter(17)} width={64} /></Col>
                        <Col className='chapter-badge'><Image onClick={() => handleModal(ids[18], chapters[18])} className={chapters[18] == true ? 'part-true' : 'part-false'} src={getChapter(18)} width={64} /></Col>
                        <Col className='chapter-badge'><Image onClick={() => handleModal(ids[19], chapters[19])} className={chapters[19] == true ? 'part-true' : 'part-false'} src={getChapter(19)} width={64} /></Col>
                        <Col className='chapter-badge'><Image onClick={() => handleModal(ids[20], chapters[20])} className={chapters[20] == true ? 'part-true' : 'part-false'} src={getChapter(20)} width={64} /></Col>
                    </Row>
                    <Row>
                        <Col className='chapter-badge'><Image onClick={() => handleModal(ids[21], chapters[21])} className={chapters[21] == true ? 'part-true' : 'part-false'} src={getChapter(21)} width={64} /></Col>
                        <Col className='chapter-badge'><Image onClick={() => handleModal(ids[22], chapters[22])} className={chapters[22] == true ? 'part-true' : 'part-false'} src={getChapter(22)} width={64} /></Col>
                        <Col className='chapter-badge'><Image onClick={() => handleModal(ids[23], chapters[23])} className={chapters[23] == true ? 'part-true' : 'part-false'} src={getChapter(23)} width={64} /></Col>
                        <Col className='chapter-badge'><Image onClick={() => handleModal(ids[24], chapters[24])} className={chapters[24] == true ? 'part-true' : 'part-false'} src={getChapter(24)} width={64} /></Col>
                        <Col className='chapter-badge'><Image onClick={() => handleModal(ids[25], chapters[25])} className={chapters[25] == true ? 'part-true' : 'part-false'} src={getChapter(25)} width={64} /></Col>
                    </Row>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col className='chapter-badge'><Image onClick={() => handleModal(ids[28], chapters[28])} className={chapters[28] == true ? 'part-true' : 'part-false'} src={getChapter(28)} width={64} /></Col>
                <Col className='chapter-badge'><Image onClick={() => handleModal(ids[29], chapters[29])} className={chapters[29] == true ? 'part-true' : 'part-false'} src={getChapter(29)} width={64} /></Col>
                <Col className='chapter-badge'><Image onClick={() => handleModal(ids[30], chapters[30])} className={chapters[30] == true ? 'part-true' : 'part-false'} src={getChapter(30)} width={64} /></Col>
                <Col className='chapter-badge'><Image onClick={() => handleModal(ids[31], chapters[31])} className={chapters[31] == true ? 'part-true' : 'part-false'} src={getChapter(31)} width={64} /></Col>
            </Row>
        </Container>
    );
}

export default ChapterDisplay;