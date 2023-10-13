import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function Timestamps({ timestamps }) {
    const l = [];
    const r = [];
    timestamps.forEach((element, index) => {
        index % 2 == 0 ? l.push(element) : r.push(element);
    });
    return (
        <>
            <Row>
                <Col className="border-end">
                    {l.map((element, index) => (
                        <Row key={index + 1}>
                            <Col>
                                <p>Seção {2 * index + 1}</p>
                            </Col>
                            <Col>
                                <p>{element}</p>
                            </Col>
                        </Row>
                    ))
                    }
                </Col>
                <Col className="border-start">
                    {r.map((element, index) => (
                        <Row key={index + 1}>
                            <Col>
                                <p>Seção {2 * (index + 1)}</p>
                            </Col>
                            <Col>
                                <p>{element}</p>
                            </Col>
                        </Row>
                    ))
                    }
                </Col>
            </Row>
        </>
    );
}

export default Timestamps;