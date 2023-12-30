import chapters from "../chapters";
import './Capitulos.css';
import loading from '../../assets/loading.svg';
import Image from "react-bootstrap/esm/Image";
import Card from 'react-bootstrap/Card'
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from 'react-bootstrap/esm/Button';
import { data } from '../../assets/static_data.json'


function Capitulos({ arc }) {
    let chapterTitle;
    if (arc != "eventos") {
        const sentinels = chapters()[1];
        chapterTitle = chapters()[0][sentinels[arc].START - 1];
    } else if (arc == 'eventos') {
        chapterTitle = {title: "Eventos"};
    }
    const dataAsArray = Object.keys(data).filter((chapter) => data[chapter].arc == arc);
    return (
        <div className="container-fluid mt-5">
            <h1 className="p-5">{chapterTitle && chapterTitle.title}</h1>
            <Row>
                {dataAsArray.length > 0 ? dataAsArray.map((chapter) => (
                    <Col>
                        <Card bg="dark" className="my-4">
                            <Card.Header>
                                <a href={`/capitulo/${arc}/${chapter.toLowerCase()}`}>
                                    <Card.Img src={`/static/img/icons/${data[chapter].id.toLowerCase()}.png`} className="chapter-img">
                                    </Card.Img>
                                </a>
                            </Card.Header>
                            <Card.Body>
                                    <h3 className="chapters-chapter-title">{data[chapter].title}</h3>
                            </Card.Body>
                                    <Button href={`/capitulo/${arc}/${chapter.toLowerCase()}`} variant="success" >Ir</Button>
                        </Card>
                    </Col>
                )
                ) :
                    <div>
                        <h1>Carregando...</h1>
                        <Image src={loading} />
                    </div>}
            </Row>
        </div >
    );
}

export default Capitulos;