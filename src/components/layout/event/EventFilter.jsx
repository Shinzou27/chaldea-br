import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function EventFilter() {
    const colors = ["#f4a297", "#b4bef0", "#cbfdd9", "#fdcd89", "#d5a2f0", "#76e2bd"];
    const months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    return (
        <Row>
            {months.map((month, index) => (
                <Col md={2}>
                    <button className="w-100 my-1" style={{backgroundColor: colors[index % 6], borderColor: colors[index % 6]}}>{month}</button>
                </Col>
            ))}
        </Row>
    );
}

export default EventFilter;