import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link, useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";

function ChapterInfo({ chapter }) {
    const { arc } = useParams();
    let prevArc = arc;
    let nextArc = arc;
    let prevChap = chapter.prev_chapter;
    let nextChap = chapter.next_chapter;
    if (chapter.next_chapter == 'Shinjuku') {
        nextArc = "1.5";
    } else if (chapter.prev_chapter == 'Solomon') {
        prevArc = "1";
    } else if (chapter.next_chapter == 'Prólogo dos Lostbelts') {
        nextArc = "2";
    } else if (chapter.prev_chapter == 'Salem') {
        prevArc = "1.5";
    } else if (chapter.next_chapter == "Sovereign's Memoir") {
        nextArc = "2.5"
    } else if (chapter.prev_chapter == "Nahui Mictlán") {
        prevArc = "2"
    } else if (['ooku', 'imaginary-scramble'].includes(chapter.id)) {
        prevArc = "2";
        nextArc = "2";
    }

    const changedNames = [
        ['SE.RA.PH.', 'Prólogo dos Lostbelts', 'Götterdämmerung', 'Avalon le Fae', 'Nahui Mictlán', "Sovereign's Memoir", 'Paper Moon'],
        ['seraph', 'prologo-lostbelts', 'gotterdammerung', 'avalon-le-fae', 'nahui-mictlan', 'sovereigns-memoir', 'paper-moon']];
    for (let i = 0; i < changedNames[0].length; i++) {
        if (prevChap == changedNames[0][i]) {
            prevChap = changedNames[1][i];
        } else if (nextChap == changedNames[0][i]) {
            nextChap = changedNames[1][i];
        }
    }

    return (
        <Container>
            
            <Row>
                    <Col>
                        <h4>Lançamento oficial</h4>
                    </Col>
                    <Col>
                        <h4>{chapter.launch_jp}</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>Lançamento em inglês</h4>
                    </Col>
                    <Col>
                        <h4>{chapter.launch_na}</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>Lançamento em português</h4>
                    </Col>
                    <Col>
                        <h4>{chapter.launch_br}</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>Capítulos</h4>
                    </Col>
                    <Col>
                        <h4>{chapter.sections}</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>SQ</h4>
                    </Col>
                    <Col>
                        <h4>{chapter.sq}</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>Capítulo Anterior</h4>
                    </Col>
                    <Col>
                        {prevChap != "-" ? <Link to={`/capitulo/${prevArc}/${prevChap.toLowerCase()}`} style={{textDecoration: 'none'}}><h4 className="text-decoration-none">{chapter.prev_chapter}</h4></Link> : <h4>{chapter.prev_chapter}</h4>}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>Capítulo Seguinte</h4>
                    </Col>
                    <Col>
                        {nextChap != "-" ? <Link to={`/capitulo/${nextArc}/${nextChap.toLowerCase()}`} style={{textDecoration: 'none'}}><h4>{chapter.next_chapter}</h4></Link> : <h4>{chapter.next_chapter}</h4>}
                    </Col>
                </Row>
        </Container>
    );
}

export default ChapterInfo;