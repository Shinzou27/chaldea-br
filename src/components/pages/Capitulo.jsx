import { useParams } from "react-router-dom";
import ChapterDescription from "../layout/chapter/ChapterDescription";
import CharacterCard from "../layout/chapter/CharacterCard";
import ChapterInfo from "../layout/chapter/ChapterInfo";
import Timestamps from "../layout/chapter/Timestamps";
import { data } from '../../assets/static_data.json'
import Iframe from "../layout/Iframe";
import Container from 'react-bootstrap/Container'
import Image from "react-bootstrap/esm/Image";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Capitulo() {
    const { arc, title } = useParams();
    const chapter = data[title];
    function reveal() {
        let reveals = document.querySelectorAll(".reveal");
      
        for (let i = 0; i < reveals.length; i++) {
          let windowHeight = window.innerHeight;
          let elementTop = reveals[i].getBoundingClientRect().top;
          let elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      
      window.addEventListener("scroll", reveal);
      window.addEventListener("load", reveal);
    return (
        <Container className="mt-5">
            <Container className="chapter-title pt-4">
                <Image width={128} src={`../../public/static/img/icons/${chapter.id}.png`} />
                <h1>{chapter.title.toLocaleUpperCase()}</h1>
            </Container>
            <Row className="pb-5">
                <Col className="pt-2">
                    <CharacterCard chapter={chapter} src={1} />
                </Col>
                <Col className="pt-2">
                    <ChapterDescription title={chapter.title.toLocaleUpperCase()} desc={chapter.desc} />
                </Col>
            </Row>
            <hr />
            <h1 className="py-2">Informações do Capítulo</h1>
            <Row>
                <Col sm={8}>
                    <ChapterInfo chapter={chapter} />
                </Col>
                <Col sm={4}>
                    <CharacterCard chapter={chapter} src={2} />
                </Col>
            </Row>
            <hr />
            {chapter.yt_link != '' &&
                <>
                    <Container>
                        <h1 className="py-4">História</h1>
                        <Iframe src={chapter.yt_link} />
                    </Container>
                    <Container>
                        <h1 className="py-4">Timestamps</h1>
                        <Row>
                            <Col md={6}>
                                <CharacterCard chapter={chapter} src={3} />
                            </Col>
                            <Col md={6}>
                                <Timestamps timestamps={data.shinjuku.timestamps} />
                            </Col>
                        </Row>
                        <hr />
                    </Container>
                </>
            }
                {chapter.trailer != '' && chapter.trailer != undefined ?
                    <Container>
                        <h1 className="py-4">Trailer</h1>
                        <Iframe src={chapter.trailer ? chapter.trailer : 'https://www.youtube.com/embed/AGUCAFJenxM'} />
                    </Container> :
                    <h2 className="pt-5">Não há trailers disponíveis para este capítulo. <br /> :(</h2>}
        </Container>
    );
}

export default Capitulo;